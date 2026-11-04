import './App.css'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import SearchSystem from './components/SearchSystem.jsx'
import TaskAdd from './components/TaskAdd.jsx'
import TaskDetails from './components/TaskDetails.jsx'
import { useState, useRef, useEffect } from 'react'

function App() {
  const [tasks, setTasks] = useState(
    () => {
      return ([
        {
          id: crypto.randomUUID(),
          title: "Изучить React",
          desc: "Разобраться с useState",
          priority: "high",
          status: "to_do",
          date: Date.now()
        },
        {
          id: crypto.randomUUID(),
          title: "Изучить Rest API",
          desc: "Доделать проект",
          priority: "medium",
          status: "in_progress",
          date: Date.now()
        },
        {
          id: crypto.randomUUID(),
          title: "Сделать портфолио",
          desc: "Подготовить для отправки резюме",
          priority: "low",
          status: "to_do",
          date: Date.now()
        }
      ])
    }
  );
  const [chosenTask, setChosenTask] = useState(null);

  const dialogRef = useRef(null);

  const detailsRef = useRef(null);

  useEffect(() => {
    if (chosenTask && detailsRef.current && !detailsRef.current.open) {
      detailsRef.current.showModal();
    }
  }, [chosenTask]);

  function deleteTask(taskId) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  function updateTask(updatedTask) {
    setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  }

  function closeTaskDetails() {
    setChosenTask(null);
  }

  function closeTaskDialog() {
    detailsRef.current.close();
  }

  function openTaskAdd() {
    dialogRef.current.showModal();
  }

  function addTask(newTask) {
    setTasks(prevTasks => [...prevTasks, newTask]);
    dialogRef.current.close();
  }

  return (
    <>
      <Header openTaskAdd={openTaskAdd} />
      <SearchSystem />
      <TaskAdd taskAdd={addTask} dialogRef={dialogRef} />
      <Board tasks={tasks} setChosenTask={setChosenTask} />
      <TaskDetails
        detailsRef={detailsRef}
        chosenTask={chosenTask}
        closeTaskDetails={closeTaskDetails}
        closeTaskDialog={closeTaskDialog}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </>
  )
}

export default App