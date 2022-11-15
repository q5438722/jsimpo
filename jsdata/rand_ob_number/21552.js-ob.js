var HelloMessage = React['createClass']({
    'render': function () {
        return React['createElement']('div', null, 'Hello\x20', this['props']['name']);
    }
});
React['render'](React['createElement'](HelloMessage, { 'name': React['createElement']('span', null, 'Sebastian') }), mountNode);
