import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles.js';

export default function Logo() {
    
    return (
        <View>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../assets/images/neafood-logo.png')} />
            </TouchableOpacity>
        </View>
    )
}