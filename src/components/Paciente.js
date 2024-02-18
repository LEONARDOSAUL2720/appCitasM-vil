    import React, { useEffect } from 'react'
    import {Text,
            View,
            StyleSheet,
            Pressable

    } from 'react-native'
    
    const Paciente = ({item, setModalVisible, pacienteEditar, pacienteEliminar, setModalPaciente, setPaciente}) => {

        const{pacienteNombre, fecha, id}=item

        const formatearFecha = fecha =>{
            const nuevaFecha = new Date(fecha)
            const opciones={
                weekday:'long',
                year:'numeric',
                month:'long',
                day:'numeric'

            }
            return nuevaFecha.toLocaleDateString('es-ES', opciones)
        }
    return (

        <Pressable
            onLongPress = { ()=> {setModalPaciente(true) 
            setPaciente(item)}
        }
        
        >
        <View style= {styles.contenedor}>
            
            <Text style= {styles.label}>Paciente</Text>

            <Text style= {styles.texto}>
                {pacienteNombre}
            </Text>

            <Text style= {styles.fecha}>{formatearFecha(fecha)}</Text>

                <View styles={styles.contenedorBotones }>
                <Pressable style={[styles.btn, styles.btnEditar]}
                    onPress={() => { 
                        
                        setModalVisible(true)
                        pacienteEditar(id)
                        
                        }}
                        >
                        <Text style={styles.btnTexto}>EDITAR</Text>
                </Pressable>

                <Pressable style={[styles.btn, styles.btnEliminar]}
                    onLongPress={() =>pacienteEliminar(id) }
                    >
                        <Text style={styles.btnTexto}>ELIMINAR</Text>
                </Pressable>
                </View>


        </View>
        </Pressable>

        
        
        
    )

    }

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

    export default Paciente