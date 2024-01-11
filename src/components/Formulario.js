import React from 'react'
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Modal, 
    Pressable,
  
   } from 'react-native';

 const Formulario =(props) => {
    console.log(props)
    return(
        <Modal animationType='fade' visible={props.modalVisible}>
        <Text >Desde Modal</Text>
        </Modal>
        )
}

export default Formulario