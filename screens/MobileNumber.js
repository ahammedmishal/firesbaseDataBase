import React,{useState} from 'react';
import { View, Text, StyleSheet ,TextInput,Button} from 'react-native';

const MobileNumber = (props) => {
    const [phoneNumber, setPhoneNumber] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter phone number</Text>
      <TextInput
        style={styles.input}
        autoFocus
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title='Sign In with OTP' onPress={()=> props.onSubmit(phoneNumber)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: "lightblue",
    width:300,
    marginVertical: 30,
    fontSize:25,
    padding:10,
    borderRadius:8,
  },
  text: {
      fontSize:25,
  }
});

export default MobileNumber;