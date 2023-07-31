import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  font-family: 'Roboto';
  min-height: 80vh;
`

export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NoVideosHeading = styled.h1`
  font-size: 25px;
  font-weight: 550;
  color: ${props => props.headingColor};
`

export const NoVideosNote = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  height: 30px;
  width: 80px;
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 15px;
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
