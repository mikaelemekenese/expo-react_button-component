import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Logo from './Logo';

export default function Header({ navigation }) {
    
    return (
        <View style={styles.header}>

            <Logo width={148} height={33} onPress={() => navigation.navigate('Home')} />

            <TouchableOpacity>
                <FontAwesome name="shopping-cart" size={20} color="#eab317" />
            </TouchableOpacity>

        </View>
    );
}
