import React from 'react'
import { QuoteSvg, SocialMediaSvg } from './icons.styles'

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

const Twitter = () => {
  return (
    <SocialMediaSvg height="53px" version="1.1" viewBox="0 0 53 56.693">
      <path d="M28.348,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.623-11.023,24.623-24.623  C52.971,16.184,41.947,5.157,28.348,5.157z M40.752,24.817c0.013,0.266,0.018,0.533,0.018,0.803c0,8.201-6.242,17.656-17.656,17.656  c-3.504,0-6.767-1.027-9.513-2.787c0.486,0.057,0.979,0.086,1.48,0.086c2.908,0,5.584-0.992,7.707-2.656  c-2.715-0.051-5.006-1.846-5.796-4.311c0.378,0.074,0.767,0.111,1.167,0.111c0.566,0,1.114-0.074,1.635-0.217  c-2.84-0.57-4.979-3.08-4.979-6.084c0-0.027,0-0.053,0.001-0.08c0.836,0.465,1.793,0.744,2.811,0.777  c-1.666-1.115-2.761-3.012-2.761-5.166c0-1.137,0.306-2.204,0.84-3.12c3.061,3.754,7.634,6.225,12.792,6.483  c-0.106-0.453-0.161-0.928-0.161-1.414c0-3.426,2.778-6.205,6.206-6.205c1.785,0,3.397,0.754,4.529,1.959  c1.414-0.277,2.742-0.795,3.941-1.506c-0.465,1.45-1.448,2.666-2.73,3.433c1.257-0.15,2.453-0.484,3.565-0.977  C43.018,22.849,41.965,23.942,40.752,24.817z" />
    </SocialMediaSvg>
  )
}

const LinkedIn = () => {
  return (
    <SocialMediaSvg
      height="4"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 0.425293C10.0755 0.425293 0 10.5008 0 22.9253C0 35.3498 10.0755 45.4253 22.5 45.4253C34.9245 45.4253 45 35.3498 45 22.9253C45 10.5008 34.9245 0.425293 22.5 0.425293ZM15.9618 34.439H10.482V17.9529H15.9618V34.439ZM13.222 15.7018H13.1863C11.3475 15.7018 10.1582 14.436 10.1582 12.8539C10.1582 11.2362 11.3839 10.0054 13.2584 10.0054C15.133 10.0054 16.2865 11.2362 16.3223 12.8539C16.3223 14.436 15.133 15.7018 13.222 15.7018ZM35.7207 34.439H30.2416V25.6193C30.2416 23.4029 29.4482 21.8912 27.4655 21.8912C25.9518 21.8912 25.0502 22.9109 24.654 23.8952C24.5091 24.2474 24.4738 24.7398 24.4738 25.2324V34.439H18.9943C18.9943 34.439 19.0661 19.4996 18.9943 17.9529H24.4738V20.2872C25.202 19.1638 26.5049 17.566 29.4121 17.566C33.0173 17.566 35.7207 19.9222 35.7207 24.9859V34.439Z"
        fill="black"
      />
    </SocialMediaSvg>
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

const Hamburger = () => {
  return (
    <svg
      width="39"
      height="22"
      viewBox="0 0 39 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="38.08" height="2.72" fill="#083D44" />
      <rect y="9.52002" width="38.08" height="2.72" fill="#083D44" />
      <rect y="19.04" width="38.08" height="2.72" fill="#083D44" />
    </svg>
  )
}

const Cross = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.09938 5.99991L11.7719 10.6727C12.076 10.9767 12.076 11.4681 11.7719 11.772C11.468 12.076 10.9766 12.076 10.6726 11.772L5.99993 7.09924L1.32737 11.772C1.02329 12.076 0.532001 12.076 0.228062 11.772C-0.0760205 11.4681 -0.0760205 10.9767 0.228062 10.6727L4.90062 5.99991L0.228062 1.32711C-0.0760205 1.02317 -0.0760205 0.531728 0.228062 0.227782C0.379533 0.0761652 0.578696 0 0.777716 0C0.976736 0 1.17576 0.0761652 1.32737 0.227782L5.99993 4.90058L10.6726 0.227782C10.8242 0.0761652 11.0233 0 11.2223 0C11.4213 0 11.6203 0.0761652 11.7719 0.227782C12.076 0.531728 12.076 1.02317 11.7719 1.32711L7.09938 5.99991Z"
        fill="#07A3B2"
      />
    </svg>
  )
}

export {
  RightArrow,
  DownArrow,
  Twitter,
  LinkedIn,
  ChevronRight,
  Quote,
  GreenCarouselDot,
  GrayCarouselDot,
  Hamburger,
  Cross
}
