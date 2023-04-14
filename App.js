import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from './components/Button';
import Logo from './components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Bienvenue sur</Text>
      <Logo />
      <Text style={styles.containerSubtitle}>Réservez vos repas sur votre nouvelle app' !</Text>
      <StatusBar style="auto" />
      <Button
        cp="#e67104"
        cs="#ebc51d"
        title="Entrer"
        outlined={true}
        url="https://www.google.fr"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  containerSubtitle: {
    color: 'black',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  logo: {
    width: 250,
    height: 'auto',
  }
});