import React from 'react';
import { Stack, Paper, Link } from '@mui/material/';
import { styled } from '@mui/material/styles';

const StyleFooter = styled(Stack)`
  background-color: #fafafa;
  width: 100%;
  height: 17vh;
`;
const Item = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: transparent;
  box-shadow: none;
  &:first-of-type {
    margin-top: 24px;
  }
  &:last-of-type {
    margin: 5px 0;
  }
`;
const StyleLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  margin: 0 8px 12px;
  color: #8e8e8e;
`;

function Footer() {
  return (
    <StyleFooter>
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
        <span
          style={{ fontSize: '12px', margin: '0 8px 12px', color: '#8e8e8e' }}
        >
          © 2022 Instagram from Meta
        </span>
      </Item>
    </StyleFooter>
  );
}

export default Footer;
