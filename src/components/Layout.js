import { Outlet, Link } from "react-router-dom";
import "./style.css"
import pravinLogo from "./images/pravinBlackTamil.png" 

const Layout = () => {
    return (
      <div className="page">

        <nav className="navbar">
          <div className="homeButton">
            <Link  to="/"><img src={pravinLogo} alt="img" className="logo"></img></Link>
          </div>
          <div className="menubar">
            <div>
              <Link to="/gallery"><button type="button" className="button">Gallery</button></Link>
            </div>
            <div>
              <Link to="/projects"><button type="button" className="button">Projects</button></Link>
            </div>
            <div>
              <Link to="/resume"><button type="button" className="button">Resume</button></Link>
            </div>
         </div>

        </nav>
        {/* <div className="blur">

        </div> */}
        <Outlet />
      </div>
    )
  };
  
  export default Layout;