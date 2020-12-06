import React from 'react'
import {
  LandingTopContainer,
  LandingGreenContainer,
  ProductsTopContainer,
  ProductsBottomContainer,
  OurTeamBackgroundContainer,
  OurTeamTopContainer,
  OurTeamBottomContainer,
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

const LandingBiasWave = () => {
  return (
    <WaveContainer top="500px">
      <CenteredWave
        height="1928"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1920 115.28C1760 40.8882 1600 -23.8 1440 8.54411C1280 40.8882 1120 173.345 960 222.169C800 271.917 640 238.033 480 230.332C320 222.631 160 238.033 80 246.812L0 254.975V353.548H80C160 353.548 320 353.548 480 353.548C640 353.548 800 353.548 960 353.548C1120 353.548 1280 353.548 1440 353.548C1600 353.548 1760 353.548 1920 353.548V115.28Z"
          fill="#083D44"
        />
        <rect y="328" width="1920" height="1450" fill="#083D44" />
        <path
          d="M529.265 380.809C346.502 279.792 141.239 266.377 0.00100551 280.537L0 716.915H1920V280.537L1860.01 244.84C1617.24 111.735 1356.14 304.39 1137.27 440.07C1042.71 502.876 798.528 529.638 529.265 380.809Z"
          fill="url(#paint6_linear)"
          fillOpacity="0.2"
        />
        <path
          d="M432.244 267.622C249.481 186.163 141.238 109.539 0 120.957V518.031H1920V166.142L1852.44 120.957C1609.68 13.6223 1356.14 185.377 1137.27 294.787C1042.71 345.433 701.508 387.635 432.244 267.622Z"
          fill="url(#paint7_linear)"
          fillOpacity="0.05"
        />
        <defs>
          <linearGradient
            id="paint6_linear"
            x1="949.254"
            y1="215.915"
            x2="949.254"
            y2="716.914"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#07A3B2" />
            <stop offset="1" stopColor="#07A3B2" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint7_linear"
            x1="960"
            y1="114.032"
            x2="960"
            y2="518.032"
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

const LandingProductsWave = () => {
  return (
    <WaveContainer>
      <CenteredWave height="906" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.500249 512.624H3.4136e-05L0 285C58.7048 261 199.046 209.126 374.004 201.168C505.081 195.207 601.495 213.074 712.804 233.703C787.21 247.492 868.272 262.514 970.793 272.477C1197.58 294.517 1318.14 223.14 1475.21 130.148C1495.37 118.214 1516.13 105.925 1537.79 93.4307C1689.98 5.65195 1815.88 2.56301 1907.26 0.321279C1911.58 0.215248 1915.83 0.111112 1919.99 0L1919.99 457.5H1920V789.3C1920 789.3 1833.33 751.433 1665.94 715.053C1519.07 683.13 1263.84 703.619 919.516 821.637C604.082 929.753 198.509 913.572 0.00521695 899.019L0.00524454 715.053L0.500249 512.624Z"
          fill="url(#paint0_radial)"
        />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(2631.52 1112.72) rotate(-150.459) scale(2092.22 1346.15)"
          >
            <stop stopColor="#F7F3E9" />
            <stop offset="0.0001" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </radialGradient>
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

const FooterWaveBottom = () => {
  return (
    <WaveContainer>
      <CenteredWave height="562" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1559.61 223.728C1836.64 230.174 1916.63 446.559 1922 562H0V114.5C0 114.5 98.5 45.6957 205.5 20.9999C449.776 -35.3797 633.508 30.4246 789.201 143.184C944.894 255.943 1213.33 215.672 1559.61 223.728Z" fill="url(#paint9_linear)" fillOpacity="0.45"/>
        <defs>
          <linearGradient id="paint9_linear" x1="-2634.7" y1="-2407.44" x2="2763.58" y2="1370.82" gradientUnits="userSpaceOnUse">
            <stop stopColor="#07A3B2"/>
            <stop offset="1" stopColor="#D9ECC7"/>
          </linearGradient>
        </defs>
      </CenteredWave>
    </WaveContainer>
  )
}

export {
  LandingWaveBackground,
  LandingWaveTop,
  LandingWaveGreen,
  LandingBiasWave,
  LandingProductsWave,
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
  FooterWaveBottom
}
