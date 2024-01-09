import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Otp from './src/';
import Biometric from './Biometric';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ title: 'OTP Page' }}
        />
        <Stack.Screen
          name="Biometric"
          component={Biometric}
          options={{ title: 'Biometric Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="OTP"
        onPress={() => navigation.navigate('Otp')}
        style={styles.button}
      />
      <Button
        title="Biometric"
        onPress={() => navigation.navigate('Biometric')}
        style={styles.button}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16, 
  },
  button: {
    marginTop: 30, 
  },
});
