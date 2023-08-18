import React from 'react';
import CompletedItem from './CompletedTask.js';

const CompletedList = ({tasks})=>{
  return (
    <>
    <ul>
      {tasks.map(task=>
        <CompletedItem task={task} />)
      }
      </ul>
    </>
  )
}

export default CompletedList;