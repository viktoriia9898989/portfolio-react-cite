import React from "react";
import vMovio from "../img/vm.jpg";
import TicTactoe from "../img/tictactoe.jpg";
import RegSyst from "../img/regsyst.jpg";
import Clicker from "../img/clicker.jpg";
import './projects.css'
import { FaLink } from "react-icons/fa";

const Projects = () =>{
    return(
        <div>
            <ul className="projects-list">
                <li>
                <img src={vMovio} alt="" />
                <a href="https://vmovio.netlify.app" target="blank">VMovio</a>

                </li>

                <li>
                <img src={TicTactoe} alt="" />
                <a href="https://tictactoe98.netlify.app" target="blank">Tic Tac Toe</a>

                </li>

                <li>
                <img src={RegSyst} alt="" />
                <a href="https://registratinsysteam.netlify.app" target="blank">Registration Systeam</a>

                </li>

                <li>
                <img src={Clicker} alt="" />
                <a href="https://clickergamev.netlify.app" target="blank">Clicker</a>

                </li>
            </ul>
            

        </div>

    );
};

export default Projects