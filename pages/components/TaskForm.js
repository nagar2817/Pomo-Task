import React, { useState, useRef } from 'react';
import TaskItem from './TaskItem';
import CompletedItem from './CompletedTasks.js';
import Tasks from '../../data.js';
const TaskForm = () => {
  const [tasks, setTasks] = useState(Tasks);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);
  const [completedTasks, setCompletedTasks] = useState([]);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dueDateRef = useRef(null);
  const pomodoroCountRef = useRef(null);
  const priorityRef = useRef(null);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the task details in a single object
    const newTask = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      pomodoroCount: pomodoroCountRef.current.value,
      priority: priorityRef.current.value,
      completed: false,
    };

    if (taskBeingEdited) {
      // Update the existing task
      const updatedTasks = tasks.map((task) =>
        task === taskBeingEdited ? newTask : task
      );
      setTasks(updatedTasks);
      setTaskBeingEdited(null);
    } else {
      // Add the new task to the list of tasks
      setTasks([...tasks, newTask]);
    }

    // Reset form fields
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dueDateRef.current.value = '';
    pomodoroCountRef.current.value = '';
    priorityRef.current.value = '';
  };

  const handleEdit = (task) => {
    setTaskBeingEdited(task);
    titleRef.current.value = task.title;
    descriptionRef.current.value = task.description;
    dueDateRef.current.value = task.dueDate;
    pomodoroCountRef.current.value = task.pomodoroCount;
    priorityRef.current.value = task.priority;
  };

  const handleDelete = (task) => {
    const newDetails = tasks.filter((currentTask) => currentTask != task);
    setTasks(newDetails);
  };

  const handleComplete = (task) => {
    task.completed = true;
    setTasks(tasks.filter((t) => t !== task));
    setCompletedTasks([...completedTasks, task]);
  };
  const handleToggleCompletedTasks = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Task Title:
          <input type="text" ref={titleRef} />
        </label>
        <label>
          Task Description:
          <textarea ref={descriptionRef}></textarea>
        </label>
        <label>
          Due Date:
          <input type="date" ref={dueDateRef} />
        </label>
        <label>
          Number of Pomodoros Needed:
          <input type="number" ref={pomodoroCountRef} />
        </label>
        <label>
          Priority:
          <select ref={priorityRef}>
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button type="submit">{taskBeingEdited ? 'Save' : 'Add'}</button>
      </form>
      <h2>Active Task </h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))}
      </ul>
      <button onClick={handleToggleCompletedTasks}>
        {showCompletedTasks ? 'Hide Completed Tasks' : 'Show Completed Tasks'}
      </button>

      {showCompletedTasks && (
        <>
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <CompletedItem key={index} task={task} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default TaskForm;
