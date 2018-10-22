# lightbox-alex-react

> touch friendly lightbox gallery for react

[![NPM](https://img.shields.io/npm/v/lightbox-alex-react.svg)](https://www.npmjs.com/package/lightbox-alex-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features
- Navigate through the pictures with keypress (🡄 🡆)
- Exit with 'esc' key, tap/click on space around image or tap/click on "x"
- Navigate through the pictures with arrows click (◄ ►)
- Navigate through the pictures with swipe (⮨ ⮩)
- Multiple (separated) galleries in one page
- Counter (#current picture / #gallery)

## Upcoming Features
- Video support
- Visual improvements


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
      <Gallery pictures={pictures} thumbnails={thumbnails} gallery='gallery1' tmbClass='tmb' galleryClasses='demoGallery' />
    )
  }
}
```

```
props = {
  pictures: proptypes.array,          // array of src of full res pictures
  thumbnails: proptypes.array,        // array of src of thumbnails (for each picture), if not the default one is used
  gallery: proptypes.string,          // name of the gallery
  tmbClasses: proptypes.string,       // classes to apply to the thumbnails
  galleryClasses: proptypes.string    // classes to apply to the gallery
}
```

## ENJOY!

## License

MIT © [Aleksandar Gjoreski](https://github.com/alezen9)
