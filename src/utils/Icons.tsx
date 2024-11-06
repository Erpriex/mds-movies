import Svg, {Circle, Path} from 'react-native-svg';

export const CrossIcon = ({width = 15, height = 14, stroke = 'white'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 14" fill="none">
      <Path
        d="M7.36766 1.16667V12.8417"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3246 7.00401H1.41669"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const HomeIcon = ({width = 19, height = 20, stroke = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        id="Home_2"
        d="M7.13478 18.7733V15.7156C7.13478 14.9351 7.77217 14.3023 8.55844 14.3023H11.4326C11.8102 14.3023 12.1723 14.4512 12.4393 14.7163C12.7063 14.9813 12.8563 15.3408 12.8563 15.7156V18.7733C12.8539 19.0978 12.9821 19.4099 13.2124 19.6402C13.4427 19.8705 13.7561 20 14.0829 20H16.0438C16.9596 20.0023 17.8388 19.6428 18.4872 19.0008C19.1356 18.3588 19.5 17.487 19.5 16.5778V7.86686C19.5 7.13246 19.1721 6.43584 18.6046 5.96467L11.934 0.675869C10.7737 -0.251438 9.11111 -0.221498 7.98539 0.746979L1.46701 5.96467C0.872741 6.42195 0.517552 7.12064 0.5 7.86686V16.5689C0.5 18.4639 2.04738 20 3.95617 20H5.87229C6.55123 20 7.103 19.4562 7.10792 18.7822L7.13478 18.7733Z"
        fill={stroke}
      />
    </Svg>
  );
};

export const SearchIcon = ({width = 19, height = 19, stroke = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
      <Circle
        id="Ellipse_739"
        cx="9.76657"
        cy="9.76657"
        r="8.98856"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Line_181"
        d="M16.0183 16.4851L19.5423 20"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const BookmarkIcon = ({width = 16, height = 19, stroke = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 22" fill="none">
      <Path
        id="Stroke 1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7389 5.15362C16.7389 2.40274 14.8582 1.29999 12.1504 1.29999H5.79149C3.16693 1.29999 1.20001 2.32756 1.20001 4.97016V19.694C1.20001 20.4198 1.98096 20.8769 2.61355 20.522L8.9955 16.9421L15.3223 20.516C15.9559 20.8729 16.7389 20.4158 16.7389 19.689V5.15362Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Stroke 3"
        d="M5.27118 8.02799H12.5895"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const ProfileIcon = ({width = 14, height = 18, stroke = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 20" fill="none">
      <Path
        id="Stroke 1"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.98475 13.3462C4.11713 13.3462 0.81427 13.931 0.81427 16.2729C0.81427 18.6148 4.09617 19.2205 7.98475 19.2205C11.8524 19.2205 15.1543 18.6348 15.1543 16.2938C15.1543 13.9529 11.8733 13.3462 7.98475 13.3462Z"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        id="Stroke 3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.98477 10.0059C10.5229 10.0059 12.58 7.94779 12.58 5.40969C12.58 2.8716 10.5229 0.814453 7.98477 0.814453C5.44667 0.814453 3.38858 2.8716 3.38858 5.40969C3.38001 7.93922 5.42382 9.99731 7.95239 10.0059H7.98477Z"
        stroke={stroke}
        stroke-width="1.42857"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export const PointIcon = ({width = 6, height = 6, stroke = 'white'}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 7 6"
      fill="none"
    >
      <Circle id="Ellipse 1" cx="3.5" cy="3" r="3" fill={stroke} />
    </Svg>
  );
};
