import { IFeed } from '../../Pages/MainFeed';
import FeedItem from './FeedItem';

interface IFeedListProps {
  feedList: IFeed[];
}

function FeedList({ feedList }: IFeedListProps) {
  return (
    <div>
      {feedList.map((feed) => (
        <FeedItem feed={feed} />
      ))}
    </div>
  );
}

export default FeedList;
