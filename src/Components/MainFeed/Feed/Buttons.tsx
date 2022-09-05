import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:last-child {
    margin-left: auto;
  }

  &:hover {
    opacity: 0.5;
  }

  & svg {
    width: 26px;
    height: 26px;
  }
`;

const sizeUpAnimation = keyframes`
   0% {
    transform: none;
  }
  80% {
    transform: scale(1.3, 1.3);
  }
`;

const SFavoriteIcon = styled(FavoriteIcon)`
  color: #ed4956;
  animation: 215ms ${sizeUpAnimation} ease-in-out;
`;

function Buttons() {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const HandleHeartClick = () => setIsHeartClicked((prev) => !prev);

  return (
    <>
      <Button onClick={HandleHeartClick}>
        {isHeartClicked ? <SFavoriteIcon /> : <FavoriteBorderIcon />}
      </Button>
      <Button>
        <ModeCommentOutlinedIcon />
      </Button>
      <Button>
        <SendOutlinedIcon />
      </Button>
      <Button>
        <BookmarkBorderOutlinedIcon />
      </Button>
    </>
  );
}

export default Buttons;
