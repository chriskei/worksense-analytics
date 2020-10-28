import React from 'react'
import HeroImg from './styled.js'

const HeroImage = ({ data }) => {
  const sources = [data.mobile.fluid,
    { ...data.desktop.fluid,
      media: `(min-width: 768px)`,
    },
    { ...data.tablet.fluid,
      media: `(min-width: 414px)`,
    }
  ]
  return (
    <HeroImg alt={data.title}
      fluid={sources}>
    </HeroImg>
  );
};

export default HeroImage;