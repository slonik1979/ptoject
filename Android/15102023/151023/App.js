import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Post } from './components/Post';

export default function App() {
  return (
    <View>
      <Post />
    </View>
  );
}
