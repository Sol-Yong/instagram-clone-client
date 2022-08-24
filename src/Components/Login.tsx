import React from 'react';
import { Box, TextField, Button } from '@mui/material/';
import { styled } from '@mui/material/styles';

const LoginForm = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleFiled = styled(TextField)`
  margin: 0 40px 6px;
  border: 1px solid #000;
  width: 100%;
  max-width: 268px;
  & label {
    font-size: 0.9rem;
    line-height: 1.6em;
  }
  & div {
    background-color: transparent;
    ::after {
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
function Login() {
  return (
    <LoginForm component="form">
      <StyleFiled
        id="filled-basic"
        label="전화번호, 사용자 이름 또는 이메일"
        variant="filled"
      />
      <StyleFiled id="filled-basic" label="비밀번호" variant="filled" />
      <StyleButton variant="contained" disabled>
        로그인
      </StyleButton>
    </LoginForm>
  );
}

export default Login;
