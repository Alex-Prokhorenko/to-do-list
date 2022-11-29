import Task from "./Task";
import {useState} from "react";
import AddTask from "../addTask/AddTask";

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

  const [items, setItems] = useState(data);

  const removeItem = (id) =>  {
    setItems([...items].filter(i => i.id !== id))
  }

  const addItem = (title) => {
    setItems( [...items,
      {
        id: items.length,
        title,
        isCompleted: false
      }
    ])
    console.log(items);
  }



  return <div>

    <AddTask items={items}
             addItem={addItem}
    />

      {items.map(items => <Task key={items.id}
                                items={items}
                                removeItem={removeItem}
    />)}

  </div>
}

export default TaskContainer;