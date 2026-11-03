import './App.css'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import SearchSystem from './components/SearchSystem.jsx'
import TaskAdd from './components/TaskAdd.jsx'
import TaskDetails from './components/TaskDetails.jsx'
import { useState } from 'react'

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

  return (
    <>
      <Header />
      <SearchSystem />
      <TaskAdd />
      <Board tasks={tasks} />
      <TaskDetails />
    </>
  )
}

export default App