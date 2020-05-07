import React from 'react'
import styles from './LoadMoreBtn.module.css'


const LoadMoreBtn = ({onClick}) => (
<div className={styles.LoadMore}>
    <button className={styles.Button} type ="button" onClick={onClick}>
      <span>Load More</span>
    </button>
  </div>
);

export default LoadMoreBtn;