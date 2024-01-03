import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,Pressable,Button } from 'react-native';


export default function App()  {

var [cont,setcont] =useState(0); 
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Contador </Text>
      
      <View style={styles.containerButton}>
        <View style={styles.button}>
          <Button title='Contar'  color="#4CAF50"
                  onPress={()=>setcont(cont +=1)}
          > </Button>
        </View>
        <View style={styles.button}>
          <Button title='Reset' color="#ff5c5c"
            onPress={()=>setcont(cont=0)}
           > </Button>       
        
        </View>

      </View>
      <View>
        <Text
         style={{fontSize:52}}
        >
          {cont}
        </Text>
      </View>
     
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    flex: .10 ,
    flexDirection: 'row',
    alignItems: 'flex-start', //replace with flex-end or center 
    justifyContent:'space-between',

  },
  button:{
    marginTop:10,
    marginRight:9,
  },
});
