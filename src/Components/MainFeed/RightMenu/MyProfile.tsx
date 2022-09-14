import styled from 'styled-components';

const MyProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 10px;
`;

const MyProfileImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 18px;
`;

const MyProfileInfoContainer = styled.div``;

const MyProfileUsername = styled.div`
  color: rgb(38, 38, 38);
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
`;

const MyProfileName = styled.div`
  color: rgb(142, 142, 142);
  font-weight: 400;
  font-size: 14px;
`;
function MyProfile() {
  return (
    <MyProfileContainer>
      <MyProfileImage
        src="https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg"
        alt="profile-image"
      />
      <MyProfileInfoContainer>
        <MyProfileUsername>yoo.__.oong</MyProfileUsername>
        <MyProfileName>용현준</MyProfileName>
      </MyProfileInfoContainer>
    </MyProfileContainer>
  );
}

export default MyProfile;
