import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Stack, TextField, Button } from '@mui/material/';
import { styled } from '@mui/material/styles';
import phoneBackground from '../images/phone_background.png';
import textLogo from '../images/text_logo.png';

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
const Footer = styled(Box)`
  background-color: #fafafa;
  width: 100%;
  height: 17vh;
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
                />
              </Logo>
              <Stack component="form" spacing={2} sx={{ width: '100%' }}>
                <TextField
                  id="filled-basic"
                  label="전화번호, 사용자 이름 또는 이메일"
                  variant="filled"
                  sx={{
                    margin: '0 40px 6px',
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="비밀번호"
                  variant="filled"
                  sx={{
                    margin: '0 40px 6px',
                  }}
                />
                <Button variant="contained" sx={{ backgroundColor: '#0095f6' }}>
                  로그인
                </Button>
              </Stack>
            </CustomFrom>
          </LoginBox>
        </ContentBox>
      </Main>
      <Footer></Footer>
    </Container>
  );
}

export default MainLogin;
