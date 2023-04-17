import React from 'react';
import { View, Text } from 'react-native';
import {iconMap} from "../../../utils/iconMap";
import Styles from "./style";

interface TextIconProps {
    text: string;
    icon: string;
}

const TextIcon = ({ text, icon }: TextIconProps): JSX.Element => {
    const IconComponent = iconMap(icon);
    return (
        <View style={Styles.textIconContainer}>
            {IconComponent && <IconComponent />}
            <Text style={Styles.text}>{text}</Text>
        </View>
    );
};

export default TextIcon;
