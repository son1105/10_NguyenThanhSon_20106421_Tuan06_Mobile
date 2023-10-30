import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';

export default function Screen02({navigation}) {
    const data = [
        {
            todo: 'Learn HTML Advance'
        },
        {
            todo: 'Learn HTML Advance'
        },
        {
            todo: 'Learn HTML Advance'
        },
        {
            todo: 'Learn HTML Advance'
        },
        {
            todo: 'Learn HTML Advance'
        }
    ]
    return (
        <View style={styles.container} >
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{width: '90%', borderColor: '#9095A0', borderWidth: 1, borderRadius: 4, backgroundColor: '#ffffff'}}>
                    <TextInput style={{ fontSize: 14, backgroundColor: '#ffffff', height: 44, padding: 10}}/>
                </View>
            </View>
            <View style={{flex: 2, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <FlatList style={{width: '90%'}} data={data}
                renderItem={({item})=>
                    <View style={{alignItems: 'center', marginVertical: 10, height: 48, borderRadius: 24}}>
                        <Text>{item.todo}</Text>
                    </View>
                }/>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style={{width: 69, height: 69, borderRadius:35, backgroundColor: '#00BDD6', justifyContent: 'center', alignItems: 'center'}} onPress={()=>{navigation.navigate('Screen03')}}>
                    <Text style={{fontSize: 30, fontWeight: 700, color: '#ffffff'}}>+</Text>
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