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
`;

const PostDate = styled.Text`
  font-size: 17px;
  color: rgba(0, 0, 0, 0.3);
  margin-top: 2px;
`;

const PostDetails = styled.View`
  justify-content: center;
`;

export const Post = () => {
  return (
    <PostView>
      <PostImage
        source={{
          uri: 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg?w=740&t=st=1697538899~exp=1697539499~hmac=8ad1cf3c296ba1ddc8fe334873089ca842dec9193008691c897e57f558fff791',
        }}
      />
      <PostDetails>
        <PostTitle>Тестовая статья</PostTitle>
        <PostDate>17/10/82023</PostDate>
      </PostDetails>
    </PostView>
  );
};
