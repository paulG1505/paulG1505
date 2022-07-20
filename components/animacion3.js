import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Animated
} from 'react-native';

const Animacion3 = () => {

    const [animacion] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            //primero se manda el objeto que va a animar
            //segunto objeto para definir valores de animacion 
            animacion, {
            toValue: 40,//valor al que llega
            duration: 500, //cantidad de tiempo en llegar
            useNativeDriver: false // Add This line
        }
        ).start();//inicia animacion

    }, [])


    return (
        <View>
            <Animated.Text style={[styles.text,{fontSize:animacion}]}>Animacion 3</Animated.Text>
        </View>

    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default Animacion3;
