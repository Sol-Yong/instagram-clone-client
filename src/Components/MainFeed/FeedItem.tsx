import styled from 'styled-components';
import { IFeed } from '../../Pages/MainFeed';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Article = styled.article`
  max-width: 470px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const FeedTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  background-color: rgb(255, 255, 255);
`;

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
    align-items: flex-start;
    margin-left: 10px;
    min-height: 40px;
  }
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

interface IFeedItemProps {
  feed: IFeed;
}

function FeedItem({ feed }: IFeedItemProps) {
  return (
    <Article>
      <Container>
        <FeedTopContainer>
          <ProfileContainer>
            <Image src={feed.user.profileImg} alt="profile-img" />
            <div>{feed.user.username}</div>
          </ProfileContainer>
          <ButtonContainer>
            <Icon />
          </ButtonContainer>
        </FeedTopContainer>
      </Container>
    </Article>
  );
}

export default FeedItem;
