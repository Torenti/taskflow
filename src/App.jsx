import './App.css'
import Header from './components/Header.jsx'
import Board from './components/Board.jsx'
import SearchSystem from './components/SearchSystem.jsx'
import TaskAdd from './components/TaskAdd.jsx'

function App() {
  return (
    <>
      <Header />
      <SearchSystem />
      <TaskAdd />
      <Board />
    </>
  )
}

export default App