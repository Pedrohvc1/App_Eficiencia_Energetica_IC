import React from 'react';
import {StyleSheet, Text, View, 
    TextInput, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
        
        <View style={styles.containerLogo}>
            <Image style={styles.image}
                source={require('../../assets/logo.png')}
                resizeMode = "contain"
              />         
            <Text style={styles.title}>EFICIÊNCIA ENERGÉTICA</Text>
        </View>

        <Animatable.View delay={600} animation="fadeInUp" 
        style={styles.containerForm}>
            
            
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
                
            <TouchableOpacity 
            style = {styles.btnCadastro}
            onPress = {() => navigation.navigate('Cad_usuario') }>
            <Text style ={styles.cadastroText}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style ={styles.btnContinue}>
            <Text style ={styles.continueText}>CONTINUE</Text>
            </TouchableOpacity>

            
        </Animatable.View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },

    containerLogo:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'    
    },

    title:{       
        fontSize: 24,
        fontWeight:'bold',
        marginTop: 28,
        marginBottom: 12,
        color:'f7941d', //laranja
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
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent:'center'       
      },

      btnCadastro:{
        fontSize: 12,
        fontWeight:'bold',
        marginTop: 6,
        marginBottom: 12,   
        height: 100,
        color: 'grey'
      },
      cadastroText:{
        color: '##a0a0a0',    
      },
    
      btnContinue:{
        position: 'absolute',
        backgroundColor: '#004c94',
        borderRadius: 50,
        paddingVertical: 8,
        width: '30%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent:'center',        
        height: 50,

      },
      continueText:{
          fontSize: 12,
          color: '#fff',
          fontWeight: 'bold'
      },
      image: {
        width: 350,
        height: 350,
        width: '100%',
        alignItems: 'center',
        justifyContent:'center'
      }
})


