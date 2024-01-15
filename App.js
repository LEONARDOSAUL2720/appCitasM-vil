import React,{useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal, 
  Pressable,

 } from 'react-native';
 import Formulario from './src/components/Formulario';
 

// export default function App() {
  const App =()=>{
   
   // LOS HOKS SE COLOCAN EN LA PARTE SUPERIOR
  const [modalVisible, setModalVisible] = useState(false) // el primer parametro es el nombre y el segundo es el nombre pero que cambia el estado de hook
   
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
       onPress={ () => setModalVisible(true)} >
         <Text style={styles.btnTextoNuevaCita}
         > Nueva Cita</Text>
       </Pressable>
 
       {/* <Modal animationType='fade' visible={modalVisible}>
         <Text >Desde Modal</Text>
       </Modal> */}

       <Formulario
       modalVisible={modalVisible}
       setModalVisible={setModalVisible}
        >

       </Formulario>


    </SafeAreaView>
  );
   
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#122b43', 
    flex:1,
    textAlign:'center',


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
  
});

export default App;
