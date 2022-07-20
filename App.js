import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
//import Animacion1 from './components/animacion1';
//import Animacion2 from './components/animacion2';
//import Animacion3 from './components/animacion3';
import Animacion7 from './components/animacion7';

const App = () => {

  return (
    <View style={styles.container}>
      <Animacion7/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:100,
  }
});

export default App;
