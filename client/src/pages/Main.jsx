import React from 'react';
import { Routes , Route} from 'react-router-dom';
import Header from '../components/Header';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

const Main = () => {

  return <div>
      <div className='main'>
          <Header/>
           <Routes>  
               <Route path="/" element={<HomePage/>}/>
               <Route path="/search" element={<SearchPage/>}/>
           </Routes>
        
        </div>
  </div>;
}

export default Main;