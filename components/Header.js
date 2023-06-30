import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Logo from './Logo';
import Menu from './Menu';

const Header = ({ navigation }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <View style={styles.header}>

            <TouchableOpacity onPress={toggleMenu}>
                <FontAwesome name="bars" size={20} color="#eab317" />
            </TouchableOpacity>

            <Logo width={148} height={33} navigation={navigation} />

            <TouchableOpacity>
                <FontAwesome name="shopping-cart" size={20} color="#eab317" />
            </TouchableOpacity>

            {isMenuOpen && <Menu toggleMenu={toggleMenu} navigation={navigation} />}

        </View>
    );
}

export default Header;