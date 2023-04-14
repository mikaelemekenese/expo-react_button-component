import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View, Linking } from 'react-native'

export default function Button({ cp, cs, url, outlined, title }) {

    const buttonStyle = outlined ? {...styles.plainButton, ...styles.outlinedButton} : styles.plainButton;

    return (
        <View>
            <TouchableOpacity style={[buttonStyle, {backgroundColor: cp, borderColor: cs}]} onPress={() => Linking.openURL(url)}>
                <Text style={styles.textStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    plainButton: {
        marginTop: 25,
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 16,
    },
    outlinedButton: {
        borderWidth: 3,
        borderColor: '#39d353',
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
    },
})