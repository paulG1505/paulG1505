import { Animated, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'

const Animacion7 = () => {
    const [animacion1] = useState(new Animated.Value(0));
    const [animacion2] = useState(new Animated.Value(1));

    useEffect(() => {
      Animated.sequence([
        Animated.timing(animacion1,{
            toValue:300,
            duration:1000,
            useNativeDriver: true
        }),
        Animated.spring(animacion2,{
            toValue:10,
            useNativeDriver: true
        })
        ,
        Animated.spring(animacion2,{
            toValue:1,
            useNativeDriver: true
        }),
        Animated.timing(animacion1,{
            toValue:600,
            duration:1000,
            useNativeDriver: true
        }),
      ]).start();
    
    }, [])
    

    const estiloAnimacion = {
        transform:[
            { translateY:animacion1},
            { scale:animacion2},
        ]

    }
  return (
    <View>
      <Animated.View style={[styles.caja,estiloAnimacion]}>

      </Animated.View>
    </View>
  )
}

export default Animacion7

const styles = StyleSheet.create({
    caja: {
        width:100,
        height:100,
        backgroundColor:'cornflowerblue'
    }
})