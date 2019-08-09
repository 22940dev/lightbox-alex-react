import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import videoTmb from './play.svg'
import galleryTmb from './gallery.svg'

import './styles.css'
import Modal from './Modal'
var path = require('path')

class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: null,
      stateRef: '',
      default: props.thumbnails ? props.files.length === props.thumbnails.length ? false : true : true
    }
  }

  handleClick = e => {
    e.preventDefault()
    this.setState({
      index: e.target.parentNode.id,
      stateRef: e.target.parentNode.href
    }, () => this.openModal())
  }

  openModal = () => {
    const { stateRef, index } = this.state
    ReactDOM.render(
      <Modal 
        modalRef={stateRef} 
        pictures={this.props.files} 
        startIndex={index} 
      />, document.querySelector('#modal-alex-box'));
  }

  UNSAFE_componentWillMount(){
    const body = document.querySelector('body');
    const divexst = document.querySelector('#modal-alex-box')
    if (!divexst){
      const modalDiv = document.createElement('div')
      modalDiv.setAttribute('id','modal-alex-box')
      body.appendChild(modalDiv)
    }
  }

  componentWillUnmount(){
    const modalDiv = document.querySelector('#modal-alex-box')
    document.querySelector('body').removeChild(modalDiv)
  }

  renderThumbnails = () => {
    const { files, thumbnails, tmbClass } = this.props;
    return files.map((file, index) => {
      var ext = path.extname(file)
      return (
        <a onClick={this.handleClick} href={file} className="alex-box" key={index} id={index}>
          <img src={this.state.default
            ? (ext === '.mp4' ? videoTmb : galleryTmb)
            : thumbnails[index] }
            className={tmbClass ? tmbClass : 'tmb'} 
          />
        </a>
      )
    })
  }

  render() {
    const {  galleryClasses } = this.props

    return (
      <div className={galleryClasses ? galleryClasses : 'demoGallery'}>
        {this.renderThumbnails()}
      </div>
    )
  }
}


export default Gallery;