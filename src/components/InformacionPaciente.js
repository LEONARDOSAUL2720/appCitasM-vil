import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Modal, 
    Pressable,
    FlatList,
    Alert,
    
  
   } from 'react-native';

export const InformacionPaciente = ({paciente, setModalPacinte}) => {
  return (

    <SafeAreaView
    style={styles.contenedor}
    >
      <View>
        <Pressable
          onLongPress={() => setModalPacinte(!setModalPacinte)}
           
        >
            <Text style={styles.textSalir}>cerrar</Text>
        </Pressable>
      </View>
    <Text style={styles.titulo}>
      Información <Text style={styles.titulo2}>PACIENTE</Text>
    </Text>
    <Text style={styles.info} >
    {paciente.paciente}
    
    
    </Text>
    </SafeAreaView>
  )
}




const styles= StyleSheet.create ({
  
  contenedor: {
    textAlign:'center',
    fontSize:30,
    color:'#00cc94',
    backgroundColor:'#122b43',
    borderRadius:10,
    
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
  info: {
    backgroundColor:'#122b43',
    color:'#006e50',
    fontSize:30,

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



})



export default InformacionPaciente