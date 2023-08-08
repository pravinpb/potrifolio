import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';  
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Profile from './components/Profile.js';
import Gallery from "./components/Gallery.js";

function App() {

  // const [show,setshow]=useState(false)

  // function myfunhome1(){
  //   setshow(!show)
  // }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Profile />} /> 
        <Route path="Resume"  element={<Resume />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Gallery" element={<Gallery />} />
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
};


export default App;