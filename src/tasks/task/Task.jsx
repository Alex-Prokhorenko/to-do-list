import styled from 'styled-components'
import Button from "./Button";

const TaskWrapper = styled.div`
  background-color: #E8E4D8;
  width: 100%;
  border-radius: 10px;
  margin: 10px auto;
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
`
const StyledParagraph = styled.button`
  background-color: #E8E4D8;
  font-size: x-large;
  border: none;
  color: ${(items) => (items.isCompleted ? '#84ab68' : '#590503')};
  text-decoration: ${(items) => (items.isCompleted ? 'line-through' : 'none')};
`

const Task = ({items, removeItem, completeItem}) => {
  return <TaskWrapper onClick={() => completeItem(items.id)}>
    <StyledParagraph {...items}>
      {items.title}
    </StyledParagraph>
    <Button onClick={
      (e) => {
        removeItem(items.id);
        e.stopPropagation();
      }}
    >Delete</Button>
  </TaskWrapper>
}

export default Task;