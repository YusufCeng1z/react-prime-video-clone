
import {Routes,Route,Link,NavLink} from 'react-router-dom';
import Home from './pages/Home';
import './style.css';

import Header from './compenents/Header';


function App() {
  return (
    <>  
     <Header></Header>

     <div className='app'>
     <Routes>
        <Route path='/' element={<Home />}></Route>
     </Routes>
     </div>
     </>
  );
}

export default App;
