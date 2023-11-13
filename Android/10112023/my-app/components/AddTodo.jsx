import { View, StyleSheet, TextInput, Button } from 'react-native';

export const AddTodo = () => {
  return (
    <View style={стили.block}>
      <TextInput style={стили.input} />
      <Button title="Добавить" />
    </View>
  );
};

const стили = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
});
