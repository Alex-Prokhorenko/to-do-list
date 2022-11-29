import Task from "./Task";
import {useState} from "react";

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
    id: 2,
    title: "create second component",
    isCompleted: false
  }
]




const TaskContainer = () => {

  const [items, setItem] = useState(data);

  const removeItem = (id) =>  {
    setItem([...items].filter(i => i.id !== id))
  }

  return <div>
    {items.map(item => <Task
      key={item.id}
      item={item}
      removeItem={removeItem}
    />)}

  </div>
}

export default TaskContainer;