import { useEffect, useState } from 'react';
import Navbar from '../Components/Common/Navbar';
import PersonalInfo from '../Components/PersonalFeed/PersonalInfo';
import PersonalHighlight from '../Components/PersonalFeed/PersonalHighlight';
import PersonalImageBox from '../Components/PersonalFeed/PersonalImageBox';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../Components/Footer';
const PersonalFeedBox = styled(Container)`
  max-width: calc(935px + 40px);
  padding: 0 20px;
  padding-top: 86px;
  border-bottom: 1px solid #ccc;
`;

function PersonalFeed() {
  return (
    <>
      <Navbar />
      <PersonalFeedBox maxWidth="md">
        <PersonalInfo />
        <PersonalHighlight />
      </PersonalFeedBox>
      <PersonalImageBox />
      <Footer />
    </>
  );
}

export default PersonalFeed;
