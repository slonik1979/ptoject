import { Text, View } from 'react-native';
import { styles } from './App';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testText}>
        Данил должен изучать программирование!
      </Text>
      <Text>Данил должен изучать программирование!</Text>
      <postView />
    </View>
  );
}
