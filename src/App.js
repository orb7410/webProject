// import logo from './assets/logo.png';
import React from 'react';
import './App.css';
import Navebar from './Navebar';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import QAndA from './pages/QAndA';
import FindMyJewelry from './pages/FindMyJewelry';
import JewelryDetails from './pages/JewelryDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Navebar />} >
                <Route index element={<Home />} />
                <Route path="find-jewelry" element={<FindMyJewelry />} />
                <Route path="jewelry-details/:id" element={<JewelryDetails />} />
                <Route path="my-account" element={<MyAccount />} />
                <Route path="q-a" element={<QAndA />}/>
            </Route>
        </Routes>
    </Router>






    // <div className="App">
    //   <header className="App-header">
    //         <Navebar/>
    //         <Switch>
    //             <Route path="/find-my-jewelry" component={FindMyJewelry} />
    //         </Switch>
    //   </header>

      
  
    // </div>
  );
}

export default App;
