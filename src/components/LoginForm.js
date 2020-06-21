import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function LoginForm(props) {
    const { changeForm } = props;
    return (
        <View>
            <Text>LoginForm</Text>
            <TouchableOpacity>
                <Text onPress={changeForm} style={styles.button}>Registrate</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    button: {
        color: '#fff',
        fontSize: 20,

    }
})
