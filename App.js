import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, StatusBar } from 'react-native';
import 'firebase/auth';
import firebase from './src/utils/firebase';
import Auth from './src/components/Auth';

export default function App() {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <>
      <StatusBar style={styles.barStyle} />
      <SafeAreaView style={styles.background}>
        {user ? <Text>Estas logueado</Text> : <Auth />}
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  barStyle: {
    color: '#ff00'
  },
  background: {
    backgroundColor: '#15212b',
    height: '100%'
  }
})