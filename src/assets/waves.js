import React from 'react'
import {
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

const LandingBiasWave = () => {
  return (
    <WaveContainer>
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
    <WaveContainer top="-500px">
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
    <WaveContainer top="-870px">
      <CenteredWave height="574" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M477.322 430.898C336.251 346.04 195.18 275.056 54.1081 293.448C36.1828 295.62 18.2575 299.184 0.332153 303.997V0.800781H54.1081H477.322H900.537H1323.75H1746.97H1917V317.815C1860.32 321.88 1803.64 324.808 1746.97 310.548C1605.89 275.056 1464.82 139.542 1323.75 190.198C1182.68 242.791 1041.61 481.555 900.537 551.57C759.466 620.296 618.394 517.046 477.322 430.898Z"
          fill="url(#paint3_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint3_linear"
            x1="624.677"
            y1="147.198"
            x2="1535.28"
            y2="53.1433"
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
    <WaveContainer top="-1283px">
      <CenteredWave height="585" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.00012207 460.625V457.175C0.00980692 387.832 0.592387 286.522 0.592387 286.522L80.5646 240.717C160.537 194.913 320.481 103.303 480.426 48.3378C640.37 -6.62777 800.315 -24.9496 960.259 48.3378C1032.96 81.6503 1105.66 133.89 1178.37 186.13C1265.61 248.818 1352.85 311.506 1440.09 341.488C1600.04 396.453 1759.98 341.488 1839.95 314.005L1919.33 286.726V478.505C1762.77 359.941 1446.99 416.708 1183.59 495.598C599.813 670.442 172.453 579.894 0.0188252 478.516C0.00695744 472.912 0.00102458 466.914 0.00012207 460.625Z"
          fill="url(#paint2_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint2_linear"
            x1="1919.93"
            y1="428.126"
            x2="150.487"
            y2="22.2541"
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
      <CenteredWave height="763" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 0H1919.33V646.544C1762.77 527.98 1446.99 584.747 1183.59 663.636C599.792 838.487 172.422 747.926 0 646.544V0Z"
          fill="url(#paint4_linear)"
        />
        <defs>
          <linearGradient
            id="paint4_linear"
            x1="-467.183"
            y1="-529.326"
            x2="876.378"
            y2="1202.45"
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

const FooterWaveBackground = () => {
  return (
    <WaveContainer>
      <CenteredWave height="721" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="721" fill="url(#paint11_linear)" />
        <defs>
          <linearGradient
            id="paint11_linear"
            x1="3444.08"
            y1="-2503.48"
            x2="-1409.81"
            y2="-273.931"
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

const FooterWaveBottom = () => {
  return (
    <WaveContainer top="-1220px">
      <CenteredWave height="557" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1559.61 223.728C1836.64 230.174 1916.63 446.559 1922 562H0V114.5C0 114.5 98.5 45.6957 205.5 20.9999C449.776 -35.3797 633.508 30.4246 789.201 143.184C944.894 255.943 1213.33 215.672 1559.61 223.728Z"
          fill="url(#paint9_linear)"
          fillOpacity="0.45"
        />
        <defs>
          <linearGradient
            id="paint9_linear"
            x1="-2634.7"
            y1="-2407.44"
            x2="2763.58"
            y2="1370.82"
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

const FooterWaveTop = () => {
  return (
    <WaveContainer top="-665px">
      <CenteredWave height="639" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1511.5 325.288C1788.24 333.98 1904.5 522 1920 638.5H0V170.174C0 170.174 83 72.7309 211.844 32.5847C455.866 -43.4501 632.849 18.105 788.38 170.174C943.911 322.244 1165.58 314.422 1511.5 325.288Z"
          fill="url(#paint10_linear)"
          fillOpacity="0.15"
        />
        <defs>
          <linearGradient
            id="paint10_linear"
            x1="-2631.96"
            y1="-3269.66"
            x2="3700.39"
            y2="13.245"
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
  FooterWaveBackground,
  FooterWaveTop,
  FooterWaveBottom,
  TalentLifecyclePath
}
