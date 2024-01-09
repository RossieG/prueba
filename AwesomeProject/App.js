import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Table, Row, Rows } from 'react-native-reanimated-table';
import { StyleSheet, Text, View,Button } from 'react-native';
import ModalAdd from './src/components/ModalAdd.js';
export default function App() {
  
  
    this.state = {
      tableHead: ['ID','COLOR' ,'TAMAÑO', 'PRECIO', 'CANTIDAD','ACCIONES'],
      tableData: [
        ['1', '2', '3', '4','2'],
        ['a', 'b', 'c', 'd','D'],
        ['1', '2', '3', '456\n789','D'],
        ['a', 'b', 'c', 'd','D']
      ]
    }
    const [isModalOpen,setIsModalOpen] = useState(false);

    const state = this.state;
  return (
    <View style={styles.container}>
      <View>
        <Button title='Agregar patito ' onPress={() => setIsModalOpen(!isModalOpen)} >
          <ModalAdd 
            isModalOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen}
            />
        </Button>
      </View>
      <View style={styles.container}>
        <Table borderStyle={{borderWidth:2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});

