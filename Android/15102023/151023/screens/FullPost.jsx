import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import axios from 'axios';
import { Loading } from './Loading';

const PostImage = styled.Image`
  border-radius: 10px;
  widht: 100%;
  height: 250px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoding, setIsLoding] = React.useState(true);
  const [data, setData] = React.useState([]);
  const { id, title } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get('https://652fb0e66c756603295d7f2c.mockapi.io/18102023/' + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось');
      })
      .finally(() => {
        setIsLoding(false);
      });
  }, []);

  if (isLoding) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: data.image,
        }}
      />
      <PostText>{data.title}</PostText>
    </View>
    // <div>FullPost</div>
  );
};
