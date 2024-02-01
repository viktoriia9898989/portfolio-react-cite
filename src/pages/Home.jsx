import React  from 'react';
import myPhoto from "../img/me.jpg";
import './home.css'
import { FaEnvelope, FaGithub,  FaInstagram,  FaTelegram } from "react-icons/fa";

const Home = () =>{

    
    return(
        <div>
            <div className="container-home">
                <div className="home-content">
                <img src={myPhoto} alt="" />
                <div className="greating">
                    <h4>Hello, I am <span>Viki</span></h4>
                    <p> I am a web developer fueled by enthusiasm and a strong commitment to learning</p>
                    <p>My keen interest in this field is combined with a dedication to honing my skills and applying a creative approach to every project.</p>

                    <p>I invite you to explore my portfolio, where you can see my work and experience the energy I bring to each endeavor. Thank you for your attention!</p>

                    <div className="contact">
                        <ul className="contact-list">
                        <li>
                        <a href="https://t.me/viktoria_pryk" target="blank">
                        <FaTelegram  
/>
                        </a>
                        </li>

                        <li>
                        <a href="https://github.com/viktoriia9898989" target="blank">
                        <FaGithub />
                        </a>
                        </li>

                        <li>
                        <a href="https://www.instagram.com/viktoriia.pryk?igsh=YzVkODRmOTdmMw%3D%3D&utm_source=qr" target="blank">
                        <FaInstagram />
                        </a>
                        </li>

                        <li>
                        <a href="https://t.me/viktoria_pryk" target="blank">
                        <FaEnvelope />
                        </a>
                        </li>

                        </ul>
                    </div>
                    
                </div>

            

                </div>
              
               
            </div>

        </div>

    );
};

export default Home