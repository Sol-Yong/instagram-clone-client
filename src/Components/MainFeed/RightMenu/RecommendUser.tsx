import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;

const Username = styled.div`
  flex: 1 1 auto;
  color: rgb(38, 38, 38);
  font-size: 14px;
  font-weight: 700;
`;

const FollowBtn = styled.div`
  color: rgb(0, 149, 246);
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
`;

function RecommendUser() {
  return (
    <Container>
      <ProfileImg
        src="https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg"
        alt="profile-image"
      />
      <Username>test__test</Username>
      <FollowBtn>팔로우</FollowBtn>
    </Container>
  );
}

export default RecommendUser;
