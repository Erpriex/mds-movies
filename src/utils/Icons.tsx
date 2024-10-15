import Svg, {Path} from 'react-native-svg';

export const Cross = ({ width = 15, height = 14, stroke = 'white' }) => {
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
}