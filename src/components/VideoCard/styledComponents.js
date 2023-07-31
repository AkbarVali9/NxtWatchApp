import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const TrendingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: 40px;
  }
`

export const TrendingThumbNailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TrendingProfileImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const TrendingTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color};
`

export const TrendingChannelName = styled.p`
  font-size: 16px;
  color: ${props => props.color};
`

export const TrendingViewsAndDate = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`

export const TrendingDot = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
