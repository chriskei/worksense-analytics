import React from 'react'
import {
  LandingBlueContainer,
  LandingGreenContainer,
  ProductsTopContainer,
  ProductsBottomContainer,
  OurTeamBackgroundContainer,
  OurTeamTopContainer,
  OurTeamBottomContainer,
  WaveContainer,
  CenteredWave
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
    <WaveContainer top="-1000px">
      <CenteredWave
        height="699"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M477.82 505.782C336.503 405.992 195.186 322.517 53.8694 344.144C35.9129 346.699 17.9565 350.89 0 356.551V0H53.8694H477.82H901.77H1325.72H1749.67H1920V372.8C1863.22 377.58 1806.45 381.023 1749.67 364.254C1608.35 322.517 1467.04 163.155 1325.72 222.726C1184.4 284.574 1043.09 565.353 901.77 647.689C760.453 728.508 619.136 607.09 477.82 505.782Z" fill="url(#paint3_linear)" fillOpacity="0.2"/>
        <defs>
        <linearGradient id="paint3_linear" x1="625.43" y1="172.159" x2="1540.26" y2="91.667" gradientUnits="userSpaceOnUse">
        <stop offset="0.161458" stopColor="#07A3B2"/>
        <stop offset="1" stopColor="#D9ECC7"/>
        </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ProductsWaveBottom = () => {
  return (
    <WaveContainer top="-1510px">
      <CenteredWave
        height="699"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M0.0188318 562.775C0.00588618 555.6 0 547.873 0 539.753C0 458.284 0.592593 337.309 0.592593 337.309L80.5926 283.519C160.593 229.729 320.593 122.149 480.593 57.6004C640.593 -6.94779 800.593 -28.4639 960.593 57.6004C1033.32 96.7206 1106.05 158.068 1178.77 219.416C1266.05 293.032 1353.32 366.649 1440.59 401.858C1600.59 466.406 1760.59 401.858 1840.59 369.583L1920 337.549V562.762C1763.39 423.528 1447.49 490.192 1184 582.835C600.021 788.161 172.513 681.828 0.0188318 562.775Z" fill="url(#paint2_linear)" fillOpacity="0.2"/>
        <defs>
          <linearGradient id="paint2_linear" x1="1920.59" y1="503.6" x2="125.926" y2="152.933" gradientUnits="userSpaceOnUse">
            <stop stopColor="#07A3B2"/>
            <stop offset="1" stopColor="#D9ECC7"/>
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ProductsWaveBackground = () => {
  return (
    <WaveContainer top="-100px">
      <CenteredWave
        height="896"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.0854492H1920V759.346C1763.39 620.112 1447.49 686.776 1184 779.419C600 984.752 172.482 878.404 0 759.346V0.0854492Z" fill="url(#paint4_linear)"/>
        <defs>
          <linearGradient id="paint4_linear" x1="-467.345" y1="-621.522" x2="1154.46" y2="1159.17" gradientUnits="userSpaceOnUse">
            <stop stopColor="#07A3B2"/>
            <stop offset="1" stopColor="#D9ECC7"/>
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const OurTeamWaveBackground = () => {
  return (
    <OurTeamBackgroundContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1439 1180"
        fill="none"
      >
        <path
          d="M0 0.802734H1440V477.058C1205.81 516.305 1121 772 824 660C442.5 516.135 380.5 857 380.5 857C309.5 1153 0 1179.5 0 1179.5V0.802734Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="127.001"
            y1="-465.559"
            x2="510.09"
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

const DemoWaveBackground = () => {
  return (
    <WaveContainer>
      <CenteredWave
        height="1058"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1920"
          height="1058"
          transform="matrix(-1 0 0 1 1920 0)"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="2421.27"
            y1="-914.017"
            x2="371.761"
            y2="1118.19"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#30C0CE" />
            <stop offset="1" stopColor="#0BA8B7" stopOpacity="0.45" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const DemoWaveTop = () => {
  return (
    <WaveContainer top="-1920px">
      <CenteredWave
        height="1169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.00011401 -5.24223e-05L0.000304617 1168.5C71.4415 1116.35 361.783 1036.15 1077.81 1089.35C1299.26 1094.56 1734.93 1093.61 1920 987.999L1920 879.498L1920 431.009L1920 163.498C1770.35 147.998 1493.12 181.171 1403.28 309.554C1292.41 468.001 959.785 447.734 921.183 447.734C648.859 447.734 490.235 248.533 371.984 137.496C277.383 48.6674 95.0939 3.23091 0.00011401 -5.24223e-05Z"
          fill="url(#paint1_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="145.175"
            y1="953.59"
            x2="241.031"
            y2="171.803"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7F3E9" />
            <stop
              offset="0.432292"
              stopColor="#84D6DE"
              stopOpacity="0.898947"
            />
            <stop offset="0.625" stopColor="#93DCE3" />
            <stop offset="1" stopColor="#B5F4FA" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const DemoWaveBottom = () => {
  return (
    <WaveContainer top="-720px">
      <CenteredWave
        height="1077"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M577.53 260.21C213.418 503.861 40.7968 558.86 0 555.903V1076.32C8.9243 1021.13 205.004 919.606 917.928 955.089C1630.85 990.572 1883.03 887.079 1920 830.898V0C1587.25 476.066 1032.67 -44.354 577.53 260.21Z"
          fill="url(#paint0_radial)"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(2095.4 1023.76) rotate(-173.459) scale(1567 1018.92)"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="0.850921" stopColor="#23C4D3" />
          </radialGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ContactWaveBackground = () => {
  return (
    <WaveContainer>
      <CenteredWave
        height="1074"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 65.7983V1074H1920V37.5102C1741.5 106.514 1348.33 373.837 892.517 173.51C487.62 -4.43812 37.2697 -54.6877 0 65.7983Z"
          fill="url(#paint2_linear)"
          fillOpacity="0.7"
        />
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="1920"
            y1="64.5609"
            x2="586.874"
            y2="1162.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#4AD3D0" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ContactWaveTop = () => {
  return (
    <WaveContainer top="-1784px">
      <CenteredWave height="926" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1184.68 478.629C1417.53 347.715 1771.91 424.081 1920 478.629L1920 926H0V0.291528C51.0638 -3.90443 197.106 35.5374 372.766 226.872C592.34 466.041 893.616 642.271 1184.68 478.629Z"
          fill="url(#paint3_linear)"
          fillOpacity="0.15"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="993.191"
            y1="0"
            x2="993.191"
            y2="1095.43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#4AD3D0" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ContactWaveBottom = () => {
  return (
    <WaveContainer top="-850px">
      <CenteredWave height="844" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1920.68 843.188L0.68457 843.187L0.68458 732.558C134.684 435.747 608.684 472.849 608.684 472.849C1131.35 582.642 1399.35 310.721 1399.35 310.721C1655.35 18.484 1920.68 0.1875 1920.68 0.1875L1920.68 843.188Z"
          fill="url(#paint3_linear)"
          fillOpacity="0.15"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="2420.48"
            y1="1657.46"
            x2="1354.09"
            y2="318.175"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#1A9FAC" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
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
  OurTeamWaveBottom,
  DemoWaveBackground,
  DemoWaveTop,
  DemoWaveBottom,
  ContactWaveBackground,
  ContactWaveTop,
  ContactWaveBottom
}
