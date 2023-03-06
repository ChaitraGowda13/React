import React from "react";
import STYLE from "./Axisbank.module.css"
const Axisbank=()=>{
    return(
            <div className="STYLE.main">
                <div className={ STYLE.logo}>
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/5979167.546a2078ea298.jpg"></img>
                    <ul>
                        <li><a href="">Personal</a></li>
                        <li><a href="">Business</a></li>
                        <li><a href="">Priority</a></li>
                        <li><a href="">Burgundy</a></li>
                        <li><a href="">NRI</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Dil se open</a></li>

                    </ul>
                </div>
                        <div className={ STYLE.menu}>
                            <ul>
                                <li> <input type="search" placeholder="Search"></input> </li>

                                <li><button>Login</button></li>
                            </ul>
                        </div>
            </div> 
    )
}
 export default Axisbank