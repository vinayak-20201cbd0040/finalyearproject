import { StyleSheet,Text,View,SafeAreaView,Button,Alert,TouchableHighlight } from "react-native";
import React,{useState,useEffect} from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import { StatusBar } from "expo-status-bar";
import Dashboard from "./src/Dashboard";


export default function Biometric(){
    const[isBiometricSupported,setIsBiometricSupported]=useState(false);
    const[isVerification,setIsVerification]=useState(false);
    useEffect(()=>{
        (async()=>{
            const compatible=await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    });
    const fallBackToDefaultAuth=()=>{
        console.log('get back to Otp login')
    };
    const alertComponent=(title,mess,btnTxt,btnFunc)=>{
        return Alert.alert(title,mess,[
            {
                text:btnTxt,
                onPress:btnFunc,
            }
            
        ]);
    };
    const TwoButtonAlert=()=>
    Alert.alert('welcome ','dashboard',[
        {
            text:'Back',
            onPress:()=>console.log('cancel pressed'),
            style:'cancel',
        },
        {
            text:'OK',
            onPress:()=>{
                console.log('ok pressed');
                setIsVerification(true);
            },
        },
    ]);
    const handleBiometricAuth=async ()=>{
        const isBiometricAvailable=await LocalAuthentication.hasHardwareAsync();
        if(!isBiometricAvailable)
          return alertComponent(
          'Please roolback to otp component',
          'Biometric Auth not supported',
          'OK',
           ()=> fallBackToDefaultAuth()
            );
let supportedBiometrics;
if(isBiometricAvailable)
    supportedBiometrics=await LocalAuthentication.supportedAuthenticationTypesAsync();
    
const savedBiometrics=await LocalAuthentication.isEnrolledAsync();
if(!savedBiometrics)
   return alertComponent(
  'Biometric record not found',
  'Please Login with your Otp',
  'OK',
  ()=>fallBackToDefaultAuth()
);
const biometricAuth=await LocalAuthentication.authenticateAsync({
    promptMessage:'Login with biometrics',
    cancelLabel:'cancel',
    disableDeviceFallback:true,
});
    
if(biometricAuth){TwoButtonAlert()};
console.log({isBiometricAvailable});
console.log({supportedBiometrics});
console.log({savedBiometrics});
console.log({biometricAuth});
    };
if(isVerification){
    return <Dashboard />
}
    return (
        <SafeAreaView>
      <View style={styles.container}>
        <Text>
            {isBiometricSupported

           ? 'Your device is compatible with biometrics'
        : 'face and fingerprint scanner is available' }
        </Text>
<TouchableHighlight
style={{
    height:60,
    marginTop:200
}}
>
<Button
title='Login with Biometrics'
color='black'
onPress={handleBiometricAuth}

/>
</TouchableHighlight>
<StatusBar
style='auto'
/>
      </View>
        </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop:StatusBar.currentHeight
    }
})