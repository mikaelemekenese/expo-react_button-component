import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Formation sur React Native / Expo</Text>
      <StatusBar style="auto" />
      <Button
        cp="green"
        cs="#39d353"
        title="Voir plus"
        outlined={true}
      />
    </View>
  );
}

const Button = ({ cp, cs, onPress, outlined, title }) => {

  const buttonStyle = outlined ? {...styles.plainButton, ...styles.outlinedButton} : styles.plainButton;

  return (
    <TouchableOpacity style={[buttonStyle, {backgroundColor: cp, borderColor: cs}]} onPress={onPress}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3337',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    color: 'white',
    fontSize: 25,
    marginHorizontal: 45,
    textAlign: 'center',
  },
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
    fontWeight: 'bold',
    color: 'white',
  }
});