import styled from 'styled-components';

const Container = styled.div`
  border-radius: 8px;
  align-items: center;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  height: 36px;
  min-width: 125px;
  position: relative;
  width: 268px;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 268px;
  min-width: 125px;
  border: 0;
  margin-left: 24px;
  background: rgb(239, 239, 239);
  border-radius: 8px;
  box-sizing: border-box;
  color: rgb(38, 38, 38);
  font-size: 16px;
  height: 100%;
  outline: none;
  padding: 3px 16px;
`;

function SearchBar() {
  return (
    <Container>
      <SearchInput placeholder="검색" type="text" />
    </Container>
  );
}

export default SearchBar;
