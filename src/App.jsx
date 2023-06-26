import { Route , Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import CardsExer from './Components/CardsExer'


function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='exercise/:id' element={<CardsExer/>} />
</Routes>



    </>
  )
}

export default App
