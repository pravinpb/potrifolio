import "./style.css"

import "./style.css"
import img1 from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"
import img5 from "./images/5.jpg"
import img6 from "./images/6.jpg"
import img7 from "./images/7.jpg"
import img8 from "./images/8.jpg"
import img9 from "./images/9.jpg"
import img10 from "./images/10.jpg"
import img11 from "./images/11.jpg"
import img12 from "./images/12.jpg"
import img13 from "./images/13.jpg"
import img14 from "./images/14.jpg"



const Gallery=()=>{
    return(
        <div>
            <div className="gallery">
                <h1 className="gallery_intro">My Snaps.</h1>
            </div>

            <div className="image_grid">

                <div className="imge1">
                    <img src={img1} alt="img"></img>
                </div>

                <div className="imge2">
                    <img src={img2} alt="img"></img>
                </div>

                <div className="imge3">
                    <img src={img3} alt="img"></img>
                </div>

                <div className="imge4">
                    <img src={img4} alt="img"></img>
                </div>

                <div className="imge5">
                    <img src={img5} alt="img"></img>
                </div>

                <div className="imge6">
                    <img src={img6} alt="img"></img>
                </div>

                <div className="imge7">
                    <img src={img7} alt="img"></img>
                </div>

                <div className="imge8">
                    <img src={img8} alt="img"></img>
                </div>

                <div className="imge9">
                    <img src={img9} alt="img"></img>
                </div>

                <div className="imge10">
                    <img src={img10} alt="img"></img>
                </div>
                
                <div className="imge11">
                    <img src={img11} alt="img"></img>
                </div>
                
                <div className="imge12">
                    <img src={img12} alt="img"></img>
                </div>
                
                <div className="imge13">
                    <img src={img13} alt="img"></img>
                </div>
                
                <div className="imge14">
                    <img src={img14} alt="img"></img>
                </div>
            </div>
        </div>
    )
}
export default Gallery;