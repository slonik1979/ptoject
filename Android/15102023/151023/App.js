import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { FlatList, View, Alert } from 'react-native';
import { Post } from './components/Post';

export default function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://652fb0e66c756603295d7f2c.mockapi.io/18102023')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось получить статьи');
      });
  }, []);

  // const Post1 = items.map((obj) => (
  //   <Post title={obj.title} createData={obj.createData} image={obj.image} />
  // ));

  return (
    <View>
      {items.map((obj) => (
        <Post title={obj.title} image={obj.image} createData={obj.createData} />
      ))}
    </View>
  );
}
