import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
  font-family: 'Roboto';
`

export const PlayVideoTitle = styled.p`
  font-size: 25px;
  color: ${props => props.color};
`

export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PlayVideoStatus = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color};
`

export const PlayVideoDot = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  color: ${props => props.color};
`

export const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 550;
  margin-left: 5px;
  color: ${props => props.color};
  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const HrLine = styled.hr`
  border: 1px solid #909090;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelImage = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  margin-right: 20px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
  color: ${props => props.color};
`

export const ChannelSubscribers = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`

export const ChannelDescription = styled.p`
  font-size: 18px;
  color: ${props => props.color};
`

export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
