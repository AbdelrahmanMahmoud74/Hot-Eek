import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './components/Home'

function App() {
  

  return (
    <div>
      <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
</div>
  )
}

export default App
