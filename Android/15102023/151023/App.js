import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  padding: 15px;
  background-color: green;
  height: 100px;
  width: 100px;
`;

export default function App() {
  return (
    <View>
      <PostView />
    </View>
  );
}
