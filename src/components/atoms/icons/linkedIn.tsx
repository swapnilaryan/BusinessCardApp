import Svg, { SvgProps, Path } from 'react-native-svg';
const LinkedInIcon = (props: SvgProps) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 36 36"
        {...props}
    >
      <Path d="M0 0v36h36V0H0zm8.829 7.077c1.426.016 2.83 1 2.892 2.703.03 1.514-1.289 2.668-2.929 2.703h-.04c-1.412-.016-2.79-1.025-2.854-2.703.02-1.497 1.279-2.667 2.931-2.703zm15.297 7.155c1.568.01 3.047.475 4.263 1.714 1.263 1.409 1.669 3.351 1.714 5.326v8.982h-5.177v-8.371c-.012-1.569-.549-3.476-2.626-3.54-1.217.013-2.075.72-2.663 1.903-.16.381-.184.818-.191 1.255v8.754h-5.175c.02-4.376.047-8.752.037-13.129 0-1.243-.012-2.08-.037-2.511h5.175v2.206c.439-.625.926-1.217 1.58-1.694.886-.633 1.951-.875 3.1-.894zm-17.923.382h5.175v15.64H6.203v-15.64z" />
    </Svg>
);
export default LinkedInIcon;