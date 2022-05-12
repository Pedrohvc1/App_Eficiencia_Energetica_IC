import React from 'react';
import {StyleSheet, Text, View, 
    TextInput, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Cad_usuario() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
     
     
      <View style={styles.containerTitle}>
      <Text style={styles.title}>EFICIÊNCIA ENERGÉTICA</Text>
       
      </View>

      <View
        style={styles.containerForm}>
            
            <Text style={styles.title2}>CRIAR CONTA</Text>  

            <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            onChangeText={()=>{}}
            />

            <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            onChangeText={()=>{}}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=>{}}
            />
            <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            autoCorrect={false}
            onChangeText={()=>{}}
            />
                
                <Text style={styles.x}>Ao criar uma conta, você concorda com os 
                  Termos de Uso e Privacidade do aplicativo</Text>  
            <TouchableOpacity 
            style ={styles.btnContinue}>
            <Text style ={styles.continueText}>CONTINUE</Text>
            </TouchableOpacity>

            
        </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',        
    width: '90%',        
  },
    title:{       
      fontSize: 20,
      fontWeight:'bold',
      marginTop: 28,
      marginBottom: 12,
      color:'#004c94',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title2:{
      fontSize: 20,
      marginTop: 28,
      marginBottom: 12,
      color:'#004c94',
      justifyContent: 'center',
      alignItems: 'center'
    },
    containerForm:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',        
      width: '90%',
  },
  input:{
      backgroundColor: '#ffff',
      borderWidth: 2,
      borderColor: '#004c94',
      width: '30%',
      marginBottom:15,
      color: '#004c94', //azul
      fontSize: 17,     
      padding: 10,
      alignItems: 'center',
      justifyContent:'center'       
    },
    btnContinue:{
      backgroundColor: '#004c94',
      borderRadius: 50,
      paddingVertical: 8,
      width: '30%',
      alignSelf: 'short',
      bottom: 'null',
      alignItems: 'center',
      justifyContent:'center',        
      height: 50,

    },
    continueText:{
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold'
    },
    x:{
      fontSize: 14,
      color: '#004c94',
  },
         
})