import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View`
  padding: 15px;
  rborder-bottom-width: 3px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

export default function App() {
  return (
    <View>
      <PostView />
    </View>
  );
}
