import Svg, { SvgProps, Path } from 'react-native-svg';
const PhoneIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 0.72 0.72"
        {...props}
    >
        <Path d="M.48.03H.24a.09.09 0 0 0-.09.09V.6c0 .05.04.09.09.09h.24C.53.69.57.65.57.6V.12A.09.09 0 0 0 .48.03zm-.06.6H.3V.6h.12v.03zM.518.54H.202V.12h.315v.42z" />
    </Svg>
)
export default PhoneIcon;
