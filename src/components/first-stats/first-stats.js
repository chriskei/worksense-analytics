import React from 'react'
import { Link } from 'gatsby'
import {
  StatsWaveContainer,
  StatsContent,
  StatsImages,
  StatImg,
  StatsText,
  StatHeader,
  StatsButtonContainer
} from './first-stats.styles'
import {
  StatsWaveBackground,
  StatsWaveTop,
  StatsWaveBottom
} from '../../assets/waves'
import { P } from '../../assets/fonts'
import { colors } from '../../assets/colors'
import { Button } from '../button/button'

const FirstStats = (props) => {
  const { images, header, description } = props

  return (
    <>
      <StatsWaveContainer>
        <StatsWaveBackground />
        <StatsWaveTop />
        <StatsWaveBottom />
      </StatsWaveContainer>
      <StatsContent>
        <StatsImages>
          <StatImg fluid={images[0].fluid} first />
          <StatImg fluid={images[1].fluid} />
        </StatsImages>
        <StatsText>
          <StatHeader color={colors.tan}>{header}</StatHeader>
          <P color={colors.tan}>{description}</P>
          <StatsButtonContainer>
            <Link to="/our-products/">
              <Button color={colors.blue} text="Learn More" />
            </Link>
          </StatsButtonContainer>
        </StatsText>
      </StatsContent>
    </>
  )
}

export { FirstStats }
