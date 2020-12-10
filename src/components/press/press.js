import React, { useState, useEffect } from 'react'
import { SectionHeader } from '../section-header/section-header'
import { Article } from '../article/article'
import { colors } from '../../assets/colors'
import { GreenCarouselDot, GrayCarouselDot } from '../../assets/icons'
import {
  PressContainer,
  PressHeaderContainer,
  ArticleContainer,
  TabContainer,
  SingleTab,
  ArticleAnimation
} from './press.styles'
import { animations } from '../../assets/animations'

const Press = (props) => {
  const {
    pressHeader,
    articleImages,
    articleExcerpts,
    articleTitles,
    articleUrls
  } = props
  const [tabIndex, setTabIndex] = useState(0)
  const [earlyFadeOut, setEarlyFadeOut] = useState(false)
  const [delayedTabIndex, setDelayedTabIndex] = useState(tabIndex)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextTabIndex = (tabIndex + 1) % (articleTitles.length / 2)
      setTabIndex(nextTabIndex)
      setDelayedTabIndex(nextTabIndex)
    }, animations.pressFullCarouselLength * 1000)
    return () => clearInterval(interval)
  }, [tabIndex])

  useEffect(() => {
    if (earlyFadeOut) {
      const interval = setInterval(() => {
        setEarlyFadeOut(false)
        setDelayedTabIndex(tabIndex)
      }, (animations.pressFullCarouselLength / 5.0) * 500)
      return () => clearInterval(interval)
    }
  }, [earlyFadeOut])

  return (
    <PressContainer>
      <PressHeaderContainer>
        <SectionHeader title={pressHeader} color={colors.darkGreen} />
      </PressHeaderContainer>
      <ArticleContainer>
        {articleTitles.length > 0 &&
          articleImages.length == articleExcerpts.length &&
          articleExcerpts.length == articleTitles.length &&
          articleTitles.length == articleUrls.length &&
          articleTitles.map((article, index) => {
            const wantedArticleIndex = earlyFadeOut ? delayedTabIndex : tabIndex
            return (
              (index == wantedArticleIndex * 2 ||
                index == wantedArticleIndex * 2 + 1) && (
                <ArticleAnimation key={article} out={earlyFadeOut}>
                  <Article
                    title={article}
                    image={articleImages[index]}
                    excerpt={articleExcerpts[index]}
                    url={articleUrls[index]}
                    first={index % 2 == 0}
                  />
                </ArticleAnimation>
              )
            )
          })}
      </ArticleContainer>
      <TabContainer>
        {articleTitles.slice(articleTitles.length / 2).map((article, index) => (
          <SingleTab
            key={article}
            onClick={() => {
              if (index != tabIndex) {
                setEarlyFadeOut(true)
                setTabIndex(index)
              }
            }}
          >
            {tabIndex == index ? <GreenCarouselDot /> : <GrayCarouselDot />}
          </SingleTab>
        ))}
      </TabContainer>
    </PressContainer>
  )
}

export { Press }
