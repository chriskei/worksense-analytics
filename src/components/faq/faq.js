import React, { useState, useEffect } from 'react'
import { CollapseText } from '../collapse-text/collapse-text'
import { H3 } from '../../assets/fonts'
import { colors } from '../../assets/colors'
import {
  CategoryContainer,
  ImageContainer,
  ImageBox,
  ImageItem,
  ExpandedContainer,
  SelectedCategory
} from './faq.styles'
import { animations } from '../../assets/animations'

const Faq = (props) => {
  const { faqCategories, faqImages, faqQuestionsAndAnswers } = props
  const faqCategoryLists = faqQuestionsAndAnswers.categoryLists
  const [categoryIndex, setCategoryIndex] = useState(0)
  const [delay, setDelay] = useState(false)
  const [delayedCategoryIndex, setDelayedCategoryIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDelay(false)
      setCategoryIndex(delayedCategoryIndex)
    }, animations.faqFadeLength * 1000)
    return () => clearInterval(interval)
  }, [delay])

  return (
    <>
      {faqCategories.length > 0 &&
        faqImages.length > 0 &&
        faqCategoryLists.length > 0 &&
        faqCategories.length == faqImages.length &&
        faqImages.length == faqCategoryLists.length && (
          <>
            <CategoryContainer>
              {faqCategories.map((category, index) => {
                return (
                  <ImageContainer key={category}>
                    <ImageBox
                      onClick={() => {
                        if (index != categoryIndex) {
                          setDelay(true)
                          setDelayedCategoryIndex(index)
                        }
                      }}
                      color={
                        index == delayedCategoryIndex
                          ? colors.blue
                          : colors.lightGreen
                      }>
                      <ImageItem fluid={faqImages[index].fluid} />
                    </ImageBox>
                    <H3
                      color={
                        index == delayedCategoryIndex
                          ? colors.blue
                          : colors.darkGreen
                      }
                    >
                      {category}
                    </H3>
                  </ImageContainer>
                )
              })}
            </CategoryContainer>
            <ExpandedContainer out={delay}>
              <SelectedCategory color={colors.blue}>
                {faqCategories[categoryIndex]}
              </SelectedCategory>
              {faqCategoryLists[categoryIndex].pairs.map((pair) => (
                <CollapseText
                  key={pair.question}
                  header={pair.question}
                  body={pair.answer}
                />
              ))}
            </ExpandedContainer>
          </>
        )}
    </>
  )
}

export { Faq }
