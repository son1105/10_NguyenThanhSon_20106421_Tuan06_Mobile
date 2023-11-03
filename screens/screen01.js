import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React from 'react';
export default function Screen01({navigation}) {
    var [name, setName] = React.useState('')
    return (
        <View style={styles.container} >
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 217, height: 217 }} source={require('../assets/addJob.jpg')} />
            </View>
            <View style={{ flex: 2, width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: '#8353E2', fontSize: 24, fontWeight: 700 }}>MANAGE YOUR TASK</Text>
                <View 
                    style={{ 
                        borderColor: '#9095A0', 
                        width: '90%', 
                        borderWidth: 1, 
                        borderRadius: 12,
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        alignItems:'center'
                    }}>
                    <MaterialCommunityIcons name="email-outline" style={{marginHorizontal: 10}} size={30} color="black" />
                    <TextInput style={{ 
                        padding: 10, 
                        fontSize: 16, 
                        height: 43,
                        color: '#9095A0', 
                        width: '80%', 
                        backgroundColor: '#ffffff'}} 
                        placeholder='Enter your name'
                        value={name}
                        onChangeText={setName}
                        />
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#00BDD6', width: '50%', justifyContent: 'center', alignItems: 'center', height: 44}} onPress={()=>{navigation.navigate('Screen02', name)}}>
                    <Text style={{color:'#ffffff', marginRight: 10}}>GET STARTED</Text>
                    <Feather name="arrow-right" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});