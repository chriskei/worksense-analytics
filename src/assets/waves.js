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

const LandingWaveTop = () => {
  return (
    <LandingTopContainer>
      <svg
        viewBox="0 0 1440 1796"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.369579 932.824H2.17391e-05L0 575.801C34.8654 529.109 136.996 432.093 266.595 417.576C389.884 403.765 484.13 429.369 605.684 462.392C643.849 472.761 684.707 483.861 730 494.702C919.549 540.07 1065.02 322.302 1150 168.05C1217.99 44.648 1371.66 4.82056 1440 0.332031V831.698H1440.47V1446.26C1431.9 1473.19 1394.75 1420.34 1377.24 1390.55C1314.01 1246.88 905.857 1119.63 675.18 1493.18C490.638 1792.02 148.168 1813.55 0.000451883 1786.96L0.000481394 1302.29L0.369579 932.824Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="127.043"
            y1="-709.875"
            x2="928.233"
            y2="1046.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#083D44" stopOpacity="0.71" />
            <stop offset="0.395833" stopColor="#07A3B2" />
            <stop offset="1" stopColor="#D9ECC7" />
          </linearGradient>
        </defs>
      </svg>
    </LandingTopContainer>
  )
}

const LandingWaveGreen = () => {
  return (
    <LandingGreenContainer>
      <svg
        viewBox="0 0 1440 1042"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-7.04489e-05 1041.33L-2.42629e-05 358.857L3.40531e-05 9.4574C147.684 -15.2271 514.281 -4.76081 799.203 234.581C1155.36 533.758 1439.53 178.3 1439.53 178.3L1439.53 358.858L1440 620.156L1440 889.266C1296.76 906.492 1095.35 874.175 1030.81 743.644C951.154 582.545 712.192 603.151 684.46 603.151C488.818 603.151 374.859 805.688 289.905 918.582C221.942 1008.9 68.3171 1038.05 -7.04489e-05 1041.33Z"
          fill="url(#paint1_linear)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="126.96"
            y1="88.8307"
            x2="262.871"
            y2="872.068"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D9ECC7" />
            <stop offset="1" stopColor="#D9ECC7" stopOpacity="0.35" />
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
  LandingWaveTop,
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
