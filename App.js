import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SignInForm from './src/components/SignInForm'
import SignUpForm from './src/components/SignUpForm'

export default function App() {

  useEffect(() => {
    // add firebase config
  },[])

  return (
    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
