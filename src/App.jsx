import './App.css'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import SearchSystem from './components/SearchSystem.jsx'
import TaskAdd from './components/TaskAdd.jsx'
import TaskDetails from './components/TaskDetails.jsx'

function App() {
  return (
    <>
      <Header />
      <SearchSystem />
      <TaskAdd />
      <Board />
      <TaskDetails />
    </>
  )
}

export default App