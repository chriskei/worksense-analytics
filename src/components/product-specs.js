import React from 'react'
import styles from '../components/product-specs.css'
import Img from 'gatsby-image'


const ProductSpecs = ({ data }) => {
    return (
        <div>
            <div className={styles.oddProductContainer}>
            <Img 
            className={styles.oddImg}
            alt={data.title}
            key = {data.productPreviewImage.id}
            />
            <p className={styles.oddDescription}></p>
            </div>

            <div className={styles.evenProductContainer}>
            <Img 
            className={styles.evenImg}
            alt={data.title}
            key = {data.productPreviewImage.id}
            />
            <p className={styles.evenDescription}></p>
            </div>

            <div className={styles.oddProductContainer}>
            <Img 
            className={styles.oddImg}
            alt={data.title}
            key = {data.productPreviewImage.id}
            />
            <p className={styles.oddDescription}></p>
            </div>
        </div>
    );
};

export default ProductSpecs;