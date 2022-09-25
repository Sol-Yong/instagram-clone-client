import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const FollowsList = styled(Container)`
  display: flex;
  width: 100%;
  padding: 0;
  marign: 0;
`;
const FollowsBox = styled(Box)`
  display: flex;
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
  &span {
    font-size: 16px;
    color: rgb(38, 38, 38);
  }
  & > span:first-child {
    font-weight: 400;
    margin-right: 3px;
  }
  & > span:last-child {
    font-weight: 600;
  }
`;

function Follows() {
  return (
    <div
      style={{
        display: 'flex',
        margin: '0',
        marginBottom: '20px',
      }}
    >
      <FollowsBox>
        <Box component="span">게시물</Box>
        <Box component="span">6</Box>
      </FollowsBox>
      <FollowsBox>
        <Box component="span">팔로워</Box>
        <Box component="span">1104</Box>
      </FollowsBox>
      <FollowsBox>
        <Box component="span">팔로우</Box>
        <Box component="span">800</Box>
      </FollowsBox>
    </div>
  );
}

export default Follows;
