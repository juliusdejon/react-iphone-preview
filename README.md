# react-iphone

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-iphone.svg)](https://www.npmjs.com/package/react-iphone) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-iphone
```

## Usage

```tsx
import React, { Component } from 'react'

import { Iphone } from 'react-iphone'

class Example extends Component {
  render() {
    return <Iphone />
  }
}
```

And import style manually

```
@import '~react-iphone/dist/index.css';
```

## API

| Property        | Description             | Type             | Default |
| --------------- | ----------------------- | ---------------- | ------- |
| height          | Height of the phone     | string \| number | 500px   |
| width           | Width of the phone      | string \| number | 240px   |
| backgroundStyle | Background of the phone | object           | -       |

## License

MIT © [@juliusdejon](https://github.com/@juliusdejon)
