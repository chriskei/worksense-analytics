import React from 'react'
import { FeatureContainer, FeatureHeader } from './productSpecs.styles'
import Img from 'gatsby-image'

const ProductSpecs = (props) => {
    const { productHeader, productImg, productDescription } = props
    return (
        <div>
            <FeatureHeader>
                <h1>{productHeader}</h1>
            </FeatureHeader>
        
            <FeatureContainer>
                <Img alt="Product Feature" fluid={productImg} />
                <p>{productDescription}</p>
            </FeatureContainer>
        </div>
    );
};

export default ProductSpecs 