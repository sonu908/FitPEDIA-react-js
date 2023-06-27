import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ViewCard from './Components/ViewCard'


function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='exercise/:id' element={<ViewCard/>} />
</Routes>



    </>
  )
}

export default App
