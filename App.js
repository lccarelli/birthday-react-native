import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Button } from 'react-native';
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
      <StatusBar style={styles.barStyle} barStyle='light-content' />
      <SafeAreaView style={styles.background}>
        {user ? <Logout /> : <Auth />}
      </SafeAreaView>
    </>
  )
}
function Logout() {

  const logout = () => {
    firebase
      .auth()
      .signOut();
  }
  return (
    <View>
      <Text>Estas logueado</Text>
      <Button title='Cerrar sesión' onPress={logout} />
    </View>
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