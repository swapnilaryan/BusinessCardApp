import Svg, { SvgProps, Path } from 'react-native-svg';
const OccupationIcon = (props: SvgProps): JSX.Element => (
    <Svg
        fill="#000000"
        width="24px"
        height="24px"
        viewBox="0 0 0.72 0.72"
        data-name="Layer 1"
        id="Layer_1"
        {...props}
    >
      <Path d="m0.18 0.399 0.036 0.016a0.217 0.217 0 0 0 0.168 0.005 0.155 0.155 0 0 1 0.127 0.005l0.09 0.044V0.161l-0.062 -0.03a0.215 0.215 0 0 0 -0.176 -0.007A0.156 0.156 0 0 1 0.24 0.12l-0.06 -0.027V0.06H0.12v0.6h0.06Z" />
    </Svg>
);
export default OccupationIcon;
