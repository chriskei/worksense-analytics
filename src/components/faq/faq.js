import React, { useState } from 'react'
import Img from 'gatsby-image'
import { CollapseText } from '../collapse-text/collapse-text'
import {
  FaqContainer,
  CategoryContainer,
  ImageContainer,
  ImageItem
} from './faq.styles'

const Faq = (props) => {
  const { faqHeader, faqCategories, faqImages, faqQuestionsAndAnswers } = props
  const faqCategoryLists = faqQuestionsAndAnswers.categoryLists
  const [categoryIndex, setCategoryIndex] = useState(0)

  return (
    <FaqContainer>
      {faqCategories.length > 0 &&
        faqImages.length > 0 &&
        faqCategoryLists.length > 0 &&
        faqCategories.length == faqImages.length &&
        faqImages.length == faqCategoryLists.length && (
          <>
            <h1>{faqHeader}</h1>
            <CategoryContainer>
              {faqCategories.map((category, index) => {
                return (
                  <ImageContainer key={category}>
                    <ImageItem onClick={() => setCategoryIndex(index)}>
                      <Img fluid={faqImages[index].fluid} />
                    </ImageItem>
                    <h2>{category}</h2>
                  </ImageContainer>
                )
              })}
            </CategoryContainer>
            <h2>{faqCategories[categoryIndex]}</h2>
            {faqCategoryLists[categoryIndex].pairs.map((pair) => (
              <CollapseText
                key={pair.question}
                header={pair.question}
                body={pair.answer}
              />
            ))}
          </>
        )}
    </FaqContainer>
  )
}

export { Faq }
