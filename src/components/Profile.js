import "./style.css"
import pravinLogo from "./images/pravinBlackTamil.png" 

const Profile=()=>{
    return(
        <div>
            <div className="home">
                <h1 className="profile_intro">Hey, This is Pravin.</h1>

                <div className="profile_body">
                    <div className="about">
                        <p className="profile_about">As an ambitious and adept undergraduate student, 
                            I possess strong organizational abilities and a 
                            proven track record of effectively handling multiple academic 
                            projects and events. With a strong foundation in both theory 
                            and practical applications, I am eager to contribute towards 
                            challenging projects that drive technological advancements and 
                            shape the future.</p>
                    </div>
                    <div className="Image">
                        <img src={pravinLogo} alt="img" className="photo"></img>
                    </div>
                </div>

                
            </div>

        </div>
        
    )
}
export default Profile;