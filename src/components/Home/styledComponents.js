import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 240px;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`

export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerImage = styled.img`
  height: 30px;
  width: 150px;
`

export const BannerButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 2px solid #000000;
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  background: none;
`

export const BannerText = styled.p`
  font-size: 15px;
  color: #000000;
  @media screen and (min-width: 576px) {
    font-size: 28px;
  }
`

export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 2px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  height: 40px;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  width: 80px;
  border: none;
`

export const SearchInput = styled.input`
  font-size: 16px;
  font-weight: 500;
  background: none;
  outline: none;
  border: none;
  width: 100%;
  padding: 5px;
  color: ${props => props.color};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
