import { Box, TextField, Button, Link } from '@mui/material/';
import { styled } from '@mui/material/styles';
import Icons from '../images/icons.png';
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
  color: #385185;
  text-decoration: none;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  margin: 8px 40px;
  & span:first-of-type {
    margin-right: 8px;
    background-image: url(${Icons});
    background-repeat: no-repeat;
    background-position: -414px -259px;
    width: 16px;
    height: 16px;
  }
`;
const FindPassword = styled(Link)`
  color: rgba(var(--fe0, 0, 55, 107), 1);
  font-size: 12px;
  line-height: 16px;
  margin-top: 12px;
  text-align: center;
  text-decoration: none;
`;

function Login() {
  return (
    <LoginForm component="form">
      <StyleFiled
        id="filled-basic"
        label="전화번호, 사용자 이름 또는 이메일"
        variant="filled"
        fullWidth
      />
      <StyleFiled
        id="filled-basic"
        label="비밀번호"
        variant="filled"
        fullWidth
      />
      <StyleButton variant="contained" disabled>
        로그인
      </StyleButton>
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
      <StyleLink href="#">
        <span></span>
        <span>Facebook으로 로그인</span>
      </StyleLink>
      <FindPassword href="#">비밀번호를 잊으셨나요?</FindPassword>
    </LoginForm>
  );
}

export default Login;
