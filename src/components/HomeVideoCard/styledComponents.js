import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  background: none;
  width: 100%;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const ThumbNailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 10px;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

export const Title = styled.p`
  font-size: 16px;
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-size: 15px;
  margin-top: 2px;
  color: ${props => props.color};
`

export const ViewsAndDate = styled.p`
  font-size: 14px;
  margin-top: 2px;
  color: ${props => props.color};
`

export const Dot = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
