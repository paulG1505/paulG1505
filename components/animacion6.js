import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animacion6 = () => {

    const [animacion] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(-50))

    useEffect(() => {
        //sequence hace que se ejecute en cadena 
        Animated.sequence([
            Animated.timing(animacion2, {
                toValue: -20,
                duration: 20000,
                useNativeDriver: true
            }),
            Animated.timing(animacion, {
                toValue: 60,
                duration: 10000,
                useNativeDriver: true
            }),
            Animated.timing(animacion, {
                toValue: 1000,
                duration: 10000,
                useNativeDriver: true
            })

        ]).start();
    }, [])

    const estiloAnimacion = {
        transform: [
            { translateY: animacion2 },
            { translateX: animacion }
        ]
    }


    return (
        <View styles={{ alignItems: 'center' }}>
            <Animated.View style={[styles.caja, estiloAnimacion]}>
            </Animated.View>
        </View>
    )
}

export default Animacion6

const styles = StyleSheet.create({
    caja: {
        width: 10,
        padding: 10,
        height: 10,
        backgroundColor: 'cornflowerblue',

    }

})