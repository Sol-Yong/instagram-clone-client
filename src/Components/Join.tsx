import React from 'react';
import { Box, Link } from '@mui/material/';
import { styled } from '@mui/material/styles';
const JoinForm = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    color: rgba(var(--i1d, 38, 38, 38), 1);
    font-size: 14px;
    margin: 15px;
    text-align: center;
    & a {
      text-decoration: none;
      & span {
        color: #0095f6;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;

function Join() {
  return (
    <JoinForm component="form">
      <p>
        계정이 없으신가요?
        <Link href="#">
          <span>가입하기</span>
        </Link>
      </p>
    </JoinForm>
  );
}

export default Join;
