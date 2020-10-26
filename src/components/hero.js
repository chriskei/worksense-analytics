import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

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
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.title}
      fluid={sources}
    />
  </div>
  );
};

export default HeroImage;