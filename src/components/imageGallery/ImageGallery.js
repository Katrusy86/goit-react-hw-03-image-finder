import React, { Component } from 'react'
import styles from './imageGallery.module.css'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem'
import Modal from '../modal/Modal'


class ImageGallery extends Component {
      
    state={
        isModalOpen:false,
        currentImage:""
    }

openModal = (e) => {
    console.log(e.target);
    this.setState({isModalOpen:true, currentImage:e.target.dataset.largeimageurl})
    
}
closeModal = () => this.setState({isModalOpen:false})


render () {
    const {items} = this.props
    return (
    <>
    <ul className={styles.ImageGallery}>
        {items.map((item)=>(
            <li key={item.id}>
                {console.log(item)};
                <ImageGalleryItem {...item}
                openModal={this.openModal}/>

                
            </li>
            
        ))}
        
    </ul>
    {this.state.isModalOpen && (
        <Modal onClose = {this.closeModal} currentImage={this.state.currentImage}/>
        )} 
    </>
    )
}
}
export default ImageGallery;