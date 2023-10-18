import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './login.styles'
import { useLoginMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Login = ({navigation}) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [triggerLogin, result] = useLoginMutation()
const dispatch = useDispatch()

const onSubmit = () => {
  console.log(email, password)
  triggerLogin({
    email,
    password,
  })
  console.log(result)
  if(result.isSuccess) {
    dispatch(setUser(result))
  }
}

  
  return (
    <View style={styles.container}>
     <View style={styles.loginContainer}>
        <Text style={styles.loginToStart}>
            Login to start
        </Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          onChangeText={setEmail}
          />
        <TextInput
          style={styles.inputEmail}
          value={password}
          onChangeText={setPassword}
           />
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.signButtons}>Login</Text>
        </Pressable>
        <Text style={styles.noHaveAnAccount}>No have an account?</Text>
        <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signButtons}>Sign up</Text>
        </Pressable>
     </View>
    </View>
  )
}

export default Login