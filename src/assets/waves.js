import React from 'react'
import {
  LandingBlueContainer,
  LandingGreenContainer,
  ProductsTopContainer,
  ProductsBottomContainer,
  OurTeamBackgroundContainer,
  OurTeamTopContainer,
  OurTeamBottomContainer
} from './waves.styles'

const LandingWaveBlue = () => {
  return (
    <LandingBlueContainer>
      <svg
        viewBox="0 0 1440 442"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M345.312 274.146C279.917 264.338 214.521 205.117 149.125 136.088C99.0833 82.6997 49.0417 24.6516 -1 0.0878906V442H149.125H345.312H541.5H737.688H933.875H1130.06H1326.25H1440.07V127C1402.13 172.202 1364.19 221.667 1326.25 244.536C1260.85 284.695 1195.46 243.981 1130.06 264.338C1064.67 284.695 999.271 362.422 933.875 333.367C868.479 303.202 803.083 166.254 737.688 126.095C672.292 86.6758 606.896 145.896 541.5 195.309C476.104 243.981 410.708 284.695 345.312 274.146Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="719.534"
            y1="0.0878906"
            x2="719.534"
            y2="442"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.151042" stopColor="#07a3b2" />
            <stop offset="1" stopColor="#07a3b2" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </LandingBlueContainer>
  )
}

const LandingWaveGreen = () => {
  return (
    <LandingGreenContainer>
      <svg
        viewBox="0 0 1440 692"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6667 20.7778L-24 0V374H-8V692H1440V374V41.5556L1399.33 69.216C1358.67 97.3958 1277.33 151.938 1196 193.883C1114.67 235.049 1033.33 263.618 952 276.994C870.667 290.889 789.333 290.889 708 249.333C673.158 231.532 638.317 206.104 603.475 180.677C556.984 146.747 510.492 112.817 464 97.0062C414.22 79.7589 364.441 83.7698 314.661 87.7807C283.107 90.3231 251.554 92.8654 220 89.9938C138.667 83.1111 57.3333 41.5556 16.6667 20.7778Z"
          fill="url(#paint1_linear)"
          fillOpacity="0.5"
        />
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="708"
            y1="0"
            x2="708"
            y2="613"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9ECC7" />
            <stop offset="1" stopColor="#D9ECC7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </LandingGreenContainer>
  )
}

const ProductsWaveTop = () => {
  return (
    <ProductsTopContainer>
      <svg
        viewBox="0 0 1438 505"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M358.367 378.81C252.527 304.071 146.686 241.552 40.8459 257.75C27.3973 259.663 13.9486 262.802 0.5 267.041V0H40.8459H358.367H675.888H993.409H1310.93H1438.5V279.211C1395.98 282.792 1353.45 285.37 1310.93 272.811C1205.09 241.552 1099.25 122.197 993.409 166.813C887.569 213.134 781.729 423.426 675.888 485.092C570.048 545.622 464.207 454.685 358.367 378.81Z"
          fill="url(#paint3_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="468.921"
            y1="128.94"
            x2="1154.09"
            y2="68.6548"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.161458" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </svg>
    </ProductsTopContainer>
  )
}

const ProductsWaveBottom = () => {
  return (
    <ProductsBottomContainer>
      <svg
        viewBox="0 0 1440 524"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.84715e-05 403.199C-1.264e-05 403.859 -1.30074e-05 404.515 3.84715e-05 405.168C0.000490355 410.9 0.00493724 416.363 0.0141245 421.455C129.385 510.744 450.016 590.494 888 436.5C1085.62 367.018 1322.54 317.02 1440 421.446V252.535L1380.44 276.561C1320.44 300.767 1200.44 349.178 1080.44 300.767C1014.99 274.36 949.535 219.148 884.081 163.935C829.535 117.924 774.99 71.9138 720.444 42.5737C600.444 -21.9745 480.444 -5.83743 360.444 42.5737C240.445 90.9848 120.445 171.67 60.4446 212.013L60.4444 212.013L0.444444 252.355C0.444444 252.355 0.00477043 342.112 3.84715e-05 403.199Z"
          fill="url(#paint2_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="1440.44"
            y1="377.074"
            x2="94.4445"
            y2="114.074"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </svg>
    </ProductsBottomContainer>
  )
}

const ProductsWaveBackground = () => {
  return (
    <svg viewBox="0 0 1440 672" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0H1440V569.446C1322.54 465.02 1085.62 515.018 888 584.5C450 738.5 129.362 658.739 0 569.446V0Z"
        fill="url(#paint4_linear)"
      />
      <defs>
        <linearGradient
          id="paint4_linear"
          x1="-350.509"
          y1="-466.205"
          x2="865.845"
          y2="869.317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#07A3B2" />
          <stop offset="1" stopColor="#D9ECC7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const OurTeamWaveBackground = () => {
  return (
    <OurTeamBackgroundContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1180"
        fill="none"
      >
        <path
          d="M-0.511719 0.802734H1439.49V477.058C1126.5 529.511 839 687.024 839 687.024C447 577.975 390.488 871.07 390.488 871.07C198.488 1161.33 -0.511719 1179.5 -0.511719 1179.5V0.802734Z"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="126.489"
            y1="-465.559"
            x2="509.578"
            y2="813.125"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </svg>
    </OurTeamBackgroundContainer>
  )
}

const OurTeamWaveTop = () => {
  return (
    <OurTeamTopContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 642"
        fill="none"
      >
        <path
          d="M0.556641 0.802734L1439.02 0.802572L1439.49 246.11L1439.49 498.751C1296.35 514.923 1095.09 484.583 1030.6 362.041C951.005 210.801 712.221 230.146 684.509 230.146C489.012 230.146 375.138 420.287 290.247 526.273C222.334 611.061 68.8232 638.427 0.556684 641.511L0.556641 0.802734Z"
          fill="url(#paint3_linear)"
          fill-opacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="127.422"
            y1="-252.699"
            x2="247.709"
            y2="485.136"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </svg>
    </OurTeamTopContainer>
  )
}

const OurTeamWaveBottom = () => {
  return (
    <OurTeamBottomContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 840"
        fill="none"
      >
        <path
          d="M1440.56 0L0.556726 -0.000162625L0.556705 321.231C35.4221 363.243 137.553 450.532 267.152 463.595C429.151 479.923 541.007 435.021 730.557 394.201C920.106 353.38 1065.58 549.317 1150.56 688.106C1218.54 799.137 1372.22 834.972 1440.56 839.01L1440.56 0Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint4_linear"
            x1="1313.56"
            y1="-331.961"
            x2="1111.23"
            y2="616.77"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </svg>
    </OurTeamBottomContainer>
  )
}

export {
  LandingWaveBlue,
  LandingWaveGreen,
  ProductsWaveTop,
  ProductsWaveBottom,
  ProductsWaveBackground,
  OurTeamWaveBackground,
  OurTeamWaveTop,
  OurTeamWaveBottom
}
