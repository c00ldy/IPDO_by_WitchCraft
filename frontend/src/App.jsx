import {Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Docs from "./Pages/Docs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/docs' element={<Docs/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
