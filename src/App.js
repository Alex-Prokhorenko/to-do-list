import './App.css';
import AddTask from "./tasks/addTask/AddTask";
import TaskContainer from "./tasks/task/TaskContainer";

function App() {
  return (
    <div className="App">
      <AddTask/>
      <TaskContainer/>
    </div>
  );
}

export default App;
