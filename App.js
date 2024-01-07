import React,{useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView
 } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Bienvenido Leonardo</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas {''}
      <Text style={styles.tituloBold}>Consultas</Text>
      
      </Text>
</SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray', 
    flex:1
  },
  titulo:{
    textAlign: 'center',
    color:'black',
    fontSize:30,
    fontWeight:'600'
   
  },
  tituloBold:{
    fontWeight:'900',
    color:'#6D28D9',
  }
  
});
