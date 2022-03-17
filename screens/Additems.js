import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert } from 'react-native';
import database from '@react-native-firebase/database'

let additem = item =>{
    database().ref('/Items').push({
        name: item
    })
}

const Additems = () => {

  const [name ,setName] = useState('');

  const handlesubmit = () =>{
        additem(name);
        setName('');
        Alert.alert('Items Saved Successfully')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add items</Text>
      <TextInput value={name} onChangeText={text => setName(text)} style={styles.textInput}/>
      <TouchableHighlight style={styles.button}
        onPress={handlesubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#324C5A'
  },
  heading: {
    fontSize:25
  },
  textInput: {
    height: 40,
    width:'90%',
    margin: 12,
    borderWidth: 1,
    borderRadius:15,
    padding: 10,
    color:'white'
  },
  button: {
    width:'20%',
    height:'5%',
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  buttonText:{
      color:'white'
  }
});

export default Additems;