import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/Navbar';
import { AddTodo } from './components/AddTodo';

export default function App() {
  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
