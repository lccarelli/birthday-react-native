import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { validateEmail } from '../utils/validations';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());

    const login = () => {
        console.log('iniciando sesion...');
    };

    const onChange = (e, type) => {
        // console.log('data: ', e.nativeEvent.text);
        // console.log('type: ', type);
        // console.log(defaultValue());
        setFormData({ ...formData, [type]: e.nativeEvent.text })
        console.log("formData", formData);
    };

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder='Correo electrónico'
                placeholderTextColor='#969696'
                onChange={(e) => onChange(e, 'email')}
            />
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                placeholderTextColor='#969696'
                secureTextEntry={true}
                onChange={(e) => onChange(e, 'password')}
            />
            <TouchableOpacity onPress={login}>
                <Text style={styles.button}>Iniciar sesión</Text>
            </TouchableOpacity>
            <View style={styles.register}>
                <TouchableOpacity>
                    <Text onPress={changeForm} style={styles.button}>Registrate</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

function defaultValue() {
    return {
        email: '',
        password: ''
    }
}



const styles = StyleSheet.create({
    input: {
        height: 50,
        color: '#fff',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        width: '80%',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040'
    },
    button: {
        color: '#fff',
        fontSize: 20,
    },
    register: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    }
})
