import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import LottieView from 'lottie-react-native';
import { Button, Input } from '@rneui/base';

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container} >
        <LottieView source={require('../assets/login.json')} style={styles.lottie} resizeMode='contain' autoPlay />
        <Text style={styles.text} >Login</Text>
        <Input 
          placeholder='Enter Your Email'
          value= {email}
          label= 'Email'
          leftIcon= {{type:'material',name: 'email'}} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    backgroundColor: '#000080',
    alignItems: 'center'
  },

  lottie:{
    height:100,
    width:50
  },

  text:{
    fontSize:40,
    color: 'white',
    fontWeight: 'bold'
  }
})
