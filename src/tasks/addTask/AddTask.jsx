import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #E8E4D8;
  border-radius: 5px;
  outline: none;
  resize: none;
  border: none;
  width: 80%;
  height: 26px;
  margin: 5px auto;
  padding: 0 5px;
  font-family: Georgia, serif;
  font-style: italic;
`

const AddTask = ({addItem}) => {
  return <>
    <StyledInput type="text" placeholder="Add task..."
                 onKeyDown={e => e.key === 'Enter' && addItem(e.target.value, e) && addItem('')}/>
  </>
}

export default AddTask;