import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #E8E4D8;
  border-radius: 10px;
  outline: none;
  resize: none;
  border: none;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  font-family: Georgia, serif;
  font-style: italic;
`

const AddTask = ({addItem}) => {
  return <>
    <StyledInput type="text" placeholder="Add task..." maxLength='70'
                 onKeyDown={e => e.key === 'Enter' && addItem(e.target.value, e) && addItem('')}/>
  </>
}

export default AddTask;