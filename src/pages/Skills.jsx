import React from "react";

import {
    FaCertificate
} from "react-icons/fa";
import './skills.css'

const Skills = () =>{
    const iconStyle = { color: 'rgb(105, 46, 122)' , marginRight:' 15px'};
    return(


     <div className="main">

       
    
            <div className="skill-container">
                <h1 className="title_text">My Tech Slills</h1>

                <div className="skill-box">
                    <span className="title-skill">html</span>
                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">95%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title-skill">css</span>
                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">85%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title-skill">scss</span>
                    <div className="skill-bar">
                        <span className="skill-per scss">
                            <span className="tooltip">55%</span>
                        </span>
                    </div>
                </div>

                <div className="skill-box">
                    <span className="title-skill">JavaScript</span>
                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
            </div>

            <div className="soft-skills-box">
                <div className="soft-skills-title">Soft Skils</div>
                   

                    <ul className="soft-skills-list">
                        <li> <FaCertificate style={iconStyle}/>Teamwork</li>
                        <li> <FaCertificate style={iconStyle}/> Creativity</li>
                        <li>  <FaCertificate style={iconStyle}/>Willingnes to learn</li>
                        <li> <FaCertificate style={iconStyle}/>Motivated</li>
                        <li> <FaCertificate style={iconStyle}/>Dependability</li>
                    </ul>
            </div>


            </div>

           

    );
};

export default Skills