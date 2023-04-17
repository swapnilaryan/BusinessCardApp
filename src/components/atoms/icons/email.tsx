import Svg, { SvgProps, Path } from 'react-native-svg';
const EmailIcon = (props: SvgProps): JSX.Element => (
  <Svg
    fill="#000000"
    width="24px"
    height="24px"
    viewBox="0 0 1.08 1.08"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <Path
      d="M0.97 0.18a0.06 0.06 0 0 0 -0.012 0h-0.84a0.06 0.06 0 0 0 -0.016 0.002l0.433 0.432Z"
    />
    <Path
      d="m1.014 0.222 -0.437 0.435a0.06 0.06 0 0 1 -0.085 0L0.06 0.225a0.06 0.06 0 0 0 -0.002 0.015v0.6a0.06 0.06 0 0 0 0.06 0.06h0.84a0.06 0.06 0 0 0 0.06 -0.06V0.24a0.06 0.06 0 0 0 -0.004 -0.018ZM0.159 0.84H0.117v-0.043l0.218 -0.216 0.042 0.042Zm0.798 0h-0.042l-0.219 -0.217 0.042 -0.042 0.218 0.216Z"
    />
    <Path
      x={0}
      y={0}
      fillOpacity={0}
      d="M0 0H1.08V1.08H0V0z"
    />
  </Svg>
);
export default EmailIcon;
