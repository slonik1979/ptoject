import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = () => {
    return (
        <View style={стили.block}>
        <TextInput style={стили.input}/>
        <Button title='Добавить'/>
        </View>
    )
}

const стили = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'

    }
})