import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';

const Animacion2 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animacion, {
            toValue: 450,//valor al que llega
            duration: 2000, //cantidad de tiempo en llegar
            useNativeDriver: false // Add This line
        }
        ).start();//inicia animacion

    }, [])


    return (
        <Animated.View
            style={[styles.caja, { height: animacion, width:animacion }]}
        >


        </Animated.View>

    );
};

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
});

export default Animacion2;
