import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Modal from './Modal';

class Gallery extends Component {
  state = {
    index: null,
    opened: false,
    stateRef: ''
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      index: e.target.parentNode.id,
      opened: true,
      stateRef: e.target.parentNode.href
    }, () => {
      this.openModal();
    });
  }

  openModal = () => {
    ReactDOM.render(<Modal modalRef={this.state.stateRef} pictures={this.props.pictures} startIndex={this.state.index} />, document.querySelector('#modal-alex-box'));
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
    const { pictures, thumbnails, type, gallery, tmbClass } = this.props;
    const links = pictures.map((picture, index) => {
      return (
        <a onClick={this.handleClick} href={picture} className="alex-box" gallery-alex-box={gallery} type={type ? type : null} key={index} id={index}>
          <img src={thumbnails ? thumbnails[index] : 'http://support.yumpu.com/en/wp-content/themes/qaengine/img/default-thumbnail.jpg'} className={tmbClass} />
        </a>
      )
    })

    return (
      <div className={this.props.galleryClasses}>
        {links}
      </div>
    )
  }
}


export default Gallery;