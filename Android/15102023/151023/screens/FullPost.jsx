import React from "react";
import styled from "styled-components/native";
import { View } from 'react-native';
import axios from 'axios';
import { Loading } from "./Loading";

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


export const FullPostScreen = () => {
    const [isLoding, setIsLoding] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios
      .get('https://652fb0e66c756603295d7f2c.mockapi.io/18102023/1')
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Ошибка', 'Не удалось');
      }).finally(() => {
        setIsLoding(false);
      });
    }, []);

    if(isLoding) {
        return <Loading/>;
      }

    return (
        

        <View style={{ padding: 20}}>
        <PostImage source={{ uri: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/719.jpg'}}/>
        <PostText>Масло моторное TCL Zero Line Fully Synth, Fuel Economy, SP, GF-6, 5W30, 200л</PostText>
        </View>
        // <div>FullPost</div>
    )
}

