import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  background-color: rgba(249, 255, 253, 1);
  position: relative;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  margin: 0;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  &.show {
    width: 423.5px;
    height: 100vh;
    visibility: visible;
    opacity: 1;
  }
  > div {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > hr {
    width: 360px;
    border: 1.5px solid rgba(241, 241, 241, 1);
    margin: 0;
  }
  > ul {
    flex: 1;
    width: 90%;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: scroll;
    > li {
      width: 90%;
      margin: 10px 0 15px 0;
      cursor: pointer;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SearchInput = styled.input`
  width: 330px;
  border-radius: 25px;
  background-color: rgba(241, 241, 241, 1);
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: rgba(147, 147, 147, 1);
  text-align: center;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  &:focus {
    outline: 2px solid ${(props) => props.color};
  }
`;

export const SearchCafeImg = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SearchCafeName = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${(props) => props.color};
  margin: 13px 0;
`;

export const SearchCafe = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 1);
  margin: 10px 0;
`;

export const SearchCafeScore = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: rgba(147, 147, 147, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  > hr {
    height: 12px;
    border: 0.8px solid rgba(147, 147, 147, 1);
    margin: 0 10px;
  }
`;

export const ShowSearchBar = styled.div`
  background-color: rgba(249, 255, 253, 1);
  width: 40px;
  height: 56px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8 ㅠpx;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: ${(props) => props.position};
  cursor: pointer;
  transition: all 0.3s;
`;

export const CloseSearchBar = styled.div`
  width: 0;
  opacity: 0;
`;
