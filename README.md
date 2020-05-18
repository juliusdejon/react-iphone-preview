# react-iphone

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-iphone.svg)](https://www.npmjs.com/package/react-iphone) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-iphone
```

## Usage

```index.css
@import '~react-iphone/dist/index.css';
```

```tsx
import React, { Component } from 'react'

import { Iphone } from 'react-iphone'
import './index.css'

class Example extends Component {
  render() {
    return <Iphone />
  }
}
```

## API

| Property        | Description             | Type             | Default |
| --------------- | ----------------------- | ---------------- | ------- |
| height          | Height of the phone     | string \| number | -       |
| width           | Width of the phone      | string \| number | -       |
| backgroundStyle | Background of the phone | object           | -       |

## License

MIT © [@juliusdejon](https://github.com/@juliusdejon)
