import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';

const Animacion1 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            //primero se manda el objeto que va a animar
            //segunto objeto para definir valores de animacion 
            animacion, {
            toValue: 1,//valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: true // Add This line
        }
        ).start();//inicia animacion

    }, [])


    return (
        <Animated.View
            style={{ opacity: animacion }}
        >

            <Text style={styles.text}>Animacion 1</Text>
        </Animated.View>

    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default Animacion1;
