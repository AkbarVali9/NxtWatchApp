import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const HeaderLogo = styled.img`
  height: 30px;
  width: 80px;
  @media screen and (min-width: 768px) {
    height: 35px;
    width: 150px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-left: 20px;
`

export const LogoutButton = styled.button`
  border: 1px solid;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-color: ${props => props.color};
  margin-left: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid grey;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-size: 12px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    margin-left: 20px;
    margin-right: 20px;
  }
`

export const ModalDesc = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 10px;
  color: ${props => props.color};
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0px;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`
