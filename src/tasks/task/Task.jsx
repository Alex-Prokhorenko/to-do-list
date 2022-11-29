import styled from 'styled-components'

const TaskWrapper = styled.div`
  background-color: dimgray;
  width:80%;
  height: 20%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px auto;
  padding: 5px 5px;
  display: flex;
  justify-content: space-between;
`

const Task = ({items, removeItem}) => {
    return <TaskWrapper>
    <p>{items.title}</p>
    <button onClick={() => removeItem(items.id)}>Remove</button>
  </TaskWrapper>
}

export default Task;