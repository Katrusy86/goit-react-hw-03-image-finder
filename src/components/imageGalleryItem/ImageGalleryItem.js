import React from 'react'
import styles from './imageGalleryItem.module.css'


const ImageGalleryItem = ({webformatURL,openModal,largeImageURL}) => (
    <div className={styles.ImageGalleryItem}>
        <img data-largeimageurl = {largeImageURL} className={styles.ImageGalleryItem_image} onClick={openModal} src= {webformatURL} alt="" />
    </div>
);

export default ImageGalleryItem;