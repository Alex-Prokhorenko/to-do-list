import styled from 'styled-components'

const TaskWrapper = styled.div`
  width:80%;
  height: 20%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px auto;
  
`

const Task = ({item}) => {
  return <TaskWrapper>
    <p>{item.title}</p>
  </TaskWrapper>
}

export default Task;