import styled from "styled-components"

import Button from "./Button";

const TaskWrapper = styled.div`
  background-color: #E8E4D8;
  width: 100%;
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`
const StyledParagraph = styled.button`
  background-color: #E8E4D8;
  font-size: x-large;
  border: none;
  color: ${(items) => (items.isCompleted ? '#16a34a' : '#991b1b')};
  text-decoration: ${(items) => (items.isCompleted ? 'line-through' : 'none')};
  font-weight: bold;
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
    />
  </TaskWrapper>
}

export default Task;