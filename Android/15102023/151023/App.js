import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { Text, View, Alert } from 'react-native';
import { Post } from './components/Post';

export default function App() {
  // const [items, setItems] = React.useState([]);

  // React.useEffect(() => {
  //   axios
  //     .get('https://652fb0e66c756603295d7f2c.mockapi.io/18102023')
  //     .then(({ data }) => {
  //       setItems(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       Alert.alert('Ошибка', 'Не удалось');
  //     });
  // }, []);

  // const Post1 = items.map((obj) => (
  //   <Post title={obj.title} createData={obj.createData} image={obj.image} />
  // ));

  return (
    <View>
      <Post
        title="Тест"
        image="https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg"
        createData="25/10/2023"
      />
    </View>
  );
}
