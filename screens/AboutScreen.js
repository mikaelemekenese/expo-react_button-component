import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/styles.js';
import Menu from '../components/Menu.js';

export default function AboutScreen({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false);
    
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    
    return (
        <View style={styles.containerBis}>
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
            </View>
            <Text style={styles.containerTitle}>A propos</Text>
    
            <TouchableOpacity>
                <Image style={styles.hero} source={require('../assets/images/hero-image.jpg')} />
            </TouchableOpacity>
        </View>
    );
}      

