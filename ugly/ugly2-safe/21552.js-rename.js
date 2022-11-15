  var raccoon; // HelloMessage
  
  raccoon = React.createClass({
    render : function () {
      return React.createElement("div", null, "Hello ", this.props.name);
    }
  });
  React.render(React.createElement(raccoon, {
    name : React.createElement("span", null, "Sebastian")
  }), 
  mountNode);
  