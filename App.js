import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles/styles';
import Logo from './components/Logo';
import MyTabs from './navigation/navigation';

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
            options={{ headerShown: false }}>
            {() => (
              <View style={styles.container}>
                <Logo width={247} height={55} />
                <Text style={styles.containerSubtitle}>
                  Réservez vos repas sur votre nouvelle app' !
                </Text>
                <ActivityIndicator size="large" color="#e67104" />
                <StatusBar style="auto" />
              </View>
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MyTabs" options={{ headerShown: false }}>
            {() => (
              <MyTabs />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}