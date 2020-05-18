import { createElement } from 'react';

const Iphone = () => {
  const container = {
    fontFamily: 'Open Sans',
    width: '240px',
    height: '500px',
    background: '#f4f6fc'
  };
  const iphoneCase = {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '30px',
    boxShadow: '0px 0px 0px 4px #1f1f1f, 0px 0px 0px 4px #191919, 0px 0px 0px 12px #111'
  };
  return createElement("div", {
    style: container
  }, createElement("div", {
    style: iphoneCase
  }, createElement("div", {
    className: 'react-iphone__speaker'
  }), createElement("div", {
    className: 'react-iphone__camera'
  }), "hello"));
};

export { Iphone };
//# sourceMappingURL=index.modern.js.map
