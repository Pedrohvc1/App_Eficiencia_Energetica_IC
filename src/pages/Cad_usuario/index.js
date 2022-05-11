import React from 'react';
import {StyleSheet, Text, View, 
    TextInput, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Cad_usuario() {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container2}>
     
     
      <View style={styles.containerTitle2}>
      <Text style={styles.title2}>EFICIÊNCIA ENERGÉTICA</Text>
       
      </View>

      <View
        style={styles.containerForm}>
            
            <Text>CRIAR CONTA</Text>  

            <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            // onChangeText={()=>{}}
            />

            <TextInput
            style={styles.input}
            placeholder="Email"
            autoCorrect={false}
            // onChangeText={()=>{}}
            />
            <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            // onChangeText={()=>{}}
            />
            <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            autoCorrect={false}
            // onChangeText={()=>{}}
            />
                
                <Text>Ao criar uma conta, você concorda com os 
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
    backgroundColor: '#ffff'        
  }
})