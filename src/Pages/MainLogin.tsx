import {useEffect, useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Stack, Link } from '@mui/material/';
import { styled } from '@mui/material/styles';
import phoneBackground from '../Images/phone_background.png';
import textLogo from '../Images/text_logo.png';
import AppleStore from '../Images/appleStore.png';
import GooglePlay from '../Images/googlePlay.png';
import PhoneContent1 from '../Images/phone_content1.png';
import PhoneContent2 from '../Images/phone_content2.png';
import PhoneContent3 from '../Images/phone_content3.png';
import PhoneContent4 from '../Images/phone_content4.png';
import Login from '../Components/Login';
import Join from '../Components/Join';
import Footer from '../Components/Footer';

const Container = styled(Grid)`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
`;
const Main = styled(Box)`
  background-color: #fafafa;
  width: 100%;
  height: 83vh;
  display: flex;
  @media screen and (max-width: 450px) {
    height: 77vh;
  }
`;
const ContentBox = styled(Box)`
  width: 100%;
  max-width: 935px;
  margin: 32px auto 0;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 450px) {
    align-items: flex-start;
    margin-top: 0;
  }
`;
const PhoneBox = styled(Box)`
  background-image: url(${phoneBackground});
  flex-basis: 380.32px;
  height: 581.15px;
  margin-bottom: 12px;
  margin-right: 32px;
  background-position: -46px 0;
  @media screen and (max-width: 875px) {
    display: none;
  }
`;
const StylePhonecontent = styled(Box)`
  margin: 27px 0 0 113px;
  position: relative;
  & img {
    opacity : 0;
    position:absolute;
  }
  & img.fadeInOut {
    opacity: 1;
    transition: opacity 1.5s ease-in;
  }
`;
const LoginBox = styled(Box)`
  color: #262626;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;
const CustomFrom = styled(Stack)`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  @media screen and (max-width: 450px) {
    border: none;
    background-color: transparent;
  }
`;
const Logo = styled(Box)`
  display: flex;
  width: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
`;
const DownloadBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    margin: 10px 20px 10px 20px;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    font-size: 14px;
    line-height: 18px;
  }
  & div {
    display: flex;
    justify-content: center;
    margin: 10px 0 10px 0;
    & a:first-of-type {
      margin-right: 10px;
    }
    & a img {
      height: 40px;
    }
  }
`;



function MainLogin() {
  let [currentImg,setCurrentImg] = useState(0);
  const [isActive, setIsActive] = useState(false);

  let currentImgList = [PhoneContent1,PhoneContent2,PhoneContent3,PhoneContent4];
  
  useEffect(()=>{
    setIsActive(true);
    const id = setInterval(() => {
      let count = currentImg + 1;
      let minusCount = currentImg - currentImgList.length +1;

      currentImgList.length > count ? setCurrentImg(count) : setCurrentImg(minusCount);
      setIsActive(false);
    }, 3000);
    
    return () => {clearInterval(id);}
  },[currentImg])
  return (
    <Container>
      <Main>
        <ContentBox>
          <PhoneBox>
            <StylePhonecontent>
              <img
                src={currentImgList[currentImg]}
                alt="인스타 화면예시1"
                style={{ height: '538.84px' }}
                className={isActive ? 'fadeInOut' : ''}
              />
            </StylePhonecontent>
          </PhoneBox>
          <LoginBox>
            <CustomFrom spacing={2}>
              <Logo>
                <img
                  src={textLogo}
                  style={{ marginTop: '36px', marginBottom: '12px' }}
                  alt="인스타그램 텍스트 로고"
                />
              </Logo>
              <Login />
            </CustomFrom>
            <CustomFrom spacing={2} sx={{ padding: '5px 0' }}>
              <Join />
            </CustomFrom>
            <DownloadBox>
              <p>앱을 다운로드하세요.</p>
              <Box>
                <Link>
                  <img
                    src={AppleStore}
                    alt="애플스토어에 다운받으러 바로가기"
                  />
                </Link>
                <Link>
                  <img
                    src={GooglePlay}
                    alt="구글플레이에 다운받으러 바로가기"
                  />
                </Link>
              </Box>
            </DownloadBox>
          </LoginBox>
        </ContentBox>
      </Main>
      <Footer />
    </Container>
  );
}

export default MainLogin;
