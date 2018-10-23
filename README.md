# lightbox-alex-react

> Touch friendly lightbox gallery for react

[![NPM](https://img.shields.io/npm/v/lightbox-alex-react.svg)](https://www.npmjs.com/package/lightbox-alex-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features
- Navigate through the pictures with keypress (🡄 🡆)
- Exit with 'esc' key, tap/click on space around image or tap/click on "x"
- Navigate through the pictures with arrows click (◄ ►)
- Navigate through the pictures with swipe (⮨ ⮩)
- Multiple (separated) galleries in one page
- Counter (#current picture / #gallery)
- Video support (only mp4 format)


## Upcoming Features
- Visual improvements
> If you have any requests post an issue on github and I'll do my best


## Install

```bash
npm install --save lightbox-alex-react
```

## Usage

```jsx
import React, { Component } from 'react'

import Gallery from 'lightbox-alex-react'

class Example extends Component {
  render () {
    return (
      <Gallery files={pictures} thumbnails={thumbnails} />
      <Gallery files={video} />
    )
  }
}
```

```
props = {
  files: proptypes.array,             // array of src of full res pictures / videos
  thumbnails: proptypes.array,        // (optional) array of src of thumbnails (for each picture), if not the default one is used
  tmbClasses: proptypes.string,       // (optional) classes to apply to the thumbnails
  galleryClasses: proptypes.string    // (optional) classes to apply to the gallery
}
```
> If optional prop is not passed, default value is used

## ENJOY!

## License

MIT © [Aleksandar Gjoreski](https://github.com/alezen9)
