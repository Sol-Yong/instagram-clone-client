import styled from 'styled-components';
import { IFeed } from '../../../Pages/MainFeed';
import FeedItem from './FeedItem';

const Container = styled.div`
  margin-right: 32px;

  @media screen and (max-width: 1000px) {
    margin-right: 0px;
  }
`;

interface IFeedListProps {
  feedList: IFeed[];
}

function FeedList({ feedList }: IFeedListProps) {
  return (
    <Container>
      {feedList.map((feed) => (
        <FeedItem feed={feed} key={feed.createdAt} />
      ))}
    </Container>
  );
}

export default FeedList;
