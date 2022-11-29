import Task from "./Task";

const data = [
  {
    id: 0,
    title: "create react app",
    isCompleted: true
  },
  {
    id: 1,
    title: "create first component",
    isCompleted: false
  },
  {
    id: 0,
    title: "create second component",
    isCompleted: false
  }
]



const TaskContainer = () => {
  return <div>
    {data.map(item => <Task item={item}/>)}
  </div>
}

export default TaskContainer;