import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 60px;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin-top: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`

export const NavText = styled.p`
  font-size: 16px;
  margin-left: 20px;
  font-weight: 500;
  color: ${props => props.color};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactHeading = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color};
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactImage = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 50px;
  margin-right: 10px;
`

export const ContactNote = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
`

export const NavigationSmallContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%
  height: 60px;
  padding: 10px;
  background-color : ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  align-items: center;
  @media screen and (min-width: 768px) {
      display: none;
  }
`
