import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './Signup.styles'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'

const Signup= ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [triggerSignup, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
     console.log(email, password, confirmPass)
     triggerSignup({
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
        <Text style={styles.signUpToStart}>
            Signup to start
        </Text>
        <TextInput style={styles.inputEmail} value={email} onChangeText={setEmail}/>
        <TextInput style={styles.inputEmail} value={password} onChangeText={setPassword}/>
        <TextInput style={styles.inputEmail} value={confirmPass} onChangeText={setConfirmPass}/>
        <Pressable style={styles.loginButton} onPress={onSubmit}>
            <Text style={styles.signButtons}>Sign up</Text>
        </Pressable>
        <Text style={styles.alreadyHaveAnAccount}>Already have an account?</Text>
        <Pressable 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signButtons}>Login</Text>
        </Pressable>
     </View>
    </View>
  )
}

export default Signup