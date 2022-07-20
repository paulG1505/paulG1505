import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';

const Animacion4 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            //primero se manda el objeto que va a animar
            //segunto objeto para definir valores de animacion 
            animacion, {
            toValue: 360,//valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: false // Add This line
        }
        ).start();//inicia animacion

    }, [])

    //interpolacion
    const interpolacion = animacion.interpolate({
        inputRanges: [0, 360],
        outputRanges: [0, 360]
    });

    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }



    return (
        <View>
            <Animated.View style={[styles.text, estiloAnimacion]}></Animated.View>
        </View>

    );
};

const styles = StyleSheet.create({
    text: {
        with: 100,
        height: 100,
        backgroundColor: 'blue'
    }
});

export default Animacion4;
