import Grid from '@mui/material/Unstable_Grid2';
import { Box, Stack, Link } from '@mui/material/';
import { styled } from '@mui/material/styles';
import textLogo from '../../images/text_logo.png';
import AppleStore from '../../images/appleStore.png';
import GooglePlay from '../../images/googlePlay.png';
import Login from '../../Components/MainLogin';
import ConnectionLink from '../../Components/ConnectionLink';
import Footer from '../../Components/Footer';

const Container = styled(Grid)`
  background-color: #fafafa;
  width: 100%;
  min-height: 100vh;
`;
const Main = styled(Box)`
  background-color: #fafafa;
  width: 100%;
  min-height: 83vh;
  display: flex;
  @media screen and (max-width: 450px) {
    min-height: 77vh;
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

function AccountLogin() {
  return (
    <Container>
      <Main>
        <ContentBox>
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
              <ConnectionLink />
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

export default AccountLogin;
