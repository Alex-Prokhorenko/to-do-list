import styled from "styled-components";

const AddTaskWrapper = styled.div`
  background-color: dimgray;
  width: 80%;
  height: 20%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px auto;
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
`

const StyledInput = styled.input`
  background-color: white;
  border-radius: 5px;
  resize: none;
  outline: none;
  width: 90%;
  margin: 0 auto;
`

const AddTask = ({addItem}) => {
  return <AddTaskWrapper>
    <StyledInput type="text" placeholder="Add task..." onKeyDown={e => e.key === 'Enter' && addItem(e.target.value)}/>
  </AddTaskWrapper>
}

export default AddTask;