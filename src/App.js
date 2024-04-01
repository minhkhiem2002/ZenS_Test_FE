import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Page from './pages/User/Page';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
