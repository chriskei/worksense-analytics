import React from 'react'
import { QuoteSvg } from './icons.styles'

const RightArrow = () => {
  return (
    <svg
      width="14"
      height="24"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.710309 1.69367L12.2342 11.8102L0.768932 21.9932L0.710309 1.69367Z"
        fill="#07A3B2"
        stroke="#07A3B2"
      />
    </svg>
  )
}

const DownArrow = () => {
  return (
    <svg
      width="24"
      height="14"
      viewBox="0 0 24 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.0575 1.33373L11.6204 12.5681L1.76436 0.820695L22.0575 1.33373Z"
        fill="#07A3B2"
        stroke="#07A3B2"
      />
    </svg>
  )
}

const Email = () => {
  return (
    <svg
      width="57"
      height="58"
      viewBox="0 0 57 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.5 9.92529H9.5C6.8875 9.92529 4.77375 12.0628 4.77375 14.6753L4.75 43.1753C4.75 45.7878 6.8875 47.9253 9.5 47.9253H47.5C50.1125 47.9253 52.25 45.7878 52.25 43.1753V14.6753C52.25 12.0628 50.1125 9.92529 47.5 9.92529ZM47.5 19.4253L28.5 31.3003L9.5 19.4253V14.6753L28.5 26.5503L47.5 14.6753V19.4253Z"
        fill="black"
      />
    </svg>
  )
}

const LinkedIn = () => {
  return (
    <svg
      width="45"
      height="46"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 0.425293C10.0755 0.425293 0 10.5008 0 22.9253C0 35.3498 10.0755 45.4253 22.5 45.4253C34.9245 45.4253 45 35.3498 45 22.9253C45 10.5008 34.9245 0.425293 22.5 0.425293ZM15.9618 34.439H10.482V17.9529H15.9618V34.439ZM13.222 15.7018H13.1863C11.3475 15.7018 10.1582 14.436 10.1582 12.8539C10.1582 11.2362 11.3839 10.0054 13.2584 10.0054C15.133 10.0054 16.2865 11.2362 16.3223 12.8539C16.3223 14.436 15.133 15.7018 13.222 15.7018ZM35.7207 34.439H30.2416V25.6193C30.2416 23.4029 29.4482 21.8912 27.4655 21.8912C25.9518 21.8912 25.0502 22.9109 24.654 23.8952C24.5091 24.2474 24.4738 24.7398 24.4738 25.2324V34.439H18.9943C18.9943 34.439 19.0661 19.4996 18.9943 17.9529H24.4738V20.2872C25.202 19.1638 26.5049 17.566 29.4121 17.566C33.0173 17.566 35.7207 19.9222 35.7207 24.9859V34.439Z"
        fill="black"
      />
    </svg>
  )
}

const ChevronRight = () => {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.10156 1.21094L7.39058 7.50006L1.10156 13.7891"
        stroke="#083D44"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Quote = (props) => {
  const { small } = props

  return (
    <QuoteSvg
      height="33"
      viewBox="0 0 36 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.57143 32.9883H10.2857L15.4286 20.1883V0.988281H0V20.1883H7.71429L2.57143 32.9883ZM23.1429 32.9883H30.8571L36 20.1883V0.988281H20.5714V20.1883H28.2857L23.1429 32.9883Z"
        fill="#083D44"
      />
    </QuoteSvg>
  )
}

const GreenCarouselDot = () => {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.5" cy="13.168" r="12.5" fill="#083D44" />
    </svg>
  )
}

const GrayCarouselDot = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12.9285" cy="13.168" r="12.5" fill="#C4C4C4" />
    </svg>
  )
}

export {
  RightArrow,
  DownArrow,
  Email,
  LinkedIn,
  ChevronRight,
  Quote,
  GreenCarouselDot,
  GrayCarouselDot
}
