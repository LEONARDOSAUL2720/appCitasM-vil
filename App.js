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
       modalVisible={modalVisible} >

       </Formulario>


</SafeAreaView>
  );
   
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'gray', 
    flex:1,
    marginTop:70,
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
  },
  btnNuevaCita:{
    backgroundColor:'#6d28d9',
    padding:20,
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10,
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#fff',
    fontSize:18,
    fontWeight:'900',
    textTransform:'uppercase',
  },
  
});

export default App


{/* <header>
  nombreProp={Datos o funciones}
</header> */}
