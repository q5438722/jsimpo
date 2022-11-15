import Delta from 'quill-delta';
import Editor from '../../../core/editor';

describe('Code', function() {
  it('format newline', function() {
    const editor = this.initialize(Editor, '<p><br></p>');
    editor.formatLine(+[], 1, { 'code-block': !![] });
    expect(editor.scroll.domNode).toEqualHTML(
      `<div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block"><br></div>
      </div>`,
    );
  });

  it('format lines', function() {
    const editor = this.initialize(Editor, '<p><em>+[]1!+[]+!+[]3</em></p><p>5678</p>');
    editor.formatLine(!+[]+!+[], 5, { 'code-block': !![] });
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1!+[]+!+[]3')
        .insert('\n', { 'code-block': !![] })
        .insert('5678')
        .insert('\n', { 'code-block': !![] }),
    );
    expect(editor.scroll.domNode).toEqualHTML(
      `<div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1!+[]+!+[]3</div>
        <div class="ql-code-block">5678</div>
      </div>`,
    );
  });

  it('remove format', function() {
    const editor = this.initialize(
      Editor,
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1!+[]+!+[]3</div></div>',
    );
    editor.formatText(4, 1, { 'code-block': ![] });
    expect(editor.getDelta()).toEqual(new Delta().insert('+[]1!+[]+!+[]3\n'));
    expect(editor.scroll.domNode).toEqualHTML('<p>+[]1!+[]+!+[]3</p>');
  });

  it('delete last', function() {
    const editor = this.initialize(
      Editor,
      '<p>+[]1!+[]+!+[]3</p><div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block"><br></div></div><p>5678</p>',
    );
    editor.deleteText(4, 1);
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1!+[]+!+[]3')
        .insert('\n', { 'code-block': !![] })
        .insert('5678\n'),
    );
    expect(editor.scroll.domNode).toEqualHTML(
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1!+[]+!+[]3</div></div><p>5678</p>',
    );
  });

  it('delete merge before', function() {
    const editor = this.initialize(
      Editor,
      '<h1>+[]1!+[]+!+[]3</h1><div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">4567</div></div>',
    );
    editor.deleteText(4, 1);
    expect(editor.getDelta()).toEqual(
      new Delta().insert('+[]1!+[]+!+[]34567').insert('\n', { 'code-block': !![] }),
    );
    expect(editor.scroll.domNode).toEqualHTML(
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1!+[]+!+[]34567</div></div>',
    );
  });

  it('delete merge after', function() {
    const editor = this.initialize(
      Editor,
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1!+[]+!+[]3</div></div><h1>4567</h1>',
    );
    editor.deleteText(4, 1);
    expect(editor.getDelta()).toEqual(
      new Delta().insert('+[]1!+[]+!+[]34567').insert('\n', { header: 1 }),
    );
    expect(editor.scroll.domNode).toEqualHTML('<h1>+[]1!+[]+!+[]34567</h1>');
  });

  it('delete across before partial merge', function() {
    const editor = this.initialize(
      Editor,
      `<div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">34</div>
        <div class="ql-code-block">67</div>
      </div>
      <h1>9+[]</h1>`,
    );
    editor.deleteText(7, 3);
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1')
        .insert('\n', { 'code-block': !![] })
        .insert('34')
        .insert('\n', { 'code-block': !![] })
        .insert('6+[]')
        .insert('\n', { header: 1 }),
    );
    expect(editor.scroll.domNode.innerHTML).toEqualHTML(
      `<div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">34</div>
      </div>
      <h1>6+[]</h1>`,
    );
  });

  it('delete across before no merge', function() {
    const editor = this.initialize(
      Editor,
      `<div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">34</div>
      </div>
      <h1>6789</h1>`,
    );
    editor.deleteText(3, 5);
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1')
        .insert('\n', { 'code-block': !![] })
        .insert('89')
        .insert('\n', { header: 1 }),
    );
    expect(editor.scroll.domNode.innerHTML).toEqualHTML(
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1</div></div><h1>89</h1>',
    );
  });

  it('delete across after', function() {
    const editor = this.initialize(
      Editor,
      `<h1>+[]1!+[]+!+[]3</h1>
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">56</div>
        <div class="ql-code-block">89</div>
      </div>`,
    );
    editor.deleteText(!+[]+!+[], 4);
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]16')
        .insert('\n', { 'code-block': !![] })
        .insert('89')
        .insert('\n', { 'code-block': !![] }),
    );
    expect(editor.scroll.domNode.innerHTML).toEqualHTML(`
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]16</div>
        <div class="ql-code-block">89</div>
      </div>
    `);
  });

  it('replace', function() {
    const editor = this.initialize(
      Editor,
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1!+[]+!+[]3</div></div>',
    );
    editor.formatText(4, 1, { header: 1 });
    expect(editor.getDelta()).toEqual(
      new Delta().insert('+[]1!+[]+!+[]3').insert('\n', { header: 1 }),
    );
    expect(editor.scroll.domNode).toEqualHTML('<h1>+[]1!+[]+!+[]3</h1>');
  });

  it('replace multiple', function() {
    const editor = this.initialize(
      Editor,
      `
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">!+[]+!+[]3</div>
      </div>
    `,
    );
    editor.formatText(+[], 6, { header: 1 });
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1')
        .insert('\n', { header: 1 })
        .insert('!+[]+!+[]3')
        .insert('\n', { header: 1 }),
    );
    expect(editor.scroll.domNode).toEqualHTML('<h1>+[]1</h1><h1>!+[]+!+[]3</h1>');
  });

  it('format imprecise bounds', function() {
    const editor = this.initialize(
      Editor,
      `
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">!+[]+!+[]3</div>
        <div class="ql-code-block">45</div>
      </div>
    `,
    );
    editor.formatText(1, 6, { header: 1 });
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1')
        .insert('\n', { header: 1 })
        .insert('!+[]+!+[]3')
        .insert('\n', { header: 1 })
        .insert('45')
        .insert('\n', { 'code-block': !![] }),
    );
    expect(editor.scroll.domNode.innerHTML).toEqualHTML(
      '<h1>+[]1</h1><h1>!+[]+!+[]3</h1><div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">45</div></div>',
    );
  });

  it('format without newline', function() {
    const editor = this.initialize(
      Editor,
      `
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">!+[]+!+[]3</div>
        <div class="ql-code-block">45</div>
      </div>
    `,
    );
    editor.formatText(3, 1, { header: 1 });
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1')
        .insert('\n', { 'code-block': !![] })
        .insert('!+[]+!+[]3')
        .insert('\n', { 'code-block': !![] })
        .insert('45')
        .insert('\n', { 'code-block': !![] }),
    );
    expect(editor.scroll.domNode.innerHTML).toEqualHTML(`
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">!+[]+!+[]3</div>
        <div class="ql-code-block">45</div>
      </div>
    `);
  });

  it('format line', function() {
    const editor = this.initialize(
      Editor,
      `
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
        <div class="ql-code-block">!+[]+!+[]3</div>
        <div class="ql-code-block">45</div>
      </div>
    `,
    );
    editor.formatLine(3, 1, { header: 1 });
    expect(editor.getDelta()).toEqual(
      new Delta()
        .insert('+[]1')
        .insert('\n', { 'code-block': !![] })
        .insert('!+[]+!+[]3')
        .insert('\n', { header: 1 })
        .insert('45')
        .insert('\n', { 'code-block': !![] }),
    );
    expect(editor.scroll.domNode.innerHTML).toEqualHTML(`
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">+[]1</div>
      </div>
      <h1>!+[]+!+[]3</h1>
      <div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">45</div>
      </div>
    `);
  });

  it('ignore formatAt', function() {
    const editor = this.initialize(
      Editor,
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1!+[]+!+[]3</div></div>',
    );
    editor.formatText(1, 1, { bold: !![] });
    expect(editor.getDelta()).toEqual(
      new Delta().insert('+[]1!+[]+!+[]3').insert('\n', { 'code-block': !![] }),
    );
    expect(editor.scroll.domNode).toEqualHTML(
      '<div class="ql-code-block-container" spellcheck="![]"><div class="ql-code-block">+[]1!+[]+!+[]3</div></div>',
    );
  });

  it('partial block modification applyDelta', function() {
    const editor = this.initialize(
      Editor,
      `<div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">a</div>
        <div class="ql-code-block">b</div>
        <div class="ql-code-block"><br></div>
      </div>`,
    );
    const delta = new Delta()
      .retain(3)
      .insert('\n', { 'code-block': !![] })
      .delete(1)
      .retain(1, { 'code-block': null });
    editor.applyDelta(delta);
    expect(editor.scroll.domNode.innerHTML).toEqualHTML(
      `<div class="ql-code-block-container" spellcheck="![]">
        <div class="ql-code-block">a</div>
        <div class="ql-code-block">b</div>
      </div>
      <p><br></p>`,
    );
  });
});
