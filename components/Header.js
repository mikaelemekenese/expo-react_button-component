import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../styles/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Logo from './Logo';
import Menu from './Menu';

export default function Header({ navigation }) {

    const [menuVisible, setMenuVisible] = useState(false);
    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    
    return (
        <View style={styles.header}>

            <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
                <FontAwesome name="bars" size={20} color="#e67104" />
            </TouchableOpacity>

            <Modal visible={menuVisible} animationType="slide">
                <TouchableWithoutFeedback onPress={toggleMenu}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.menuPopup}>
                    <TouchableOpacity onPress={toggleMenu} style={styles.menuCloseButton}>
                        <FontAwesome name="times" size={20} color="#e67104" />
                    </TouchableOpacity>
                    <Menu toggleMenu={toggleMenu} navigation={navigation} />
                </View>
            </Modal>

            <Logo width={148} height={33} onPress={() => navigation.navigate('Home')} />

            <TouchableOpacity>
                <FontAwesome name="shopping-cart" size={20} color="#e67104" />
            </TouchableOpacity>

        </View>
    );
}
