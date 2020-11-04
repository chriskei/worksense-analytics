import React from 'react'
import { HeroImg } from './hero-image.styles.js'

const HeroImage = (props) => {
  const { imgData } = props

  const sources = [imgData.mobile.fluid,
    { ...imgData.desktop.fluid,
      media: `(min-width: 768px)`,
    },
    { ...imgData.tablet.fluid,
      media: `(min-width: 414px)`,
    }
  ]
  return (
    <HeroImg alt={imgData.title}
    fluid={sources}>
    </HeroImg>
    
  );
};

export { HeroImage }