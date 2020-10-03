import React from 'react';
import NavBar from './navbar';
import './App.css';
import Picture from './IMG_2669.JPG';
import Github from './GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';
import LinkedIn from './linkedin-48.png';
import Background from './red-white-marble.jpg';

class Home extends React.Component{
    render(){
        return(
            <div style={{backgroundImage: `url(${Background})`}}>
                <div className = "home">
                <NavBar active="1"/>
                <div className = "home-content">
                <div className = "pic-container">
                    <img src = {Picture} alt = "" className="pic"/>
                </div>
                <div className="description-container">
                <h1 className="description-header" style={{color:"#800000"}}> Hello! </h1>
                <div className = "description">
                    <p>My name is Nicholas Vanny and I am currently a second year student studying computer science at the
                        University of California, San Diego.  I am apart of the pro-bono computer science organization,  
                        <a style={{color:"#800000", textDecoration:"underline", fontSize:"1.5vw"}} href = "https://tse.ucsd.edu" target="_blank" rel="noopener noreferrer">Triton Software Engineering (TSE)</a>
                        , on campus.  At TSE I work as a developer on a team with 5 other members.  My most proficient skills are in Java, React, and HTML/CSS.  I also have experience with Python, Pandas, Express, and SQL. 
                    </p>
                    <p>Visit me on these sites: </p> 
                    <div className = "icons-container" >
                        <a href = "https://github.com/nvanny" target="_blank" rel="noopener noreferrer">
                        <div className = "icons" >
                        <img src = {Github} alt = "" style={{width:"70%", height:"70%"}}/>
                        </div>
                        </a>
                        <a href = "https://www.linkedin.com/in/nicholas-vanny-14338b1b4/" target="_blank" rel="noopener noreferrer">
                        <div className = "icons" >
                        <img src = {LinkedIn} alt = "" style={{width:"60%", height:"60%"}}/>
                        </div>
                        </a>
                    </div>
                    <div style={{marginTop:"1.5%"}}>
                    <p>Email:</p>
                    <p style={{marginTop:"-3.5%"}}><a target="_blank" rel="noopener noreferrer" style={{color:"#800000", textDecoration:"underline", fontSize:"1.5vw"}} href = "mailto:nvannygsw@gmail.com">nvannygsw@gmail.com</a></p>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Home;