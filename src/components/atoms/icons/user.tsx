import Svg, { SvgProps, Path } from 'react-native-svg';
const UserIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        data-name="Flat Color"
        viewBox="0 0 0.72 0.72"
        {...props}
    >
      <Path
          d="M.63.6a.06.06 0 0 1-.06.06H.15A.06.06 0 0 1 .09.6.18.18 0 0 1 .27.42h.18A.18.18 0 0 1 .63.6ZM.36.36A.15.15 0 1 0 .21.21a.15.15 0 0 0 .15.15Z"
      />
    </Svg>
)
export default UserIcon;
