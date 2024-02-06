import React,{useState} from 'react';
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

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
 

// export default function App() {
  const App =()=>{
   
   // LOS HOKS SE COLOCAN EN LA PARTE SUPERIOR
  const [modalVisible, setModalVisible] = useState(false) // el primer parametro es el nombre y el segundo es el nombre pero que cambia el estado de hook
  const [pacientes, setPacientes]= useState([]) 
  const [paciente, setPaciente]= useState({}) 
  const [modoEdicion, setModoEdicion] = useState(false);

 

  const pacienteEditar = id =>{
   
    const pacienteEditar= pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
    setModoEdicion(true);
    
   
  }

  const pacienteEliminar = id =>{
    Alert.alert(
      '¿deseas eliminar este paciente?', 'un paciente eliminado no se puede recuperar', [
        {
          // Botones
          text: 'Cancelar'
        }, 
        {
          text: 'si, eliminar', onPress: () =>{
              const pacientesActualizados = pacientes.filter(
                pacientesState => pacientesState.id !== id
              )
              setPacientes(pacientesActualizados)
          }
        }
      ] 
    )
  }

  const abrirNuevoModal = () => {
    setModalVisible(true);
    setPaciente({}); // Reiniciar el estado del paciente al abrir nuevo modal
    setModoEdicion(false); // Cambiar al modo de creación
  };



   return (
     // <View style={styles.container}>
     //   <Text>Bienvenido Leonardo</Text>
     //   <StatusBar style="auto" />
     // </View>
     
     <SafeAreaView style={styles.container}>
 
 
       <Text style={styles.titulo}>Administrador de citas {''}
       <Text style={styles.tituloBold}>Consultas</Text>
       </Text>
 
       <Pressable style={styles.btnNuevaCita}
       onPress={ abrirNuevoModal} >
         <Text style={styles.btnTextoNuevaCita}
         > Nueva Cita</Text>
       </Pressable>



      {/* valida si hay pacientes enviadso desde el formulario */}
       {pacientes.length === 0 ? <Text style={styles.noPacientes}>No hay pacientes aún</Text>
       :<FlatList
          style={styles.listado}
          data={pacientes} //los datps que va bsucar
          keyExtractor={(item) => item.id} //  el avlor que va a buscar
          renderItem={({item})=> {
            console.log(item) // Ddatos enviados del formulario
            return (
              <Paciente
              item={item}
              setModalVisible={setModalVisible}
              pacienteEditar={pacienteEditar}
              pacienteEliminar={pacienteEliminar}
              pacientes={pacientes}
              paciente={paciente}
              />
              
            )
          }}
          extraData={pacientes}
       />}




       <Formulario
      //  enviar objetos a la vista de formulario
       modalVisible={modalVisible}
       setModalVisible={setModalVisible}
       pacientes={pacientes}
       paciente={paciente}
       setPacientes={setPacientes}
       modoEdicion={modoEdicion}
       >

       /</Formulario>

    </SafeAreaView>
  );
   
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#122b43', 
    flex:1,
    textAlign:'center',


  },

  listado:{
  marginTop:50, 
  marginHorizontal:30, 
  
  },
  titulo:{
    textAlign: 'center',
    color:'#01bb88',
    fontSize:30,
    fontWeight:'600',
    marginTop: 100,

   
  },
  tituloBold:{
    fontWeight:'900',
    color:'#006e50',
  },
  btnNuevaCita:{
    backgroundColor:'#006e50',
    padding:20,
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10,
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#f5828d',
    fontSize:18,
    fontWeight:'900',
    textTransform:'uppercase',
  },
  noPacientes:{
    marginTop:50,
    textAlign:'center',
    fontSize:30,
    fontWeight:'700',
    color:'#e1ae6b'

  },
  siPacientes:{
    marginTop:10,
    textAlign:'center',
    fontSize:30,
    fontWeight:'700',
    color:'#e1ae6b'
  },
  
});


export default App;
