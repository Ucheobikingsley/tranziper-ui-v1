import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
export default function Home() {
  useEffect(() => {
    console.log('log', process.env.TOKEN_KEY);
    const checkIfUserIsAuthenticated = async () => {
      const token = await SecureStore.getItemAsync('my_jwt');

      if (!token) {
        return router.replace('/first_time_login/introduction');
      }
    };
    checkIfUserIsAuthenticated();
  }, []);
  return <Text>Text</Text>;
}
