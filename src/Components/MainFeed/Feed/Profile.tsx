import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ProfileContainer = styled.header`
  margin: 8px 4px 8px 12px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: calc(100% - 48px);

  & > div {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    min-height: 40px;
    & > a {
      height: 40px;
      line-height: 35px;
    }
  }
`;

const SLink = styled(Link)`
  color: rgb(38, 38, 38);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
  padding-right: 4px;
`;

const Icon = styled(MoreHorizIcon)`
  cursor: pointer;
`;

interface IProfileProps {
  username: string;
  profileImg: string;
}

function Profile({ username, profileImg }: IProfileProps) {
  return (
    <>
      <ProfileContainer>
        <SLink to={`/${username}`}>
          <Image src={profileImg} alt="profile-img" />
        </SLink>
        <div>
          <SLink to={`/${username}`}>{username}</SLink>
        </div>
      </ProfileContainer>
      <ButtonContainer>
        <Icon />
      </ButtonContainer>
    </>
  );
}

export default Profile;
