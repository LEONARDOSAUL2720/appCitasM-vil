import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Modal, 
    Pressable,
    TextInput,
    ScrollView,
    
  
  } from 'react-native';

 const Formulario = ({modalVisible}) => {
    
    return(
        <Modal animationType='slider' visible={modalVisible}>
        <SafeAreaView style ={styles.contenido}>
          <ScrollView>
          <Text style={styles.titulo}
           >Nueva{''}
          <Text style={styles.titulo2} >
            Cita</Text>
          </Text>

          <View style={styles.campo}>
            <Text style={styles.label}> Nombre Pacientes</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre Paciente'
              KeyboardType='number-pad'
              placeholderTextColor={'#000'}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre del Propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre Paciente'
              KeyboardType='number-pad'
              placeholderTextColor={'#666'}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email del Propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre Paciente'
              KeyboardType='email-pad'
              placeholderTextColor={'#666'}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono del Propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre Paciente'
              KeyboardType='number-pad'
              placeholderTextColor={'#666'}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput 
            style={[styles.input,styles.sintomasInput]}
              placeholder='Sintomas'
              KeyboardType=''
              placeholderTextColor={'#000'}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          </ScrollView>
        </SafeAreaView>
        
        </Modal>
        )
}
const styles =StyleSheet.create({
  
  
  contenido:{
    backgroundColor:'#243f4f',
    flex:1
  },
  titulo:{
    fontSize:30,
    fontWeight:'600',
    textAlign:'center',
    marginTop:30,
    color:'ffff',

  },
  titulo2:{
    fontWeight:'900',

  },
  label:{
    color:'#ffff',
    marginBottom:10,
    marginTop:15,
    fontSize:30,
    fontWeight:'600',
  },
  input:{
    backgroundColor:'#e1ae6b',
    padding:15,
    borderRadius:15,
    color:'fffff'
  },
  sintomasInput:{
   height:100,
   marginBottom:20,
   
  },
  campo:{
    marginTop:40,
    marginHorizontal:20,
    color:'e4edec',

  }
})

export default Formulario