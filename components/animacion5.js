import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

const Animacion5 = () => {

    const [animacion] = useState(new Animated.Value(1))

    const presionarBoton = () => {
        Animated.spring(animacion, {
            toValue: .7,
            useNativeDriver: true // Add This line
        }).start();
    }
    const soltarBoton = () => {
        Animated.spring(animacion, {
            toValue: 1,
            friction:2, //hace el rebote, mas bajo mayor rebote
            tension:10, //tension mientras mayor de nota rapdido 
            useNativeDriver: true // Add This line
        }).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacion }]
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPressIn={() => presionarBoton()}
                onPressOut={() => soltarBoton()}
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>

                    <Text style={styles.text}>Iniciar Sesión </Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Animacion5

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    }
})