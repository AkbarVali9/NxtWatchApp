import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  min-height: 100vh;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Image = styled.img`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  width: 400px;
`

export const LoginLogo = styled.img`
  width: 200px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 18px;
  height: 35px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
`

export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #ff0b37;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #475569;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: #475569;
  outline: none;
  padding: 10px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`

export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 5px;
`

export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #1e293b;
`
