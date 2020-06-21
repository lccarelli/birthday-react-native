import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import 'firebase/auth';
import firebase from './src/utils/firebase';

export default function App() {

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <View>
      <SafeAreaView>
        {user ? <Text>Estas logueado</Text> : <Text>No estas logueado</Text>}
      </SafeAreaView>
    </View>
  )
}