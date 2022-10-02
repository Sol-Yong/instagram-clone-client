import Navbar from '../Components/Common/Navbar';
import PersonalInfo from '../Components/PersonalFeed/PersonalInfo';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../Components/Footer';
import { Link, useLocation } from 'react-router-dom';
const PersonalFeedBox = styled(Container)`
  max-width: calc(935px + 40px);
  padding: 0 20px;
  padding-top: 86px;
`;

function PersonalFeed() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Navbar />

      <PersonalFeedBox maxWidth="md" sx={{ borderBottom: '1px solid #ccc' }}>
        <PersonalInfo />
        <div
          style={{
            marginLeft: '50px',
            display: 'flex',
            marginBottom: '44px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: ' 10px 15px',
                width: '87px',
                height: '87px',
                border: '1px solid #ccc',
                borderRadius: '50%',
              }}
            >
              <svg
                aria-label="+ 아이콘"
                color="#c7c7c7"
                fill="#c7c7c7"
                height="44"
                role="img"
                viewBox="0 0 24 24"
                width="44"
              >
                <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
              </svg>
            </a>
            <p style={{ paddingTop: '15px' }}>신규</p>
          </div>
        </div>
      </PersonalFeedBox>

      <Container
        maxWidth="md"
        sx={{ display: 'flex', justifyContent: 'center', height: '53px' }}
      >
        {location.pathname ? (
          <a
            href=""
            style={{
              marginRight: '60px',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              borderTop: '1px solid #000',
            }}
          >
            <svg
              aria-label=""
              color="#262626"
              fill="#262626"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
            <span style={{ marginLeft: '6px', fontSize: '12px' }}>게시물</span>
          </a>
        ) : (
          ''
        )}
        {location.pathname.split('/')[2] === 'saved' ? (
          <Link
            to={`${location.pathname}/saved`}
            style={{
              marginRight: '60px',
              fontSize: '12px',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <svg
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
            <span style={{ marginLeft: '6px', fontSize: '12px' }}>저장됨</span>
          </Link>
        ) : (
          ''
        )}
        <a
          href=""
          style={{
            fontSize: '12px',
            color: '#000',
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <svg
            aria-label=""
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </svg>
          <span style={{ marginLeft: '6px', fontSize: '12px' }}>태그됨</span>
        </a>
      </Container>
      <Footer />
    </>
  );
}

export default PersonalFeed;
