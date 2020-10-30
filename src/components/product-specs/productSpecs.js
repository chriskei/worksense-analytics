import React from 'react'
import { FeatureContainer, FeatureHeader, ProductImage } from './productSpecs.styles'
import Img from 'gatsby-image'

const ProductSpecs = (props) => {
    const { productHeader, productImg, productDescription } = props
    console.log("in component: product img is ", productImg)
    return (
        <div>
            <FeatureHeader>
                <h1>{productHeader}</h1>
            </FeatureHeader>
        
            <FeatureContainer>
                <ProductImage alt="Product Feature" fluid={productImg} />
                <p>{productDescription}</p>
            </FeatureContainer>
        </div>
    );
};

export { ProductSpecs }