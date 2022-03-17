import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import auth from '@react-native-firebase/auth'

const Home = ({navigation}) => {
  const signout = async () =>{
    try {
      await auth().signOut();
      navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
     
        <Button style={styles.button} title='Add Item' onPress={()=> navigation.navigate('Additems')}/>
        <Button title='List of Items' onPress={()=> navigation.navigate('List')}/>
        <Button title='SignOut' onPress={signout}/>
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;