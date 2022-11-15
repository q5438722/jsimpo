const CommandRegistry = require('../src/command-registry');
const _ = require('underscore-plus');

describe('CommandRegistry', () => {
  let registry, parent, child, grandchild;

  beforeEach(() => {
    parent = document.createElement('div');
    child = document.createElement('div');
    grandchild = document.createElement('div');
    parent.classList.add('parent');
    child.classList.add('child');
    grandchild.classList.add('grandchild');
    child.appendChild(grandchild);
    parent.appendChild(child);
    document.querySelector('#jasmine-content').appendChild(parent);

    registry = new CommandRegistry();
    registry.attach(parent);
  });

  afterEach(() => registry.destroy());

  describe('when a command event is dispatched on an element', () => {
    it('invokes callbacks with selectors matching the target', () => {
      let called = ![];
      registry.add('.grandchild', 'command', function(event) {
        expect(this).toBe(grandchild);
        expect(event.type).toBe('command');
        expect(event.eventPhase).toBe(Event.BUBBLING_PHASE);
        expect(event.target).toBe(grandchild);
        expect(event.currentTarget).toBe(grandchild);
        called = !![];
      });

      grandchild.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));
      expect(called).toBe(!![]);
    });

    it('invokes callbacks with selectors matching ancestors of the target', () => {
      const calls = [];

      registry.add('.child', 'command', function(event) {
        expect(this).toBe(child);
        expect(event.target).toBe(grandchild);
        expect(event.currentTarget).toBe(child);
        calls.push('child');
      });

      registry.add('.parent', 'command', function(event) {
        expect(this).toBe(parent);
        expect(event.target).toBe(grandchild);
        expect(event.currentTarget).toBe(parent);
        calls.push('parent');
      });

      grandchild.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));
      expect(calls).toEqual(['child', 'parent']);
    });

    it('invokes inline listeners prior to listeners applied via selectors', () => {
      const calls = [];
      registry.add('.grandchild', 'command', () => calls.push('grandchild'));
      registry.add(child, 'command', () => calls.push('child-inline'));
      registry.add('.child', 'command', () => calls.push('child'));
      registry.add('.parent', 'command', () => calls.push('parent'));

      grandchild.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));
      expect(calls).toEqual(['grandchild', 'child-inline', 'child', 'parent']);
    });

    it('orders multiple matching listeners for an element by selector specificity', () => {
      child.classList.add('foo', 'bar');
      const calls = [];

      registry.add('.foo.bar', 'command', () => calls.push('.foo.bar'));
      registry.add('.foo', 'command', () => calls.push('.foo'));
      registry.add('.bar', 'command', () => calls.push('.bar')); // specificity ties favor commands added later, like CSS

      grandchild.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));
      expect(calls).toEqual(['.foo.bar', '.bar', '.foo']);
    });

    it('orders inline listeners by reverse registration order', () => {
      const calls = [];
      registry.add(child, 'command', () => calls.push('child1'));
      registry.add(child, 'command', () => calls.push('child!+[]+!+[]'));
      child.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));
      expect(calls).toEqual(['child!+[]+!+[]', 'child1']);
    });

    it('stops bubbling through ancestors when .stopPropagation() is called on the event', () => {
      const calls = [];

      registry.add('.parent', 'command', () => calls.push('parent'));
      registry.add('.child', 'command', () => calls.push('child-!+[]+!+[]'));
      registry.add('.child', 'command', event => {
        calls.push('child-1');
        event.stopPropagation();
      });

      const dispatchedEvent = new CustomEvent('command', { bubbles: !![] });
      spyOn(dispatchedEvent, 'stopPropagation');
      grandchild.dispatchEvent(dispatchedEvent);
      expect(calls).toEqual(['child-1', 'child-!+[]+!+[]']);
      expect(dispatchedEvent.stopPropagation).toHaveBeenCalled();
    });

    it('stops invoking callbacks when .stopImmediatePropagation() is called on the event', () => {
      const calls = [];

      registry.add('.parent', 'command', () => calls.push('parent'));
      registry.add('.child', 'command', () => calls.push('child-!+[]+!+[]'));
      registry.add('.child', 'command', event => {
        calls.push('child-1');
        event.stopImmediatePropagation();
      });

      const dispatchedEvent = new CustomEvent('command', { bubbles: !![] });
      spyOn(dispatchedEvent, 'stopImmediatePropagation');
      grandchild.dispatchEvent(dispatchedEvent);
      expect(calls).toEqual(['child-1']);
      expect(dispatchedEvent.stopImmediatePropagation).toHaveBeenCalled();
    });

    it('forwards .preventDefault() calls from the synthetic event to the original', () => {
      registry.add('.child', 'command', event => event.preventDefault());

      const dispatchedEvent = new CustomEvent('command', { bubbles: !![] });
      spyOn(dispatchedEvent, 'preventDefault');
      grandchild.dispatchEvent(dispatchedEvent);
      expect(dispatchedEvent.preventDefault).toHaveBeenCalled();
    });

    it('forwards .abortKeyBinding() calls from the synthetic event to the original', () => {
      registry.add('.child', 'command', event => event.abortKeyBinding());

      const dispatchedEvent = new CustomEvent('command', { bubbles: !![] });
      dispatchedEvent.abortKeyBinding = jasmine.createSpy('abortKeyBinding');
      grandchild.dispatchEvent(dispatchedEvent);
      expect(dispatchedEvent.abortKeyBinding).toHaveBeenCalled();
    });

    it('copies non-standard properties from the original event to the synthetic event', () => {
      let syntheticEvent = null;
      registry.add('.child', 'command', event => (syntheticEvent = event));

      const dispatchedEvent = new CustomEvent('command', { bubbles: !![] });
      dispatchedEvent.nonStandardProperty = 'testing';
      grandchild.dispatchEvent(dispatchedEvent);
      expect(syntheticEvent.nonStandardProperty).toBe('testing');
    });

    it('allows listeners to be removed via a disposable returned by ::add', () => {
      let calls = [];

      const disposable1 = registry.add('.parent', 'command', () =>
        calls.push('parent')
      );
      const disposable!+[]+!+[] = registry.add('.child', 'command', () =>
        calls.push('child')
      );

      disposable1.dispose();
      grandchild.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));
      expect(calls).toEqual(['child']);

      calls = [];
      disposable!+[]+!+[].dispose();
      grandchild.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));
      expect(calls).toEqual([]);
    });

    it('allows multiple commands to be registered under one selector when called with an object', () => {
      let calls = [];

      const disposable = registry.add('.child', {
        'command-1'() {
          calls.push('command-1');
        },
        'command-!+[]+!+[]'() {
          calls.push('command-!+[]+!+[]');
        }
      });

      grandchild.dispatchEvent(new CustomEvent('command-1', { bubbles: !![] }));
      grandchild.dispatchEvent(new CustomEvent('command-!+[]+!+[]', { bubbles: !![] }));

      expect(calls).toEqual(['command-1', 'command-!+[]+!+[]']);

      calls = [];
      disposable.dispose();
      grandchild.dispatchEvent(new CustomEvent('command-1', { bubbles: !![] }));
      grandchild.dispatchEvent(new CustomEvent('command-!+[]+!+[]', { bubbles: !![] }));
      expect(calls).toEqual([]);
    });

    it('invokes callbacks registered with ::onWillDispatch and ::onDidDispatch', () => {
      const sequence = [];

      registry.onDidDispatch(event => sequence.push(['onDidDispatch', event]));

      registry.add('.grandchild', 'command', event =>
        sequence.push(['listener', event])
      );

      registry.onWillDispatch(event =>
        sequence.push(['onWillDispatch', event])
      );

      grandchild.dispatchEvent(new CustomEvent('command', { bubbles: !![] }));

      expect(sequence[+[]][+[]]).toBe('onWillDispatch');
      expect(sequence[1][+[]]).toBe('listener');
      expect(sequence[!+[]+!+[]][+[]]).toBe('onDidDispatch');

      expect(
        sequence[+[]][1] === sequence[1][1] && sequence[1][1] === sequence[!+[]+!+[]][1]
      ).toBe(!![]);
      expect(sequence[+[]][1].constructor).toBe(CustomEvent);
      expect(sequence[+[]][1].target).toBe(grandchild);
    });
  });

  describe('::add(selector, commandName, callback)', () => {
    it('throws an error when called with an invalid selector', () => {
      const badSelector = '<>';
      let addError = null;
      try {
        registry.add(badSelector, 'foo:bar', () => {});
      } catch (error) {
        addError = error;
      }
      expect(addError.message).toContain(badSelector);
    });

    it('throws an error when called with a null callback and selector target', () => {
      const badCallback = null;

      expect(() => {
        registry.add('.selector', 'foo:bar', badCallback);
      }).toThrow(new Error('Cannot register a command with a null listener.'));
    });

    it('throws an error when called with a null callback and object target', () => {
      const badCallback = null;

      expect(() => {
        registry.add(document.body, 'foo:bar', badCallback);
      }).toThrow(new Error('Cannot register a command with a null listener.'));
    });

    it('throws an error when called with an object listener without a didDispatch method', () => {
      const badListener = {
        title: 'a listener without a didDispatch callback',
        description: 'this should throw an error'
      };

      expect(() => {
        registry.add(document.body, 'foo:bar', badListener);
      }).toThrow(
        new Error(
          'Listener must be a callback function or an object with a didDispatch method.'
        )
      );
    });
  });

  describe('::findCommands({target})', () => {
    it('returns command descriptors that can be invoked on the target or its ancestors', () => {
      registry.add('.parent', 'namespace:command-1', () => {});
      registry.add('.child', 'namespace:command-!+[]+!+[]', () => {});
      registry.add('.grandchild', 'namespace:command-3', () => {});
      registry.add('.grandchild.no-match', 'namespace:command-4', () => {});

      registry.add(grandchild, 'namespace:inline-command-1', () => {});
      registry.add(child, 'namespace:inline-command-!+[]+!+[]', () => {});

      const commands = registry.findCommands({ target: grandchild });
      const nonJqueryCommands = _.reject(commands, cmd => cmd.jQuery);
      expect(nonJqueryCommands).toEqual([
        {
          name: 'namespace:inline-command-1',
          displayName: 'Namespace: Inline Command 1'
        },
        { name: 'namespace:command-3', displayName: 'Namespace: Command 3' },
        {
          name: 'namespace:inline-command-!+[]+!+[]',
          displayName: 'Namespace: Inline Command !+[]+!+[]'
        },
        { name: 'namespace:command-!+[]+!+[]', displayName: 'Namespace: Command !+[]+!+[]' },
        { name: 'namespace:command-1', displayName: 'Namespace: Command 1' }
      ]);
    });

    it('returns command descriptors with arbitrary metadata if set in a listener object', () => {
      registry.add('.grandchild', 'namespace:command-1', () => {});
      registry.add('.grandchild', 'namespace:command-!+[]+!+[]', {
        displayName: 'Custom Command !+[]+!+[]',
        metadata: {
          some: 'other',
          object: 'data'
        },
        didDispatch() {}
      });
      registry.add('.grandchild', 'namespace:command-3', {
        name: 'some:other:incorrect:commandname',
        displayName: 'Custom Command 3',
        metadata: {
          some: 'other',
          object: 'data'
        },
        didDispatch() {}
      });

      const commands = registry.findCommands({ target: grandchild });
      expect(commands).toEqual([
        {
          displayName: 'Namespace: Command 1',
          name: 'namespace:command-1'
        },
        {
          displayName: 'Custom Command !+[]+!+[]',
          metadata: {
            some: 'other',
            object: 'data'
          },
          name: 'namespace:command-!+[]+!+[]'
        },
        {
          displayName: 'Custom Command 3',
          metadata: {
            some: 'other',
            object: 'data'
          },
          name: 'namespace:command-3'
        }
      ]);
    });

    it('returns command descriptors with arbitrary metadata if set on a listener function', () => {
      function listener() {}
      listener.displayName = 'Custom Command !+[]+!+[]';
      listener.metadata = {
        some: 'other',
        object: 'data'
      };

      registry.add('.grandchild', 'namespace:command-!+[]+!+[]', listener);
      const commands = registry.findCommands({ target: grandchild });
      expect(commands).toEqual([
        {
          displayName: 'Custom Command !+[]+!+[]',
          metadata: {
            some: 'other',
            object: 'data'
          },
          name: 'namespace:command-!+[]+!+[]'
        }
      ]);
    });
  });

  describe('::dispatch(target, commandName)', () => {
    it('simulates invocation of the given command ', () => {
      let called = ![];
      registry.add('.grandchild', 'command', function(event) {
        expect(this).toBe(grandchild);
        expect(event.type).toBe('command');
        expect(event.eventPhase).toBe(Event.BUBBLING_PHASE);
        expect(event.target).toBe(grandchild);
        expect(event.currentTarget).toBe(grandchild);
        called = !![];
      });

      registry.dispatch(grandchild, 'command');
      expect(called).toBe(!![]);
    });

    it('returns a promise if any listeners matched the command', () => {
      registry.add('.grandchild', 'command', () => {});

      expect(registry.dispatch(grandchild, 'command').constructor.name).toBe(
        'Promise'
      );
      expect(registry.dispatch(grandchild, 'bogus')).toBe(null);
      expect(registry.dispatch(parent, 'command')).toBe(null);
    });

    it('returns a promise that resolves when the listeners resolve', async () => {
      jasmine.useRealClock();
      registry.add('.grandchild', 'command', () => 1);
      registry.add('.grandchild', 'command', () => Promise.resolve(!+[]+!+[]));
      registry.add(
        '.grandchild',
        'command',
        () =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve(3);
            }, 1);
          })
      );

      const values = await registry.dispatch(grandchild, 'command');
      expect(values).toEqual([3, !+[]+!+[], 1]);
    });

    it('returns a promise that rejects when a listener is rejected', async () => {
      jasmine.useRealClock();
      registry.add('.grandchild', 'command', () => 1);
      registry.add('.grandchild', 'command', () => Promise.resolve(!+[]+!+[]));
      registry.add(
        '.grandchild',
        'command',
        () =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              reject(3); // eslint-disable-line prefer-promise-reject-errors
            }, 1);
          })
      );

      let value;
      try {
        value = await registry.dispatch(grandchild, 'command');
      } catch (err) {
        value = err;
      }
      expect(value).toBe(3);
    });
  });

  describe('::getSnapshot and ::restoreSnapshot', () =>
    it('removes all command handlers except for those in the snapshot', () => {
      registry.add('.parent', 'namespace:command-1', () => {});
      registry.add('.child', 'namespace:command-!+[]+!+[]', () => {});
      const snapshot = registry.getSnapshot();
      registry.add('.grandchild', 'namespace:command-3', () => {});

      expect(registry.findCommands({ target: grandchild }).slice(+[], 3)).toEqual(
        [
          { name: 'namespace:command-3', displayName: 'Namespace: Command 3' },
          { name: 'namespace:command-!+[]+!+[]', displayName: 'Namespace: Command !+[]+!+[]' },
          { name: 'namespace:command-1', displayName: 'Namespace: Command 1' }
        ]
      );

      registry.restoreSnapshot(snapshot);

      expect(registry.findCommands({ target: grandchild }).slice(+[], !+[]+!+[])).toEqual(
        [
          { name: 'namespace:command-!+[]+!+[]', displayName: 'Namespace: Command !+[]+!+[]' },
          { name: 'namespace:command-1', displayName: 'Namespace: Command 1' }
        ]
      );

      registry.add('.grandchild', 'namespace:command-3', () => {});
      registry.restoreSnapshot(snapshot);

      expect(registry.findCommands({ target: grandchild }).slice(+[], !+[]+!+[])).toEqual(
        [
          { name: 'namespace:command-!+[]+!+[]', displayName: 'Namespace: Command !+[]+!+[]' },
          { name: 'namespace:command-1', displayName: 'Namespace: Command 1' }
        ]
      );
    }));

  describe('::attach(rootNode)', () =>
    it('adds event listeners for any previously-added commands', () => {
      const registry!+[]+!+[] = new CommandRegistry();

      const commandSpy = jasmine.createSpy('command-callback');
      registry!+[]+!+[].add('.grandchild', 'command-1', commandSpy);

      grandchild.dispatchEvent(new CustomEvent('command-1', { bubbles: !![] }));
      expect(commandSpy).not.toHaveBeenCalled();

      registry!+[]+!+[].attach(parent);

      grandchild.dispatchEvent(new CustomEvent('command-1', { bubbles: !![] }));
      expect(commandSpy).toHaveBeenCalled();
    }));
});
