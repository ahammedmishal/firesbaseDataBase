import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signup = () =>{
  if(email != '' && password != ''){
    auth().createUserWithEmailAndPassword(email, password).then((res)=>{
        console.log('response',res);
        Alert.alert('user created successfully');
    })
    .catch((error) => {
        console.log('error',error);
        Alert.alert(error.message);
    })   
  }else{
      Alert.alert('Both fields are mandatory');
      Alert.alert(error.message);
  }

}

const Login = () =>{
    
    auth().signInWithEmailAndPassword(email,password).then((res)=>{
        console.log('response',res);
        navigation.navigate('Home');
    }).
    catch((error) =>{
        console.log('error',error);
        Alert.alert('user not found');
    })
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        placeholder='Email'
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder='Password'
      />
      <View style={styles.button}>
        <Button style={styles.button} title='Signup' onPress={signup}/>
        <Button title='Login' onPress={Login}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize:20,
    marginBottom:15
  },
  input: {
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    marginVertical: 10,
    padding: 15,
    borderColor: '#2296f3'
  },
  button: {
      width: 150,
      marginTop: 30,
      flexDirection: 'row',
      justifyContent:'space-around'
  }
});

export default Login;