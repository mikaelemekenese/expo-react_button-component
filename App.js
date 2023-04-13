import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Formation sur React Native / Expo</Text>
      <StatusBar style="auto" />
      <Button
        cp="#39d353"
        cs="#39d353"
        title="Bouton"
        outlined={true}
      />
    </View>
  );
}

const Button = ({ cp, cs, onPress, outlined, title }) => {

  const buttonStyle = outlined ? {...styles.plainButton, ...styles.outlinedButton} : styles.plainButton;
  const textStyle = outlined ? {...styles.plainText, ...styles.outlinedText} : styles.plainText;

  return (
    <TouchableOpacity style={[buttonStyle, {borderColor: cp}]} onPress={onPress}>
      <Text style={[textStyle, {color: cs}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plainButton: {
    marginTop: 25,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 16,
    backgroundColor: 'black',
  },
  plainText: {
    fontSize: 16,
  },
  outlinedButton: {
    borderWidth: 3,
    borderColor: '#39d353',
  },
  outlinedText: {
    fontWeight: 'bold',
  }
});
