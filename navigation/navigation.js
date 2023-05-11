import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Accueil"
        component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#eab317',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="A propos" 
        component={AboutScreen} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#eab317',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Contact" 
        component={ContactScreen} 
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#eab317',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" size={size} color={color} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}