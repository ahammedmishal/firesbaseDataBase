import React, { useState } from 'react';
import MobileNumber from './MobileNumber';
import VerifyCode from './VerifyCode';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const MobileLogin = ({navigation}) => {
    const [confirm, setConfirm] = useState(null);

    const mobileLogin = async (phoneNumber)=>{
        console.log(phoneNumber);
        auth().signInWithPhoneNumber('+91'+ phoneNumber).then((res)=>{
            console.log('reponse',res);
            setConfirm(res);
        }).
        catch((error)=>{
            console.log('error',error);
        })
       
    }

    const confirmVerification = async (code)=>{
        try {
            await confirm.confirm(code)
            setConfirm(null)
        } catch (error) {
            Alert.alert('Invalid Code')
        }
    }

    auth().onAuthStateChanged((user)=>{
        if(user){
            setConfirm(null);
            navigation.navigate('Home')
        }else{
            if(confirm){
                Alert.alert('Authentication failed')
            }
        }
    })

    if(confirm) return <VerifyCode onSubmit={confirmVerification}/>

    return <MobileNumber onSubmit={mobileLogin}/>
    
};

export default MobileLogin;