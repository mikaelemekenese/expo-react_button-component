import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const Menu = ({ toggleMenu, navigation }) => {

  const navigateTo = (screen) => {

    toggleMenu();
    navigation.navigate(screen);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigateTo('Home')} style={styles.menuItem}>
        <Text style={styles.menuItemText}>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('About')} style={styles.menuItem}>
        <Text style={styles.menuItemText}>A propos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Contact')} style={styles.menuItem}>
        <Text style={styles.menuItemText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};
  
export default Menu;