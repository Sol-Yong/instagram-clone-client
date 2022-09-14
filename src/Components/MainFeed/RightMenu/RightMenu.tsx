import styled from 'styled-components';
import MyProfile from './MyProfile';
import RecommendUser from './RecommendUser';

const Container = styled.div`
  height: 100vh;
  width: 319px;
  margin-bottom: 30px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const RecommendText = styled.div`
  color: rgb(142, 142, 142);
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
`;

const RecommendUserContainer = styled.div`
  padding: 8px;
`;

function RightMenu() {
  return (
    <Container>
      <MyProfile />
      <RecommendText>회원님을 위한 추천</RecommendText>
      <RecommendUserContainer>
        {/* todo */}
        <RecommendUser />
        <RecommendUser />
        <RecommendUser />
        <RecommendUser />
      </RecommendUserContainer>
    </Container>
  );
}

export default RightMenu;
