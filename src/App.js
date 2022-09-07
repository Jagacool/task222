
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Allfood from './Component/Allfood';
import Dashboard from './Component/Dashboard';
import Food from './Component/Food';
import Header from './Component/Header';
import Newfood from './Component/Newfood';
import Sidebar from './Component/Sidebar';


function App() {
  return (


<Router>
<div id="wrapper">
     <Sidebar/>
     <div id="content-wrapper" class="d-flex flex-column">


<div id="content">
    <Header/>
    <div class="container-fluid">
    <Routes>
     
      
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/food" element={<Food/>}/>
     <Route path="/allfood" element={<Allfood/>}/>
     <Route path="/newfood" element={<Newfood/>}/>


   </Routes>
   </div>
    </div>
    </div>
    </div>
   

    </Router>

   
    
    

  

  
  );
}

export default App;
