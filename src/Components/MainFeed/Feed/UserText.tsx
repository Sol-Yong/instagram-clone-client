import styled from 'styled-components';

const Container = styled.div`
  font-size: 14px;
  color: rgb(38, 38, 38);
  margin-bottom: 8px;
`;

const UserName = styled.span`
  font-weight: 700;
`;

const Text = styled.span``;

interface IUserText {
  username: string;
  text: string;
}

function UserText({ username, text }: IUserText) {
  return (
    <Container>
      <UserName>{username}&nbsp;</UserName>
      <Text>{text}</Text>
    </Container>
  );
}

export default UserText;
