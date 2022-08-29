import Grid from '@mui/material/Unstable_Grid2';
import { Box, Stack, Link } from '@mui/material/';
import { styled } from '@mui/material/styles';
import textLogo from '../../Images/text_logo.png';
import AppleStore from '../../Images/appleStore.png';
import GooglePlay from '../../Images/googlePlay.png';
import Login from '../../Components/AccountLogin';
import Join from '../../Components/AccountJoin';
import Footer from '../../Components/AccountFooter';
import { Typography } from '@material-ui/core';

const Container = styled(Grid)`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
`;
const Main = styled(Box)`
  background-color: #fafafa;
  width: 100%;
  height: 90vh;
  display: flex;
  @media screen and (max-width: 450px) {
    height: 95vh;
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
const CustomForm = styled(Stack)`
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
const InduceMember = styled(Typography)`
  &&& {
    &.MuiTypography-h2 {
      font-size: 17px;
      color: rgba(var(--f52, 142, 142, 142), 1);
      font-weight: 600;
      line-height: 20px;
      margin: 0 40px 10px;
      text-align: center;
    }
  }
`;

function MainJoin() {
  return (
    <Container>
      <Main>
        <ContentBox>
          <LoginBox>
            <CustomForm spacing={2}>
              <Logo>
                <img
                  src={textLogo}
                  style={{ marginTop: '36px', marginBottom: '12px' }}
                  alt="인스타그램 텍스트 로고"
                />
              </Logo>
              <InduceMember variant="h2">
                친구들의 사진과 동영상을 보려면 가입하세요.
              </InduceMember>
              <Join />
            </CustomForm>
            <CustomForm spacing={2} sx={{ padding: '5px 0' }}>
              <Login />
            </CustomForm>
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

export default MainJoin;
