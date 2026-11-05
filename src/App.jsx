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
      const taskFlowTasks = localStorage.getItem("taskflow_tasks");
      if (taskFlowTasks) {
        return (JSON.parse(taskFlowTasks));
      }
      else {
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
    }
  );

  useEffect(() => {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks))
  }, [tasks]);

  const [chosenTask, setChosenTask] = useState(null);

  const [titleToFind, setTitleToFind] = useState("");

  const [statusCheck, setStatusCheck] = useState([]);

  const [priorityCheck, setPriorityCheck] = useState([]);

  const [sortRule, setSortRule] = useState("newest");

  function compare(checkItem, item) {
    if (checkItem.length === 0) { return true; }
    return checkItem.includes(item);
  }

  const filteredTasks = tasks.filter(task => compare(priorityCheck, task.priority) && compare(statusCheck, task.status) && task.title.toLowerCase().includes(titleToFind.toLowerCase()));
  const sortedTasks = [...filteredTasks];
  if (sortRule === "oldest") {
    sortedTasks.sort((a, b) => a.date - b.date);
  } else {
    sortedTasks.sort((a, b) => b.date - a.date);
  }


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
      <SearchSystem
        titleToFind={titleToFind}
        setTitleToFind={setTitleToFind}
        statusCheck={statusCheck}
        setStatusCheck={setStatusCheck}
        priorityCheck={priorityCheck}
        setPriorityCheck={setPriorityCheck}
        sortRule={sortRule}
        setSortRule={setSortRule}
      />
      <TaskAdd taskAdd={addTask} dialogRef={dialogRef} />
      <Board tasks={sortedTasks} setChosenTask={setChosenTask} />
      <TaskDetails
        key={chosenTask?.id}
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