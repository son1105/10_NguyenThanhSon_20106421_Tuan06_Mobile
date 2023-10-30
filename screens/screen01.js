import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Screen01({navigation}) {
    return (
        <View style={styles.container} >
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 217, height: 217 }} source={require('../assets/icon.png')} />
            </View>
            <View style={{ flex: 2, width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: '#8353E2', fontSize: 24, fontWeight: 700 }}>MANAGE YOUR TASK</Text>
                <View style={{ borderColor: '#9095A0', width: '90%', borderWidth: 1, borderRadius: 12 }}>
                    <TextInput style={{ padding: 10, fontSize: 16, height: 43, color: '#9095A0', with: '50%', backgroundColor: '#ffffff' }} />
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{backgroundColor: '#00BDD6', width: '50%', justifyContent: 'center', alignItems: 'center', height: 44}} onPress={()=>{navigation.navigate('Screen02')}}>
                    <Text style={{color:'#ffffff'}}>GET STARTED</Text>
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