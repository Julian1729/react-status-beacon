# react-status-beacon

[![NPM](https://img.shields.io/npm/v/react-status-beacon.svg)](https://www.npmjs.com/package/react-status-beacon) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Display an animated beacon to indicate an application status such as signal strength, buffer load, location etc.

<a href="https://codesandbox.io/s/react-status-beacon-examples-gt6m9?file=/src/App.js" target="_blank">Live Demo</a>

![react-status-beacon status examples](https://github.com/Julian1729/react-status-beacon/raw/main/example/assets/examples.gif)

## Install

```bash
npm install --save react-status-beacon
```

## Basic Usage

```jsx
import React from 'react'

import Beacon from 'react-status-beacon'

const ExampleConnectionStatus = () => (
  <p>
    Connection <Beacon status='positive' />
  </p>
)
```

![react-status-beacon example](https://github.com/Julian1729/react-status-beacon/raw/main/example/assets/connection_example.gif)

### Speeds

![react-status-beacon speeds example](https://github.com/Julian1729/react-status-beacon/raw/main/example/assets/speeds.gif)

### Custom Color Scheme

![react-status-beacon ](https://github.com/Julian1729/react-status-beacon/raw/main/example/assets/colors.gif)

## Props

### `status`

The status you want to indicate with the beacon.

type: `String`

default: `dormant`

params: `positive`, `neutral`, `negative`, `dormant`

### `speed`

Change the speed of the beacon pulse animation. Strings `normal`, `slow`, and `fast`
are accepted, or you can also pass in a custom value in millisconds. e.g. `1700`

type: `String|Number`

default: `normal` ( 1300ms )

params: `normal`, `slow`, `fast`

### `size`

Control the size of the entire element. Any CSS size unit is acceptable, it is passed straight to the wrapper.

type: `String`

default: `1em`

### `colors`

Override default color scheme by passing in a custom hex code for each status. As of this version, only six digit hex codes are supported.

type: `Object`

default:

```
{
  positive: '#309D7D',
  neutral: '#FFC800',
  negative: '#D62828',
  dormant: '#666666'
}
```

### `scaleBeacon`

By default the animation beacon scales down to indicate less intesity depending on the status, shrinking from `positive` to `neutral` to `negative` and non-existent on `dormant` status. You can disable this behavior by setting this prop to `false`.

type: `Boolean`

default: `true`

## License

MIT © [Julian1729](https://github.com/Julian1729)
