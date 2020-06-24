import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native';
import firebase from '../utils/firebase';
import { validateEmail } from '../utils/validations';

export default function RegisterForm(props) {
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue());
    const [formError, setFormError] = useState({});

    const register = () => {
        let errors = {};
        if (!formData.email || !formData.password || !formData.repeatPassword) {
            if (!formData.email) errors.email = true;
            if (!formData.password) errors.password = true;
            if (!formData.repeatPassword) errors.repeatPassword = true;
            console.log('email -> ', formData.email);
        } if (!validateEmail(formData.email)) {
            console.log('validateEmail -> ', validateEmail());
            errors.email = true;
        }
        else if (formData.password != formData.repeatPassword) {
            errors.password = true;
            errors.repeatPassword = true;
        } else if (formData.password.length < 6) {
            errors.password = true;
            errors.repeatPassword = true;
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(formData.email, formData.password)
                .then(() => {
                    console.log('cuenta creada firebase')
                }).catch(() => {
                    setFormError({
                        email: true,
                        password: true,
                        repeatPassword: true
                    })
                });
            console.log('formulario correcto');
        }
        setFormError(errors);
        console.log('ERRORS-> ', errors);
    }

    return (
        <>
            <TextInput
                style={[styles.input, formError.email && styles.error]}
                placeholder='Correo electrónico'
                placeholderTextColor='#969696'
                onChange={(e) => setFormData({ ...formData, email: e.nativeEvent.text })}
            />
            <TextInput
                placeholder='Contraseña'
                placeholderTextColor='#969696'
                style={[styles.input, formError.password && styles.error]}
                secureTextEntry={true}
                onChange={(e) => setFormData({ ...formData, password: e.nativeEvent.text })}
            />
            <TextInput
                placeholder='Repetir contraseña'
                placeholderTextColor='#969696'
                style={[styles.input, formError.repeatPassword && styles.error]}
                secureTextEntry={true}
                onChange={(e) => setFormData({ ...formData, repeatPassword: e.nativeEvent.text })}
            />

            <TouchableOpacity onPress={register}>
                <Text style={styles.button}>Registrate</Text>
            </TouchableOpacity>
            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm}>
                    <Text style={styles.button}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}

function defaultValue() {
    return {
        email: "",
        password: "",
        repeatPassword: ""
    };
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
    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    error: {
        borderColor: '#940c0c'
    }
});
