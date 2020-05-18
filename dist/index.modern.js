import { createElement } from 'react';

const defaultBg = 'https://i.pinimg.com/236x/11/45/c1/1145c15eb7c0bf49f7db50ad8a5efb85.jpg';
const Iphone = props => {
  const {
    height,
    width,
    background
  } = props;
  const iphoneContainer = {
    width: width ? width : '240px',
    height: height ? height : '500px'
  };
  const iphoneCase = {
    backgroundImage: `url(${background ? background : defaultBg})`
  };
  return createElement("div", {
    className: 'react-iphone__container',
    style: iphoneContainer
  }, createElement("div", {
    className: 'react-iphone__case',
    style: iphoneCase
  }, createElement("div", {
    className: 'react-iphone__speaker'
  }), createElement("div", {
    className: 'react-iphone__camera'
  })));
};

export { Iphone };
//# sourceMappingURL=index.modern.js.map
