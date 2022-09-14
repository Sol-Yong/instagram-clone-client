import styled from 'styled-components';
import UserText from './UserText';

const CommentsContainer = styled.div`
  color: rgb(38, 38, 38);
  font-size: 14px;
  margin: 8px 0;
`;

interface ICommentProps {
  username: string;
  text: string;
}

function Commnet({ username, text }: ICommentProps) {
  return (
    <CommentsContainer>
      <UserText username={username} text={text} />
    </CommentsContainer>
  );
}

export default Commnet;
