import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './styles/styles.js';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import Logo from './components/Logo';

const Stack = createStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {isLoading ? (
          <Stack.Screen
            name="Welcome"
            options={{ headerShown: false }}
            component={() => (
              <View style={styles.container}>
                <Logo />
                <Text style={styles.containerSubtitle}>
                  Réservez vos repas sur votre nouvelle app'
                </Text>
                <ActivityIndicator size="large" color="#e67104" />
                <StatusBar style="auto" />
              </View>
            )}
          />
        ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
        </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}