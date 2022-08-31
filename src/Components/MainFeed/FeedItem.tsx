import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IFeed } from '../../Pages/MainFeed';
import Profile from './Feed/Profile';

const Article = styled.article`
  max-width: 470px;
  border-radius: 8px;
  border: 1px solid rgb(219, 219, 219);
  box-sizing: content-box;
  @media screen and (min-width: 640px) {
    margin-bottom: 12px;
    margin-left: -1px;
    margin-right: -1px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

const FeedTopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-height: 650px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

interface IFeedItemProps {
  feed: IFeed;
}

function FeedItem({ feed }: IFeedItemProps) {
  return (
    <Article>
      <Container>
        <FeedTopContainer>
          <Profile
            username={feed.user.username}
            profileImg={feed.user.profileImg}
          />
        </FeedTopContainer>
        <ImageContainer>
          <Image src={feed.feedImg[0]} alt="feed-img" />
        </ImageContainer>
      </Container>
    </Article>
  );
}

export default FeedItem;
