import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var path = require('path');
import './styles.css';
import Modal from './Modal';

class Gallery extends Component {
  state = {
    index: null,
    stateRef: '',
    default: this.props.thumbnails ? (this.props.files.length == this.props.thumbnails.length ? false : true) : true
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      index: e.target.parentNode.id,
      stateRef: e.target.parentNode.href
    }, () => {
      this.openModal();
    });
  }

  openModal = () => {
    ReactDOM.render(<Modal modalRef={this.state.stateRef} pictures={this.props.files} startIndex={this.state.index} />, document.querySelector('#modal-alex-box'));
  }

  componentWillMount(){
    var body = document.querySelector('body');
    var divexst = document.querySelector('#modal-alex-box');
    if (!divexst){
      var modalDiv = document.createElement('div');
      modalDiv.setAttribute('id','modal-alex-box');
      body.appendChild(modalDiv);
    }
  }

  componentWillUnmount(){
    var modalDiv = document.querySelector('#modal-alex-box');
    document.querySelector('body').removeChild(modalDiv);
  }

  render() {
    const { files, thumbnails, tmbClass, galleryClasses } = this.props;
    const links = files.map((file, index) => {
      var ext = path.extname(file);
      return (
        <a onClick={this.handleClick} href={file} className="alex-box" key={index} id={index}>
          <img src={this.state.default ? (ext == '.mp4' ? 'https://t4.ftcdn.net/jpg/01/78/16/97/240_F_178169773_Fkjq4g0oQQcMT9FG3Ayzd6VqNpRHpUbv.jpg' : 'http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg') : thumbnails[index] } className={tmbClass ? tmbClass : 'tmb'} />
        </a>
      )
    })

    return (
      <div className={galleryClasses ? galleryClasses : 'demoGallery'}>
        {links}
      </div>
    )
  }
}


export default Gallery;