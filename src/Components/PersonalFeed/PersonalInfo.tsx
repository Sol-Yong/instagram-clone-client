import { Container, Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';

const PersonalFeedBox = styled(Container)`
  max-width: calc(935px + 40px);
  padding: 0 20px;
  padding-top: 86px;
`;
const UserInfoBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImage = styled(Box)`
  height: calc(148px + 2px);
  width: 150px;
  margin-right: 30px;
  margin-left: auto;
  margin-right: auto;
`;
const UserSetting = styled(Box)`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

function PersonalInfo() {
  return (
    <PersonalFeedBox>
      <UserInfoBox>
        <UserImage>
          <img
            src="https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        </UserImage>
        <Stack spacing={2} sx={{ width: '70%' }}>
          <UserSetting>
            <Typography
              variant="h1"
              sx={{
                fontSize: '28px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                display: 'block',
              }}
            >
              yoo.__.oong
            </Typography>
            <Link
              to=""
              style={{
                marginLeft: '20px',
                padding: '5px 10px',
                border: '1px solid rgb(219,219,219)',
                color: 'rgb(38,38,38)',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '3px',
              }}
            >
              프로필 편집
            </Link>
            <SettingsIcon sx={{ marginLeft: '10px' }} />
          </UserSetting>
        </Stack>
      </UserInfoBox>
    </PersonalFeedBox>
  );
}

export default PersonalInfo;
