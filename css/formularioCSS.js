import React from "react";
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal, 
  Pressable,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,


} from 'react-native';

const styles =StyleSheet.create({
  
    contenido:{
      backgroundColor:'#243f4f',
      flex:1,
  
    },
    titulo:{
      fontSize:30,
      fontWeight:'600',
      textAlign:'center',
      marginTop:30,
      color:'#ffff',
  
    },
    titulo2:{
      fontWeight:'900',
      color:'#00cc94'
  
    },
    label:{
      color:'#f5f5f5',
      marginBottom:10,
      marginTop:15,
      fontSize:30,
      fontWeight:'600',
  
    },
    input:{
      backgroundColor:'#e1ae6b',
      padding:15,
      borderRadius:10,
      color:'#fffff',
      marginBottom:20
    },
    sintomasInput:{
     height:100,
     marginBottom:20,
  
    },
    campo:{
      marginTop:10,
      marginHorizontal:20,
      color:'#e4edec',
  
    },
    textSalir:{
      textAlign:'center',
      fontSize:30,
      color:'#00cc94',
      backgroundColor:'#122b43',
      borderRadius:10,
      marginTop:20,
      marginLeft:20,
      marginRight:300,
      marginBottom:5,
      padding:'auto',
      
    },
    fecha: {
      width: '90%',
      height: 100,
      borderWidth: 1,
      color: '#e4edec',
      borderRadius: 10,
      padding: 10,
      backgroundColor: '#eeaa8f',
    },
    btnNuevaCita:{
      marginVertical:50,
      backgroundColor:'#122b43',
      paddingVertical:15,
      marginHorizontal:30,
      borderRadius:10,
  
    },
    btnNuevaCitaTexto:{
      textAlign:'center',
      fontSize:20,
      color:'#00cc94',
      textTransform:'uppercase',
      fontWeight:'900',
    },
  
  })
  
  export default styles;
  
  