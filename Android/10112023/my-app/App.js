import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Todo App!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
