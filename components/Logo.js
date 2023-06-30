import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles';

type LogoProps = {
    width: number;
    height: number;
};

const Logo = ({ width, height }: LogoProps) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Accueil');
    };
    
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={[styles.logo, {width: width, height: height}]} source={require('../assets/images/neafood-logo.png')} />
        </TouchableOpacity>
    )
}

export default Logo;