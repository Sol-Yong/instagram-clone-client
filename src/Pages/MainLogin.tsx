import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Stack, Paper, Link } from '@mui/material/';
import { styled } from '@mui/material/styles';
import phoneBackground from '../Images/phone_background.png';
import textLogo from '../Images/text_logo.png';
import Login from '../Components/Login';

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
`;
const ContentBox = styled(Box)`
  width: 100%;
  max-width: 935px;
  margin: 32px auto 0;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PhoneBox = styled(Box)`
  background-image: url(${phoneBackground});
  flex-basis: 380.32px;
  height: 581.15px;
  margin-bottom: 12px;
  margin-right: 32px;
  background-position: -46px 0;
`;
const LoginBox = styled(Box)`
  color: #262626;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  flex-grow: 1;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
`;
const CustomFrom = styled(Stack)`
  align-items: center;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
`;
const Logo = styled(Box)`
  display: flex;
  width: 100%;
  margin: 0 0 10px;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
`;
const Footer = styled(Stack)`
  background-color: #fafafa;
  width: 100%;
  height: 17vh;
`;
const Item = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
  &:first-child {
    margin-top: 24px;
  }
  &:last-child {
    margin: 5px 0;
  }
`;
const StyleLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  margin: 0 8px 12px;
  color: #8e8e8e;
`;

function MainLogin() {
  return (
    <Container>
      <Main>
        <ContentBox>
          <PhoneBox></PhoneBox>
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
            <CustomFrom spacing={2}>111</CustomFrom>
            <CustomFrom spacing={2}>111</CustomFrom>
            <CustomFrom spacing={2}>111</CustomFrom>
            <CustomFrom spacing={2}>111</CustomFrom>
          </LoginBox>
        </ContentBox>
      </Main>
      <Footer>
        <Item>
          <StyleLink href="#">Meta</StyleLink>
          <StyleLink href="#">소개</StyleLink>
          <StyleLink href="#">블로그</StyleLink>
          <StyleLink href="#">채용 정보</StyleLink>
          <StyleLink href="#">도움말</StyleLink>
          <StyleLink href="#">API</StyleLink>
          <StyleLink href="#">개인정보처리방침</StyleLink>
          <StyleLink href="#">약관</StyleLink>
          <StyleLink href="#">인기 계정</StyleLink>
          <StyleLink href="#">해시태그</StyleLink>
          <StyleLink href="#">위치</StyleLink>
          <StyleLink href="#">Instagram Lite</StyleLink>
          <StyleLink href="#">연락처 업로드 & 비사용자</StyleLink>
        </Item>
        <Item>
          <StyleLink href="#">댄스</StyleLink>
          <StyleLink href="#">식음료</StyleLink>
          <StyleLink href="#">집 및 정원</StyleLink>
          <StyleLink href="#">음악</StyleLink>
          <StyleLink href="#">시각 예술</StyleLink>
        </Item>
        <Item>
          <StyleLink href="#">한국어</StyleLink>
          <StyleLink href="#">© 2022 Instagram from Meta</StyleLink>
        </Item>
      </Footer>
    </Container>
  );
}

export default MainLogin;
