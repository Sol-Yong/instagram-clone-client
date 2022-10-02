import React from 'react';
import { Stack, Paper } from '@mui/material/';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

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
  const FOOTERLOCATION = useLocation();
  return (
    <StyleFooter>
      <Item>
        <StyleLink to="#">Meta</StyleLink>
        <StyleLink to="#">소개</StyleLink>
        <StyleLink to="#">블로그</StyleLink>
        <StyleLink to="#">채용 정보</StyleLink>
        <StyleLink to="#">도움말</StyleLink>
        <StyleLink to="#">API</StyleLink>
        <StyleLink to="#">개인정보처리방침</StyleLink>
        <StyleLink to="#">약관</StyleLink>
        <StyleLink to="#">인기 계정</StyleLink>
        <StyleLink to="#">해시태그</StyleLink>
        <StyleLink to="#">위치</StyleLink>
        <StyleLink to="#">Instagram Lite</StyleLink>
        <StyleLink to="#">연락처 업로드 & 비사용자</StyleLink>
      </Item>
      {FOOTERLOCATION.pathname.split('/')[1] ? (
        ''
      ) : (
        <Item>
          <StyleLink to="#">댄스</StyleLink>
          <StyleLink to="#">식음료</StyleLink>
          <StyleLink to="#">집 및 정원</StyleLink>
          <StyleLink to="#">음악</StyleLink>
          <StyleLink to="#">시각 예술</StyleLink>
        </Item>
      )}

      <Item>
        <StyleLink to="#">한국어</StyleLink>
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
