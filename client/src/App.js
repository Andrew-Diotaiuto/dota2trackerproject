import './App.css';
import CreateTracker from './components/CreateTracker';
import Display from './components/Display';
import OneTracker from './components/OneTracker';
import EditTracker from './components/EditTracker'
import Register from './components/Register';
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/createTracker/form' element={<CreateTracker/>}/>
        <Route path='/display/oneTracker/:id' element={<OneTracker/>}/>
        <Route path='/display/editTracker/:id' element={<EditTracker/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;