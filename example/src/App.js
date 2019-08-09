import React, { Component } from 'react'

import Gallery from 'lightbox-alex-react'

const pictures = [
  'https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const pictures2 = [
  'https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/448714/pexels-photo-448714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

const video = ['./video.mp4',
  'https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

]

export default class App extends Component {
  render () {
    return (
      <div>
        <header>
          <h1>lightbox-by-alex port for react</h1>
        </header>
        <Gallery files={pictures} />
        <Gallery files={pictures2} />
        <Gallery files={video} />
        <footer>
          2018 - Aleksandar Gjoreski
        </footer>
      </div>
    )
  }
}
