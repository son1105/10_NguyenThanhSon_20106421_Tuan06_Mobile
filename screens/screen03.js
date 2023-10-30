import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function Screen03() {
    return (
        <View style={styles.container} >
            <View style={{flex: 1, justifyContent:'space-around', alignItems:'center'}}>
                <Text style={{marginVertical: 10, height: '10%', fontSize: 32, fontWeight: 700}}>ADD YOUR JOB</Text>
                <View style={{width: '90%', borderColor: '#9095A0', borderWidth: 1, borderRadius: 4}}>
                <TextInput style={{fontSize: 14, backgroundColor:'#ffffff', padding: 10}}/>
                </View>
            </View>
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity style={{width: 190, height: 44, backgroundColor: '#00BDD6', borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#ffffff', fontSize: 16}}>FINSH</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 2, justifyContent:'center', alignItems:'center'}}>
                <Image style={{width: 190, height: 190}} source={require('../assets/addJob.jpg')}/>
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