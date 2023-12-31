import React,{useState,createContext} from 'react';
import Tasks from '../../data.js';
export const TaskContext = createContext(); 

const TaskContextContainer = ({children})=>{
  const [tasks,setTasks] = useState(Tasks);
  const [completedTasks,setCompletedTasks] = useState([]);
  return (
    <TaskContext.Provider value={{
      tasks,
      setTasks,
      completedTasks,
      setCompletedTasks
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContextContainer;