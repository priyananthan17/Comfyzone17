import React from 'react';
import HomePage from './Pages/HomePage';
import New from './Pages/New';
import Snow from './Pages/Snow';
import Rain from './Pages/Rain';
import ShopAll from './Pages/ShopAll';
import Summer from './Pages/Summer';
import Details from './Pages/Details';
import {Route,Routes} from 'react-router-dom'
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/rain' element={<Rain/>}/>
      <Route path='/summer' element={<Summer/>}/>
      <Route path='/snow' element={<Snow/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/shopall' element={<ShopAll/>}/>
    </Routes>
    
      <Footer/>
    </div>
  )
}

export default App