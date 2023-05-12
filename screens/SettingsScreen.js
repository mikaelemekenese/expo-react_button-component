import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import Header from "../components/Header";

const SettingsScreen = () => {
  return (
    <View style={styles.containerBis}>
      <Header />

      <Text style={styles.containerTitle}>Paramètres</Text>

      <TouchableOpacity>
        <Image
          style={styles.hero}
          source={require("../assets/images/hero-image.jpg")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SettingsScreen;