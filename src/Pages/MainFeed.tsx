import styled from 'styled-components';
import Navbar from '../Components/Common/Navbar';
import FeedList from '../Components/MainFeed/FeedList';

const Container = styled.main`
  padding-top: 60px;
`;

interface IUser {
  profileImg: string;
  username: string;
}

interface ILike {
  name: string;
  username: string;
}

interface IComment {
  username: string;
  text: string;
}

export interface IFeed {
  user: IUser;
  likes: ILike[];
  comments: IComment[];
  feedImg: string;
  text: string;
}

function MainFeed() {
  const tempFeed: IFeed[] = [
    {
      user: {
        profileImg: 'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
        username: 'yoo.__.oong',
      },
      likes: [
        { name: '솔', username: 'solsol' },
        { name: '용', username: 'yoo.__.oong' },
      ],
      comments: [
        {
          username: '솔',
          text: '안녕하세요.',
        },
      ],
      feedImg: 'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
      text: '임시 데이터 입니다.',
    },
    {
      user: {
        profileImg: 'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
        username: 'yoo.__.oong',
      },
      likes: [
        { name: '솔', username: 'solsol' },
        { name: '용', username: 'yoo.__.oong' },
      ],
      comments: [
        {
          username: '솔',
          text: '안녕하세요.',
        },
      ],
      feedImg: 'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
      text: '임시 데이터 입니다.',
    },
  ];
  return (
    <>
      <Navbar />
      <Container>
        <FeedList feedList={tempFeed} />
      </Container>
    </>
  );
}

export default MainFeed;
