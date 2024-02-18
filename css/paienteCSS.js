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



const styles= StyleSheet.create({
    contenedor:{
        backgroundColor:'#ffff',
        padding: 10,

    },
    label:{ 
        color:'#ef9c5b',
        textTransform:'uppercase',
        fontWeight:'700',
        marginBottom:10,
        textAlign:'center',
        

    },
    texto:{
        color:'#ef9c5b',
        fontSize:50,
        fontWeight:'700',
        marginBottom:5,
        marginTop:5,

    },
    fecha:{
        color:'#374151',
        fontSize:20

    },

    contenedorBotones:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20
    },
    btn:{
        paddingVertical:10,
        paddingHorizontal:5,
        borderRadius:5,

    },
    btnEditar:{
        backgroundColor:'#006e50',
        margin:10
    },
    btnEliminar:{
        backgroundColor:'#006e50',
        margin:10

    },
    btnTexto:{
        textTransform:'uppercase',
        fontWeight:'800',
        fontSize:15,
        color:'#f5828d',
        textAlign:'center'

    },

})

export default styles;