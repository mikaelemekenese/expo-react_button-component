import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function Logo() {
    
    return (
        <View>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../assets/images/neafood-logo.png')} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 247,
        height: 55,
        marginTop: 10,
        marginBottom: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
})