import React, { Component } from 'react'

import Gallery from 'lightbox-alex-react'

const pictures = [
  'https://images.pexels.com/photos/1164763/pexels-photo-1164763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1151262/pexels-photo-1151262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/701449/pexels-photo-701449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];

const thumbnails = [
  'https://getuikit.com/v2/docs/images/placeholder_600x400.svg',
  'https://getuikit.com/v2/docs/images/placeholder_600x400.svg',
  'https://getuikit.com/v2/docs/images/placeholder_600x400.svg'
]

const pictures2 = [
  'https://images.pexels.com/photos/936132/pexels-photo-936132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/545062/pexels-photo-545062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];

const thumbnails2 = [
  'http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg',
  'http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg',
  'http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg'
]


export default class App extends Component {
  render () {
    return (
      <div>
        <header>
          <h1>lightbox-by-alex port for react</h1>
        </header>
        <Gallery pictures={pictures} thumbnails={thumbnails} gallery='myGallery' tmbClass='tmb' galleryClasses='demoGallery' />
        <Gallery pictures={pictures2} thumbnails={thumbnails2} gallery='myGallery2' tmbClass='tmb' galleryClasses='demoGallery' />
        <footer>
          2018 - Aleksandar Gjoreski
        </footer>
      </div>
    )
  }
}
