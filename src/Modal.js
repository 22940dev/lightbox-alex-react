import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

export default class Modal extends Component {

    state = {
        total: this.props.pictures.length,
        current: (Number(this.props.startIndex) % this.props.pictures.length),
        currentRef: this.props.modalRef,
        toggle: true,
        picClasses: 'foto enterEffect',
        tStartX: 0,
        tEndX: 0,
        fingers: 0
    }

    modalClose = (e) => {
        e.preventDefault();
        ReactDOM.render(<div></div>, document.querySelector('#modal-alex-box'));
    }

    next = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let nextPic = (this.state.current + 1) % (this.state.total);
        this.setState({
            current: nextPic,
            currentRef: this.props.pictures[nextPic]
        });
    }

    prev = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let prevPic = this.state.current == 0 ? this.state.total - 1 : (this.state.current - 1) % (this.state.total);
        this.setState({
            current: prevPic,
            currentRef: this.props.pictures[prevPic]
        });
    }

    clickedPic = (e) => {
        e.stopPropagation();
        this.setState({
            toggle: this.state.toggle ? false : true
        })
    }

    // keypress handling
    keypressed = (e) => {
        if (e) {
            var x = e.charCode || e.keyCode;  // Get the Unicode value
        }
        if ((x == 37) || (x == 40)) {   // left arrow or down arrow
            let prevPic = this.state.current == 0 ? this.state.total - 1 : (this.state.current - 1) % (this.state.total);
            this.setState({
                current: prevPic,
                currentRef: this.props.pictures[prevPic]
            });
        } else if ((x == 39) || (x == 38)) { // right arrow or up arrow
            let nextPic = (this.state.current + 1) % (this.state.total);
            this.setState({
                current: nextPic,
                currentRef: this.props.pictures[nextPic]
            });
        } else if (x == 27) { // esc button
            ReactDOM.render(<div></div>, document.querySelector('#modal-alex-box'));
        }
    }

    handlestart = (e) =>{
        this.setState({
            tStartX: e.touches[0].clientX,
            fingers: e.touches.length,
            picClasses: 'foto'
        })
    }

    handleend = (e) =>{
        this.setState({
            tEndX: e.changedTouches[0].clientX - this.state.tStartX
        },()=>{
            if(this.state.fingers == 1){
                if(this.state.tEndX < 0){
                    this.setState({
                        picClasses: 'foto swipeLeft'
                    }, ()=>{
                        let prevPic = this.state.current == 0 ? this.state.total - 1 : (this.state.current - 1) % (this.state.total);
                        this.setState({
                            current: prevPic,
                            currentRef: this.props.pictures[prevPic]
                        });
                    })
                }else if (this.state.tEndX > 0){
                    this.setState({
                        picClasses: 'foto swipeRight'
                    }, ()=>{
                        let nextPic = (this.state.current + 1) % (this.state.total);
                        this.setState({
                            current: nextPic,
                            currentRef: this.props.pictures[nextPic]
                        });
                    })
                }
            }
        })
    }


    componentDidMount() {
        document.addEventListener('keydown', this.keypressed);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keypressed);
    }

    render() {
        return (
            <div className="modal-lightbox" onClick={this.modalClose}>
                {this.state.toggle ? <div>
                    <div className="x" onClick={this.modalClose}></div>
                    <div className="lBtn" onClick={this.prev}></div>
                    <div className="rBtn" onClick={this.next}></div>
                    <div className="counter">{this.state.current + 1}/{this.state.total}</div>
                </div> : null
                }
                <img className={this.state.picClasses} src={this.state.currentRef} onClick={this.clickedPic} onTouchStart={this.handlestart} onTouchEnd={this.handleend}/>
            </div>
        )
    }
}
