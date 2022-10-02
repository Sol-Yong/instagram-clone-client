import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import Follows from './Follows';

const UserInfoBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const UserImage = styled(Box)`
  height: calc(148px + 2px);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const UserSetting = styled(Box)`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

function PersonalInfo() {
  return (
    <div style={{ marginBottom: '44px' }}>
      <UserInfoBox>
        <UserImage>
          <img
            src="https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        </UserImage>
        <Stack spacing={2} sx={{ flex: '2' }}>
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
          <Follows />
          <Box sx={{ margin: '0' }}>
            <Box component="span" sx={{ fontWeight: '600' }}>
              요혀주
            </Box>
            <br />
            <Box component="span">ㅇㄴㄴ</Box>
          </Box>
        </Stack>
      </UserInfoBox>
    </div>
  );
}

export default PersonalInfo;
