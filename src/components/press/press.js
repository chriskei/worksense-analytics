import React, { useState, useEffect } from 'react'
import { SectionHeader } from '../section-header/section-header'
import { Article } from '../article/article'
import { colors } from '../../assets/colors'
import { GreenCarouselDot, GrayCarouselDot } from '../../assets/icons'
import {
  PressHeaderContainer,
  ArticleContainer,
  TabContainer,
  SingleTab
} from './press.styles'

const Press = (props) => {
  const {
    pressHeader,
    articleImages,
    articleExcerpts,
    articleTitles,
    articleUrls
  } = props
  const [tabIndex, setTabIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(
      () => setTabIndex((tabIndex + 1) % (articleTitles.length / 2)),
      10000
    )
    return () => clearInterval(interval)
  }, [tabIndex])

  return (
    <>
      <PressHeaderContainer>
        <SectionHeader title={pressHeader} color={colors.darkGreen} />
      </PressHeaderContainer>
      <ArticleContainer>
        {articleTitles.length > 0 &&
          articleImages.length == articleExcerpts.length &&
          articleExcerpts.length == articleTitles.length &&
          articleTitles.length == articleUrls.length &&
          articleTitles.map(
            (article, index) =>
              (index == tabIndex * 2 || index == tabIndex * 2 + 1) && (
                <Article
                  key={article}
                  title={article}
                  image={articleImages[index]}
                  excerpt={articleExcerpts[index]}
                  url={articleUrls[index]}
                  first={index % 2 == 0}
                />
              )
          )}
      </ArticleContainer>
      <TabContainer>
        {articleTitles.slice(articleTitles.length / 2).map((article, index) => (
          <SingleTab key={article} onClick={() => setTabIndex(index)}>
            {tabIndex == index ? <GreenCarouselDot /> : <GrayCarouselDot />}
          </SingleTab>
        ))}
      </TabContainer>
    </>
  )
}

export { Press }
