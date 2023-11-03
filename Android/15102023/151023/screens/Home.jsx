import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { Text, View, Alert, FlatList, ActivityIndicator, 
        RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';

export const HomeScreen = () => {
  const [isLoding, setIsLoding] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    setIsLoding(true);
    axios
      .get('https://652fb0e66c756603295d7f2c.mockapi.io/18102023')
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось');
      }).finally(() => {
        setIsLoding(false);
      })
  };

  React.useEffect(fetchPosts, []);

  // const Post1 = items.map((obj) => (
  //   <Post title={obj.title} createData={obj.createData} image={obj.image} />
  // ));

  if(isLoding) {
    return <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ActivityIndicator size='large'/>
      <Text style={{marginTop: 15}}>Загрузка...</Text>
    </View>
  }

  // style={{
  //   flex: 1,
  //   justify-content: 'center',
  //   alignItems: 'center'
  // }}

  return (
    <View>
      <FlatList
      refreshControl={ <RefreshControl refreshing={isLoding} onRefresh={fetchPosts}/>}
      data={items} 
      renderItem={({item}) => (
        <TouchableOpacity >
          <Post title={item.title} image={item.image}
      createData={item.createData}/>
        </TouchableOpacity>
      )}
      />
 {/* {items.map((obj) => (
    <Post title={obj.title} createData={obj.createData} image={obj.image} />
   ))} */}
      {/* <Post  title ='Тест' image ='https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?w=740&t=st=1698126696~exp=1698127296~hmac=98392d6c036b56cf934f30a95ede67cc16075fac53b6c843ee9481f19f15c151a' createData='24/10/2023'/> */}
    </View>
  );
}
