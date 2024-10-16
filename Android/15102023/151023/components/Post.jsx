import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  margin-top: 10px;
  border-bottom-width: 5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 15px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
  width: 300px;
`;

const PostDate = styled.Text`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.3);
  margin-top: 2px;
`;

const PostDetails = styled.View`
  justify-content: center;
`;

const truncateTitle = (str) => {
  if (str.lenght > 50) {
    return substring(0, 50) + '...';
  }
  return str;
};

export const Post = ({ title, image, createData }) => {
  return (
    <PostView>
      <PostImage source={{ uri: image }} />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{createData}</PostDate>
      </PostDetails>
    </PostView>
  );
};
