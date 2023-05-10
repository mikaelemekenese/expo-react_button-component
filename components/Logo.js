import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

type LogoProps = {
    width: number;
    height: number;
    onPress: () => void;
};

export default function Logo({ width, height, onPress }: LogoProps) {
    
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Image style={[styles.logo, {width: width, height: height}]} source={require('../assets/images/neafood-logo.png')} />
            </TouchableOpacity>
        </View>
    )
}