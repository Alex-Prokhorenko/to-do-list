import styled from 'styled-components'
import Button from "./Button";

const TaskWrapper = styled.div`
  background-color: #E8E4D8;
  width: 80%;
  border-radius: 5px;
  margin: 5px auto;
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
`
const StyledParagraph = styled.button`
  background-color: #E8E4D8;
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