import styled from 'styled-components';
import { IFeed } from '../../../Pages/MainFeed';
import Profile from './Profile';
import Buttons from './Buttons';
import UserText from './UserText';
import CommentForm from './CommentForm';
import Commnet from './Commnet';
const Article = styled.article`
  max-width: 470px;
  border-radius: 8px;
  border: 1px solid rgb(219, 219, 219);
  box-sizing: content-box;
  margin-bottom: 12px;
  @media screen and (max-width: 640px) {
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

const ImageContainer = styled.section`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 470px;
  max-height: 587.5px;
  object-fit: cover;
`;

const FeedBottomContainer = styled.div``;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 6px;
`;

const LikesContainer = styled.section`
  padding: 0 12px;
  margin-bottom: 8px;
  color: rgb(38, 38, 38);
  font-weight: 700;
  font-size: 14px;
`;

const ContentsContainer = styled.div`
  padding: 0 12px;
  margin-bottom: 8px;
`;

const Date = styled.div`
  color: rgb(142, 142, 142);
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
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
        <FeedBottomContainer>
          <ButtonsContainer>
            <Buttons />
          </ButtonsContainer>
          <LikesContainer>
            <span>????????? {feed.likes.length}???</span>
          </LikesContainer>
          <ContentsContainer>
            <UserText username={feed.user.username} text={feed.text} />
            {feed.comments.map((comment, index) => (
              <Commnet
                username={comment.username}
                text={comment.text}
                key={index}
              />
            ))}
            <Date>{feed.createdAt}</Date>
          </ContentsContainer>
          <CommentForm />
        </FeedBottomContainer>
      </Container>
    </Article>
  );
}

export default FeedItem;
