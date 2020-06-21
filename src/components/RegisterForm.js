import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function RegisterForm(props) {
    const { changeForm } = props;
    return (
        <View>
            <Text>RegisterForm</Text>
            <TouchableOpacity>
                <Text onPress={changeForm} style={styles.button}>Iniciar Sesión</Text>
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
