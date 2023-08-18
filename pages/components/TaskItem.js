import React,{useState} from 'react';

const TaskItem = ({ task, onEdit, onDelete,onComplete }) => {
  const [com,setCom] = useState(false);
  const handleEdit = () => {
    onEdit(task);
  };

  const handleDelete = () => {
    onDelete(task);
  };
  const handleComplete = ()=>{
    setCom(!com);
    onComplete(task);
  }

  return (
    <li>
      <input type="checkbox" checked={false} onChange={handleComplete}/>
      <span>{task.title}</span>
      <span>{task.description}</span>
      <span>{task.dueDate}</span>
      <span>{task.pomodoroCount}</span>
      <span>{task.priority}</span>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;