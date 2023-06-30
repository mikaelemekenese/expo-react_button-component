import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { styles } from "../styles/styles";

const Menu = ({ toggleMenu }) => {

  const navigation = useNavigation();

  const navigateTo = (screen) => {
    toggleMenu();
    navigation.navigate(screen);
  };

  return (
    <Modal animationType="slide">
      <View style={styles.menuContainer}>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuCloseButton}>
            <FontAwesome name="times" size={20} color="#eab317" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateTo("Accueil")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>Accueil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateTo("A propos")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>A propos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateTo("Paramètres")}
            style={styles.menuItem}
          >
            <Text style={styles.menuItemText}>Paramètres</Text>
          </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Menu;