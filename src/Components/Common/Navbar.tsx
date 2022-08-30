import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import textLogo from '../../images/text_logo.png';
import SearchBar from './SearchBar';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  background-color: rgb(255, 255, 255);
  z-index: 3;

  & > div {
    max-width: calc(935px + 40px);
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  width: 103px;
  height: 29px;
  margin-top: 10px;
`;

const IconsContainer = styled.div`
  display: flex;
  margin-left: 24px;
  svg {
    cursor: pointer;
    font-size: 28px;
  }

  svg:not(:last-child) {
    margin-right: 18px;
  }
`;

const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

function Navbar() {
  return (
    <Nav>
      <div>
        <Link to="/home">
          <Logo src={textLogo} alt="logo" />
        </Link>
        <SearchBar />
        <IconsContainer>
          <HomeIcon />
          <SendOutlinedIcon />
          <AddCircleOutlineIcon />
          <ExploreOutlinedIcon />
          <FavoriteBorderIcon />
          <ProfileImage
            src="https://i.ibb.co/QCX57ZR/Colorful-Smoke-1920x1080.jpg"
            alt="profile-image"
          />
        </IconsContainer>
      </div>
    </Nav>
  );
}

export default Navbar;
