import React, { Component } from 'react'
import ReactDOM from 'react-dom'
var path = require('path')


export default class Modal extends Component {

    state = {
        total: this.props.pictures.length,
        current: (Number(this.props.startIndex) % this.props.pictures.length),
        currentRef: this.props.modalRef,
        toggle: true,
        video: false,
        tStartX: 0,
        tEndX: 0,
        xMove: '',
        fingers: 0
    }

    modalClose = e => {
        if(e) e.preventDefault()
        ReactDOM.render(<div></div>, document.querySelector('#modal-alex-box'));
    }

    next = e => {
        if(e){
            e.preventDefault()
            e.stopPropagation()
        }
        const { current, total } = this.state
        const { pictures } = this.props
        const nextPic = (current + 1) % total
        var ext = path.extname(pictures[nextPic])
        this.setState({
            current: nextPic,
            currentRef: pictures[nextPic],
            video: ext === '.mp4',
            xMove: ''
        })
    }

    prev = e => {
        if(e){
            e.preventDefault()
            e.stopPropagation()
        }
        const { current, total } = this.state
        const { pictures } = this.props
        let prevPic = current === 0 ? total - 1 : (current - 1) % total
        var ext = path.extname(pictures[prevPic])
        this.setState({
            current: prevPic,
            currentRef: this.props.pictures[prevPic],
            video: ext === '.mp4',
            xMove: ''
        })
    }

    clickedPic = e => {
        if(e) e.stopPropagation()
        this.setState(({toggle}) => ({toggle: !toggle}))
    }

    keypressed = e => {
        if (e) {
            e.preventDefault();
            var x = e.charCode || e.keyCode;
        }
        if ((x === 37) || (x === 40)) this.prev()
        else if ((x === 39) || (x === 38)) this.next()
        else if (x === 27) this.modalClose()
    }

    handlestart = e =>{
        if(e.touches.length > 1) e.preventDefault();
        this.setState({
            tStartX: e.touches[0].clientX,
            fingers: e.touches.length
        })
    }
    
    handlemove = e =>{
        if(e.touches.length > 1) e.preventDefault()
        if(this.state.fingers === 1){
            var x = e.changedTouches[0].clientX - this.state.tStartX;
            this.setState({ xMove: `translate(calc(${x}px - 50%),-50%)` })
        }
    }

    handleend = e =>{
        if(e.touches.length > 1) e.preventDefault()
        this.setState(({tStartX}) => ({tEndX: e.changedTouches[0].clientX - tStartX}), () => {
            const { fingers, tEndX } = this.state
            if(fingers === 1){
                if(tEndX < 0) this.next()
                else if (tEndX > 0) this.prev()
            }
        })
    }


    componentDidMount() {
        document.addEventListener('keydown', this.keypressed);
    }

    componentWillMount(){
        var ext = path.extname(this.state.currentRef);
        if(ext === '.mp4') this.setState({ video: true })
        else this.setState({ video: false })
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keypressed);
    }

    render() {
        const { toggle, current, currentRef, total, video, xMove } = this.state
        const style = { transform: xMove }
        return (
            <div className="modal-lightbox" onClick={this.modalClose}>
                {toggle ? <div>
                    <div className="x" onClick={this.modalClose}></div>
                    <div className="lBtn" onClick={this.prev}></div>
                    <div className="rBtn" onClick={this.next}></div>
                    <div className="counter">{current + 1}/{total}</div>
                </div> : null
                }
                {
                    video ? 
                        <video 
                            controls 
                            className='video enterEffect' 
                            style={style} 
                            onClick={this.clickedPic} 
                            ùonTouchStart={this.handlestart}  
                            onTouchMove={this.handlemove} 
                            onTouchEnd={this.handleend}
                        >
                            <source src={currentRef} type="video/mp4"></source>
                        </video>
                    :
                        <img 
                            className='foto enterEffect' 
                            src={currentRef} 
                            style={style} 
                            onClick={this.clickedPic} 
                            onTouchStart={this.handlestart} 
                            ùonTouchMove={this.handlemove} 
                            onTouchEnd={this.handleend}
                        />
                }
            </div>
        )
    }
}
