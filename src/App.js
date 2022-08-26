import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar  from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Buttons from './components/Sidebar/Buttons';
import Footer from './components/Footer'
import Cards from './components/Sidebar/Cards'
import Colors from "./components/Sidebar/Colors";
import Borders from './components/Sidebar/Borders';
import Animations from './components/Sidebar/Animations';
import Other from './components/Sidebar/Other'
import Tables from './components/Sidebar/Tables'

function App() {
  return (
    <BrowserRouter>
    
    <div id='wrapper'>
     <Sidebar/>
     <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
      <Navbar/> 
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/Buttons" element={<Buttons/>}/>
      <Route path="/Cards" element={<Cards/>}/>
      <Route path="/Colors" element={<Colors/>}/>
      <Route path="/Borders" element={<Borders/>}/>
      <Route path="/Animations" element={<Animations/>}/>
      <Route path="/Other" element={<Other/>}/>
      <Route path ="/Tables" element={<Tables/>}/>
      </Routes>
      <Footer/>
     </div>
     </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
