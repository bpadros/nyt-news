import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Login from './components/Login';
import Reviews from './components/Reviews';
import { Route, Routes } from 'react-router-dom';
import Results from './components/Results';

function App() {
  return (
    <>
    <div className='container'>
    <Routes>
      <Route exact path='/results' element={<Results></Results>}/>
      <Route exact path='/' element={<Reviews></Reviews>}/>
      
      
    </Routes>
     {/* <Login></Login> */}
    
    </div>
    </>
  );
}

export default App;
