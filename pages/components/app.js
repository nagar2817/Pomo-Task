import React from 'react';
import PomodoroTimer from './TimerContext.js';
import TaskForm from './TaskForm.js';
import TaskContextContainer from './TaskContext.js';
const App = () => {
 
  return (
    <>
    <PomodoroTimer />
    <TaskContextContainer>
      <TaskForm />
    </TaskContextContainer>
    </>
  );
};

export default App;