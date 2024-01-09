import * as React from 'react';
import { Text, Modal ,View, Button, TextInput} from 'react-native';

export default function ModalAdd({isModalOpen,setIsModalOpen}){
   
    const modalContainerStyle={
        flex:1,
        justifyContent:'center'
    }
    const modalStyle={
        shadowColor:'#000',
        shadowOpacity:0.25,
        shadowOffset:{
            width:0,
            heigth:2,
        },
        shadowRadius:4,
        elevation:5
    }
    console.log(isModalOpen);
    return(
        <>
            <Modal visible={isModalOpen} transparent={true} animationType='fade'>
                <View style={modalContainerStyle}>
                    <View style={modalStyle}>
                        <Text>Color</Text><TextInput></TextInput>
                        <Text>Tamaño</Text><TextInput></TextInput>
                        <Text>Cantidad</Text><TextInput></TextInput>

                    </View>
                    
                    <View>
                        <Button>
                            <Text>Cerrar</Text>
                            
                        </Button>
                        <Button>
                            <Text>Añadir</Text>
                        </Button>
                    </View>
                  
                </View>
            </Modal>
        
        </>
        

    );
        
    
}