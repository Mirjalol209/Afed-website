<<<<<<< HEAD
import { Routes, Route } from "react-router-dom"
=======
import "./App.css";
import Header from "./components/header/Header";
>>>>>>> 331bfc078fd7b0892316f8f8ca519125a77ab7cf

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Contact from "./pages/Contact/Contact"
function App() {
<<<<<<< HEAD
  
    return (
    
        <div className="App">
          <Routes>
          <Route path="/" element={ <Home/> } />
        <Route path="About" element={<About/>} />
        <Route path="Work" element={ <Work/> } />
        <Route path="Contact" element={<Contact/>} />
          </Routes>
       
        
        </div>
  
    )
=======
  return (
    <div className="App">
      <Header />
    </div>
  );
>>>>>>> 331bfc078fd7b0892316f8f8ca519125a77ab7cf
}
export default App;