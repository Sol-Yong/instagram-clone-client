import { Box, TextField, Button,Typography } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Icons from '../images/icons.png';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LoginForm = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px !important;
`;

const StyleFiled = styled(TextField)`
  margin: 0 40px 6px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background: #fafafa;
  width: 100%;
  max-width: 268px;
  & label.Mui-focused {
    transform: translate(12px, 5px) scale(0.9);
    color: rgba(0, 0, 0, 0.6);
  }
  & label {
    font-size: 0.73rem;
    line-height: 1.0145em;
  }
  & input {
    height: 1.9em;
    font-size: 12px;
    padding: 14px 0 2px 12px !important;
  }
  & div {
    background-color: transparent;
    ::after,
    ::before {
      display: none;
    }
  }
  & div:hover {
    background-color: transparent;
  }
  & div:focus-within {
    background-color: transparent;
  }
`;
const StyleButton = styled(Button)`
  &&& {
    &.Mui-disabled {
      background-color: rgba(var(--d69, 0, 149, 246), 0.3);
      width: 100%;
      max-width: 268px;
      margin: 0 40px 6px;
      color: #fff;
    }
  }
`;
const ORBox = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 268px;
  padding: 5px 0;
  display: flex;
  justify-content: center;
  margin: 10px 40px 18px;
  ::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #dbdbdb;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const StyleLink = styled(Link)`
  width: 100%;
  max-width: 268px;
  height: 32px;
  color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin: 8px 40px;
  background-color: #0095f6;
  border: 1px solid transparent;
  border-radius: 4px;
  & span:first-of-type {
    margin-right: 8px;
    background-image: url(${Icons});
    background-repeat: no-repeat;
    background-position: -414px -300px;
    width: 16px;
    height: 16px;
  }
`;
const Guide = styled(Typography)`
  &&& {
    &.MuiTypography-body1 {
      color: #8e8e8e;
      font-size: 12px;
      line-height: 16px;
      margin: 10px 40px;
      text-align: center;
    }
  }
`;
const GuideLink = styled(Link)`
  color: #8e8e8e;
  font-weight: 600;
  text-decoration: none;
`;
function AccountJoin() {
  return (
    <LoginForm component="form">
      <StyleLink to="#">
        <span></span>
        <span>Facebook으로 로그인</span>
      </StyleLink>
      <ORBox>
        <span
          style={{
            position: 'relative',
            zIndex: '1',
            fontSize: '13px',
            backgroundColor: '#fff',
            color: '#8e8e8e',
            padding: '0 18px',
          }}
        >
          또는
        </span>
      </ORBox>
      <StyleFiled
        id="filled-basic"
        label="휴대폰 번호 또는 이메일 주소"
        variant="filled"
      />
      <StyleFiled id="filled-basic" label="성명" variant="filled" />
      <StyleFiled id="filled-basic" label="사용자 이름" variant="filled" />
      <StyleFiled
        id="filled-basic"
        label="비밀번호"
        variant="filled"
        type="password"
      />
      <Guide variantMapping={{ body2: 'p' }}>
        서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을
        수도 있습니다.
        <GuideLink to="">더 알아보기</GuideLink>
      </Guide>
      <StyleButton variant="contained" disabled>
        가입
      </StyleButton>
    </LoginForm>
  );
}

export default AccountJoin;
