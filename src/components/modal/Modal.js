import React, {Component, createRef} from 'react'
import styles from './modal.module.css'

export default class Modal extends Component {
backdropRef = createRef();

componentDidMount() {
    window.addEventListener('keydown',this.handleKeyDown);
}

componentWillUnmount() {
    window.removeEventListener('keydown',this.handleKeyDown);
}

handleKeyDown = (e)=> {
    if(e.code !== 'Escape') return;
    this.props.onClose()
}

handleBackdropClick = (e) => {
    // console.log(this.backdropRef);
    const {current} = this.backdropRef;
     if(current && e.target !== current) return;
     this.props.onClose();
}

render() {
    // console.log("test", this.props)
    return (
        <div className={styles.Overlay} ref={this.backdropRef} onClick={this.handleBackdropClick}>
            <div className={styles.Modal}>
                <img src={this.props.currentImage} alt="" />
            </div>
        </div>
    )
}

}
