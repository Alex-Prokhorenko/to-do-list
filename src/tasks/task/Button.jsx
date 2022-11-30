import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #590503;
  color: white;
  border-radius: 5px;
  padding: 0 3px;
  &:hover {
    background-color: #800503;
  }
`

const Button = (props) => {
  return <StyledButton {...props}/>
}

export default Button;