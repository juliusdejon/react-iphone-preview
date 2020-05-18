var React = require('react');

var defaultBg = 'https://i.pinimg.com/236x/11/45/c1/1145c15eb7c0bf49f7db50ad8a5efb85.jpg';
var Iphone = function Iphone(props) {
  var height = props.height,
      width = props.width,
      background = props.background;
  var iphoneContainer = {
    width: width ? width : '240px',
    height: height ? height : '500px'
  };
  var iphoneCase = {
    backgroundImage: "url(" + (background ? background : defaultBg) + ")"
  };
  return React.createElement("div", {
    className: 'react-iphone__container',
    style: iphoneContainer
  }, React.createElement("div", {
    className: 'react-iphone__case',
    style: iphoneCase
  }, React.createElement("div", {
    className: 'react-iphone__speaker'
  }), React.createElement("div", {
    className: 'react-iphone__camera'
  })));
};

exports.Iphone = Iphone;
//# sourceMappingURL=index.js.map
