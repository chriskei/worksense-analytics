import React from 'react'
import {
  LandingTopContainer,
  LandingGreenContainer,
  ProductsTopContainer,
  ProductsBottomContainer,
  OurTeamBackgroundContainer,
  OurTeamTopContainer,
  OurTeamBottomContainer,
  LifecyclePathContainer,
  WaveContainer,
  CenteredWave
} from './waves.styles'

const LandingWaveBackground = () => {
  return (
    <WaveContainer>
      <CenteredWave
        height="1326"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="1920"
          height="1326"
          transform="matrix(-1 0 0 1 1920 0)"
          fill="url(#paint2_linear)"
        />
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="2445.49"
            y1="532.848"
            x2="61.9253"
            y2="841.834"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const LandingWaveTop = () => {
  return (
    <WaveContainer top="-1300px">
      <CenteredWave
        height="2392"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.492449 1243.74H2.8976e-05L0 767.869C46.4719 705.632 182.601 576.321 355.344 556.97C519.675 538.562 645.296 572.69 807.315 616.706C858.185 630.527 912.644 645.322 973.015 659.771C1225.67 720.243 1419.56 429.981 1532.83 224.378C1623.45 59.8962 1828.28 6.81007 1919.37 0.827393L1919.37 1108.95H1920V1928.1C1908.58 1964 1859.06 1893.56 1835.72 1853.85C1751.44 1662.35 1207.41 1492.73 899.946 1990.64C653.971 2388.96 197.493 2417.66 0.000439766 2382.22L0.000479101 1736.21L0.492449 1243.74Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="169.335"
            y1="-945.805"
            x2="1237.24"
            y2="1395.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const LandingWaveGreen = () => {
  return (
    <WaveContainer top="-3000px">
      <CenteredWave
        height="1389"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-9.39995e-05 1389L-3.23739e-05 478.378L4.54035e-05 12.1759C196.911 -20.7605 685.708 -6.79535 1065.6 312.557C1540.47 711.747 1919.37 237.462 1919.37 237.462L1919.37 478.378L1920 827.028L1920 1186.1C1729.01 1209.08 1460.46 1165.96 1374.41 991.797C1268.21 776.844 949.59 804.337 912.613 804.337C651.757 804.337 499.812 1074.58 386.54 1225.22C295.923 1345.72 91.0895 1384.62 -9.39995e-05 1389Z"
          fill="url(#paint1_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="169.28"
            y1="118.083"
            x2="350.748"
            y2="1163.11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9ECC7" />
            <stop offset="1" stopColor="#D9ECC7" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const StatsWaveBackground = () => {
  return (
    <WaveContainer top="-100px">
      <CenteredWave
        height="1117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 977.045V0C133.29 64.6621 441.306 171.649 584.81 211.445C808.487 273.474 1021.6 250.376 1262.09 118.978C1485.77 -3.23311 1761.3 95.8419 1920 73.4153V839.961C1920 839.961 1658.21 1010.99 1270.21 944.067C882.213 877.142 837.227 1247.33 478.594 1066.93C119.961 886.518 0 977.045 0 977.045Z"
          fill="#083D44"
        />
      </CenteredWave>
    </WaveContainer>
  )
}

const StatsWaveTop = () => {
  return (
    <WaveContainer top="-1050px">
      <CenteredWave height="516" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M136.5 196.5C80.78 157.765 0 21.2303 0 21.2303V516H1920V52.8332C1646.99 -92.9046 1277.95 94.5169 1005 233.137L1004.97 233.153C887.044 297.321 439.175 406.911 136.5 196.5Z"
          fill="url(#paint4_linear)"
          fillOpacity="0.05"
        />
        <defs>
          <linearGradient
            id="paint4_linear"
            x1="783.891"
            y1="4.13858"
            x2="783.891"
            y2="516"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#07A3B2" stopOpacity="0" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const StatsWaveBottom = () => {
  return (
    <WaveContainer top="-1520px">
      <CenteredWave height="773" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M556.83 254.37C375.723 98.5384 139.959 87.733 0 109.576V772.853H1919.56V73.5234C1679 -131.808 1376.21 136.483 1159.33 345.786C1065.63 442.672 823.655 483.956 556.83 254.37Z"
          fill="url(#paint5_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint5_linear"
            x1="973.016"
            y1="0"
            x2="973.016"
            y2="772.853"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#07A3B2" stopOpacity="0" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ProductsWaveTop = () => {
  return (
    <WaveContainer top="-1000px">
      <CenteredWave height="699" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M477.82 505.782C336.503 405.992 195.186 322.517 53.8694 344.144C35.9129 346.699 17.9565 350.89 0 356.551V0H53.8694H477.82H901.77H1325.72H1749.67H1920V372.8C1863.22 377.58 1806.45 381.023 1749.67 364.254C1608.35 322.517 1467.04 163.155 1325.72 222.726C1184.4 284.574 1043.09 565.353 901.77 647.689C760.453 728.508 619.136 607.09 477.82 505.782Z"
          fill="url(#paint3_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="625.43"
            y1="172.159"
            x2="1540.26"
            y2="91.667"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.161458" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ProductsWaveBottom = () => {
  return (
    <WaveContainer top="-1512px">
      <CenteredWave height="699" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0188318 562.775C0.00588618 555.6 0 547.873 0 539.753C0 458.284 0.592593 337.309 0.592593 337.309L80.5926 283.519C160.593 229.729 320.593 122.149 480.593 57.6004C640.593 -6.94779 800.593 -28.4639 960.593 57.6004C1033.32 96.7206 1106.05 158.068 1178.77 219.416C1266.05 293.032 1353.32 366.649 1440.59 401.858C1600.59 466.406 1760.59 401.858 1840.59 369.583L1920 337.549V562.762C1763.39 423.528 1447.49 490.192 1184 582.835C600.021 788.161 172.513 681.828 0.0188318 562.775Z"
          fill="url(#paint2_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="1920.59"
            y1="503.6"
            x2="125.926"
            y2="152.933"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const ProductsWaveBackground = () => {
  return (
    <WaveContainer top="-100px">
      <CenteredWave height="896" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0.0854492H1920V759.346C1763.39 620.112 1447.49 686.776 1184 779.419C600 984.752 172.482 878.404 0 759.346V0.0854492Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint4_linear"
            x1="-467.345"
            y1="-621.522"
            x2="1154.46"
            y2="1159.17"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const OurTeamWaveBackground = () => {
  return (
    <WaveContainer top="-200px">
      <CenteredWave
        xmlns="http://www.w3.org/2000/svg"
        height="1338"
        fill="none"
      >
        <path
          d="M0 0.25H1920V540.67C1502.68 600.189 1119.35 778.925 1119.35 778.925C596.682 655.183 521.333 987.766 521.333 987.766C265.333 1317.13 0 1337.75 0 1337.75V0.25Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="169.335"
            y1="-528.943"
            x2="547.882"
            y2="955.731"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const OurTeamWaveTop = () => {
  return (
    <WaveContainer top="-1400px">
      <CenteredWave xmlns="http://www.w3.org/2000/svg" height="818" fill="none">
        <path
          d="M0.709961 0L1920.08 -0.000216763L1920.71 313.187L1920.71 635.737C1729.72 656.384 1461.17 617.649 1375.12 461.197C1268.92 268.107 950.3 292.805 913.323 292.805C652.467 292.805 500.522 535.562 387.25 670.875C296.633 779.125 91.7996 814.063 0.710016 818L0.709961 0Z"
          fill="url(#paint4_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint4_linear"
            x1="169.99"
            y1="-323.649"
            x2="317.253"
            y2="620.42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

const OurTeamWaveBottom = () => {
  return (
    <WaveContainer top="-2300px">
      <CenteredWave xmlns="http://www.w3.org/2000/svg" height="840" fill="none">
        <path
          d="M1920.17 0.350586L0.169212 0.350369L0.169191 321.582C46.6562 363.594 182.83 450.883 355.629 463.945C571.628 480.274 720.77 435.371 973.502 394.551C1226.24 353.731 1420.19 549.668 1533.5 688.456C1624.15 799.487 1829.05 835.322 1920.17 839.361L1920.17 0.350586Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="1750.83"
            y1="-331.611"
            x2="1596.15"
            y2="635.526"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stop-color="#D9ECC7" />
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
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

const TalentLifecyclePath = () => {
  return (
    <LifecyclePathContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="393"
        height="1286"
        viewBox="0 0 393 1286"
        fill="none"
      >
        <path
          d="M332 512C290.674 524.534 199.629 581.187 166.057 707.527C132.484 833.868 80.0303 877.151 58 883"
          stroke="#07A3B2"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <path
          d="M45.0724 59.1619C47.6746 119.604 81.9604 249.231 198.287 284.199C314.613 319.168 346.907 354.878 348.514 368.361"
          stroke="#07A3B2"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
        <path
          d="M2.11109 962C-0.284907 998.914 35.1795 1084.56 196.205 1131.81C357.231 1179.06 393.101 1253.62 390.907 1285"
          stroke="#07A3B2"
          strokeWidth="3"
          strokeDasharray="8 8"
        />
      </svg>
    </LifecyclePathContainer>
  )
}

export {
  LandingWaveBackground,
  LandingWaveTop,
  LandingWaveGreen,
  StatsWaveBackground,
  StatsWaveTop,
  StatsWaveBottom,
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
  ContactWaveBottom,
  TalentLifecyclePath
}
