import React from 'react';

const CompletedItem = ({task})=>{
  return (
  <>
  <li>
        <span>{task.title}</span>
        <span>{task.description}</span>
        <span>{task.dueDate}</span>
        <span>{task.pomodoroCount}</span>
        <span>{task.priority}</span>
      </li>
  </>
  )
}

export default CompletedItem;