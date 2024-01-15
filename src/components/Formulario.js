import React,  { useState } from 'react'

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

  
  } from 'react-native';

  const Formulario = ({modalVisible, setModalVisible}) => {
    
  const {pacienteNombre, setPacienteNombre} = useState('')
  const {pacientePropietario, setPacientePropietario} = useState('')
  const {pacienteEmail, setPacienteEmail} = useState('')
  const {pacienteTelefono, setPacienteTelefono} = useState('')
  const {pacienteSintoma, setPacienteSintoma} = useState('')
  


    return(
        <Modal animationType='slider' visible={modalVisible}>
        <SafeAreaView style ={styles.contenido}>
          
       <TouchableOpacity style={styles.btnSalir} 
       onPress={() => setModalVisible(false)}>
        <Text style={styles.textSalir}>Salir</Text>
        </TouchableOpacity>

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
              value={pacienteNombre}
              onChangeText={setPacienteNombre}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre del Propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre del Propietario'
              KeyboardType='number-pad'
              placeholderTextColor={'#666'}
              value={pacientePropietario}
              onChangeText={setPacientePropietario}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email del Propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder='Email del Propietario'
              KeyboardType='email-pad'
              placeholderTextColor={'#666'}
              value={pacienteEmail}
              onChangeText={setPacienteEmail}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono del Propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder='Telefono del Propietario'
              KeyboardType='number-pad'
              placeholderTextColor={'#666'}
              value={pacienteTelefono}
              onChangeText={setPacienteTelefono}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput 
            style={[styles.input,styles.sintomasInput]}
              placeholder='Sintomas'
              KeyboardType=''
              placeholderTextColor={'#666'}
              multiline={true}
              numberOfLines={4}
              value={pacienteSintoma}
              onChangeText={setPacienteSintoma}
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
    borderRadius:15,
    color:'fffff'
  },
  sintomasInput:{
   height:100,
   marginBottom:20,

  },
  campo:{
    marginTop:10,
    marginHorizontal:20,
    color:'e4edec',

  },
  textSalir:{
    textAlign:'center',
    fontSize:30,
    color:'#00cc94',
    backgroundColor:'#122b43',
    borderRadius:17,
    marginTop:20,
    marginLeft:20,
    marginRight:300,
    marginBottom:5,
    padding:'auto',
    
  }
})

export default Formulario