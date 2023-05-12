import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

type ButtonProps = {
    cp: string;
    cs: string;
    onPress: () => void;
    outlined: boolean;
    title: string;
};

const Button = ({ cp, cs, onPress, outlined, title }: ButtonProps) => {

    const buttonStyle = outlined ? {...styles.plainButton, ...styles.outlinedButton} : styles.plainButton;

    return (
        <TouchableOpacity style={[buttonStyle, {backgroundColor: cp, borderColor: cs}]} onPress={onPress}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;