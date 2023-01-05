import React from 'react';
import { Routes , Route} from 'react-router-dom';
import HomePage from './HomePage';

const Main = () => {

  return <div>
      <div className='main'>
           <Routes>  
               <Route path="/" element={<HomePage/>}/>
           </Routes>
        
        </div>
  </div>;
}

export default Main;