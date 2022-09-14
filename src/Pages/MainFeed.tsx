import styled from 'styled-components';
import Navbar from '../Components/Common/Navbar';
import FeedList from '../Components/MainFeed/Feed/FeedList';
import RightMenu from '../Components/MainFeed/RightMenu/RightMenu';

const Container = styled.main`
  padding-top: 86px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 470px) {
    padding-top: 60px;
  }
`;

interface IUser {
  profileImg: string;
  username: string;
  name: string;
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
  feedImg: string[];
  text: string;
  createdAt: string;
}

function MainFeed() {
  const tempFeed: IFeed[] = [
    {
      user: {
        profileImg: 'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
        username: 'yoo.__.oong',
        name: '용현준',
      },
      likes: [
        { name: 'solsol', username: 'solsol' },
        { name: '용', username: 'yoo.__.oong' },
      ],
      comments: [
        {
          username: 'solsol',
          text: '안녕하세요.',
        },
        {
          username: 'solsol',
          text: '반가워요.',
        },
      ],
      feedImg: [
        'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
        'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
      ],
      text: '임시 데이터 입니다.',
      createdAt: '2022년 8월 10일',
    },
    {
      user: {
        profileImg: 'https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg',
        username: 'yoo.__.oong',
        name: '용현준',
      },
      likes: [
        { name: '솔', username: 'solsol' },
        { name: '용', username: 'yoo.__.oong' },
      ],
      comments: [
        {
          username: 'solsol',
          text: '안녕하세요.',
        },
      ],
      feedImg: ['https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg'],
      text: '임시 데이터 입니다.',
      createdAt: '2022년 8월 11일',
    },
  ];
  return (
    <>
      <Navbar />
      <Container>
        <FeedList feedList={tempFeed} />
        <RightMenu />
      </Container>
    </>
  );
}

export default MainFeed;
