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
    Alert,

  
  } from 'react-native';
  import DatePicker from '@dietime/react-native-date-picker';

  const Formulario = ({modalVisible, setModalVisible, pacientes, setPacientes}) => {
  
    

  // const [pacienteNombre, setPacienteNombre] = useState('')
  // const {pacientePropietario, setPacientePropietario} = useState('')
  // const {pacienteEmail, setPacienteEmail} = useState('')
  // const {pacienteTelefono, setPacienteTelefono} = useState('')
  // const {pacienteSintoma, setPacienteSintoma} = useState('')
  // const [date, setDate] = useState(new Date());

  const [pacienteNombre, setPacienteNombre] = useState('')
  const [pacientePropietario, setPacientePropietario] = useState('')
  const [pacienteEmail, setPacienteEmail] = useState('')
  const [pacienteTelefono, setPacienteTelefono] = useState('')
  const [pacienteSintoma, setPacienteSintoma] = useState('')
  const [date, setDate] = useState(new Date());

  const handleCita=()=>{
    // validar 
    if ([pacienteNombre, pacienteEmail, pacientePropietario, pacientePropietario, pacienteSintoma, date].includes('')){
      
      Alert.alert(
        'Error',
        'llena todos los campos',
        // [{text:'Cancelar', style:'cancel'}, {text:'Ok'}]
        
      )
      return
    }
    // objeto para enviar los datos 
    const nuevoPaciente = {
      pacientePropietario,
      pacienteEmail,
      pacienteNombre,
      pacienteSintoma,
      date,
      pacienteTelefono
    }
    // enviamos un arreglo de los datos que se enviaron de nuestro formulario
    setPacientes([...pacientes, nuevoPaciente])
    setModalVisible=(!modalVisible)


    // vaceamos los campos
    setPacienteEmail('')
    setPacienteNombre('')
    setPacienteTelefono('')
    setPacientePropietario('')
    setPacienteSintoma('')
    setDate(new Date())


  }

    return(
        <Modal animationType='slider' visible={modalVisible}>
        <SafeAreaView style ={styles.contenido}>
          
       {/* <TouchableOpacity style={styles.btnSalir} 
       onPress={() => setModalVisible(false)}>
        <Text style={styles.textSalir}>Salir</Text>
        </TouchableOpacity> */}
        <Pressable style={styles.btnSalir} 
          onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.textSalir}>Salir</Text>
        </Pressable>

          <ScrollView>
          <Text style={styles.titulo}
           >Nueva{''}
          <Text style={styles.titulo2} >
            Cita</Text>
          </Text>

          <View style={styles.campo}>
            <Text style={styles.label}> Nombre Paciente</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre Paciente'
              keyboardType=''
              placeholderTextColor={'#666'}
              value={pacienteNombre}
              onChangeText={setPacienteNombre}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre del Propietario</Text>
            <TextInput 
            style={styles.input}
            placeholder='Nombre del Propietario'
              keyboardType=''
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
              keyboardType='email-address'
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
              keyboardType='number-pad'
              placeholderTextColor={'#666'}
              value={pacienteTelefono}
              onChangeText={setPacienteTelefono}
              // Limitar a 10 caracteres
              
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput 
            style={[styles.input,styles.sintomasInput]}
              placeholder='Sintomas'
              keyboardType=''
              placeholderTextColor={'#666'}
              multiline={true}
              numberOfLines={4}
              value={pacienteSintoma}
              onChangeText={setPacienteSintoma}
            />
          </View>

          
          <View style={styles.campo}>
          <Text 
          style={styles.label}
          >Fecha</Text>
            
            <DatePicker  
                style={styles.fecha}
                value={date}
                onChange={(value) => setDate(value)}
                format="mm-dd-yyyy"
            />
          </View>
          
          <Pressable style={styles.btnNuevaCita}
          onPress={handleCita}> 
             <Text style={styles.btnNuevaCitaTexto}
             >Agregar</Text>
          </Pressable>

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
    borderRadius:17,
    marginTop:20,
    marginLeft:20,
    marginRight:300,
    marginBottom:5,
    padding:'auto',
    
  },
  fecha: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#e4edec',
    borderRadius: 5,
    padding: 5,
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

export default Formulario