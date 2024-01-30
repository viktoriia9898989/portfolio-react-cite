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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit, iure repellat laboriosam natus rerum beatae nostrum alias dignissimos dolores. Est vel soluta molestiae optio error magnam molestias quas distinctio ad possimus, quos quidem, nesciunt placeat, aut officiis facere dignissimos quasi minima necessitatibus iusto.</p>

                    <div className="contact">
                        <ul className="contact-list">
                        <li>
                        <a href="https://t.me/viktoria_pryk" target="blank">
                        <FaTelegram  
/>
                        </a>
                        </li>

                        <li>
                        <a href="https://t.me/viktoria_pryk" target="blank">
                        <FaGithub />
                        </a>
                        </li>

                        <li>
                        <a href="https://t.me/viktoria_pryk" target="blank">
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