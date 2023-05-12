import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

type LogoProps = {
    width: number;
    height: number;
    navigation: any;
    onPress: () => void;
};

const Logo = ({ width, height, onPress, navigation }: LogoProps) => {
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image style={[styles.logo, {width: width, height: height}]} source={require('../assets/images/neafood-logo.png')} />
        </TouchableOpacity>
    )
}

export default Logo;