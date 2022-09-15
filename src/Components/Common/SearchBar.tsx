import { useRef, useState } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
  position: relative;
  width: 268px;
  min-width: 125px;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 1 auto;
  border-radius: 8px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  max-width: 268px;
  min-width: 125px;
  padding: 3px 16px;
  line-height: 18px;
  border: 0;
  border-radius: 8px;
  background: rgb(239, 239, 239);
  color: rgb(38, 38, 38);
  font-size: 16px;
  outline: none;
  z-index: 2;
  appearance: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
`;

const PlaceholderContanier = styled.div`
  background: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 0 16px;
  color: rgb(142, 142, 142);
  cursor: text;
  font-weight: 300;
  justify-content: center;
  left: 0;
  position: absolute;
  text-align: left;
  top: 0;
  z-index: 2;
  border-radius: 8px;
  height: 100%;
  width: 100%;

  & > div > div {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  & svg {
    margin-right: 8px;
  }

  & span {
    line-height: 25px;
  }
`;

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = () => setIsFocused(false);

  return (
    <Container>
      <SearchInput
        ref={inputRef}
        placeholder="검색"
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      {!isFocused && (
        <PlaceholderContanier onClick={handleFocus}>
          <div>
            <div>
              <SearchOutlinedIcon />
              <span>{value.length > 0 ? value : '검색'}</span>
            </div>
          </div>
        </PlaceholderContanier>
      )}
    </Container>
  );
}

export default SearchBar;
