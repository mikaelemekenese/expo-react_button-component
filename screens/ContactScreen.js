import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';
import Header from '../components/Header';

export default function ContactScreen({ navigation }) {

    return (
        <View style={styles.containerBis}>
            <Header navigation={navigation} />
            <Text style={styles.containerTitle}>Contact</Text>
    
            <TouchableOpacity>
                <Image style={styles.hero} source={require('../assets/images/hero-image.jpg')} />
            </TouchableOpacity>
        </View>
    );
}      

