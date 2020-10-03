import React from 'react';
import NavBar from './navbar';
import './App.css';
import Dynamics from './logo1 copy.png';
import Shark from './better-shark.png';
import Football from './Football.png';
import TSE from './TSE-Logo.png';
import Background from './red-white-marble.jpg';

class Projects extends React.Component{
    render(){
        return(
            <div style={{backgroundImage: `url(${Background})`, height: "100vh"}}>
                <NavBar active="2"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <h1 style={{marginTop:"2.5vh", color:"#800000", fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold'}}>My Projects</h1>
                <div className="projects-container">
                    <div className="projects-update">
                        <img src={Dynamics} alt = "" className="projects-image"/>
                        <h1 className="projects-header">Dynamics Performance Team</h1>
                        <ul style={{textAlign:"left"}}>
                            <li>
                            Developed a dynamic front-end website for the Dynamics Performance Team and increased recognition (visits) by 80% and support by 125%
                            </li>
                            <li>
                            Utilized ReactJS to build the website, with HTML, CSS, and Bootstrap used to design the website
                            </li>
                            <li>
                            Implemented a PayPal API for donations and a Mailchimp function to subscribe users to a newsletter
                            </li>
                        </ul>
                        <a style={{color:"#800000", textDecoration:"underline"}} href="https://dynamicsperformanceteam.com/#/" target = "_blank" rel="noopener noreferrer">Link to website</a>
                        <a style={{color:"#800000"}}>   |   </a>
                        <a style={{color:"#800000", textDecoration:"underline"}} href="https://github.com/nvanny/dynamics-website" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                    <div className="projects-update">
                        <img src={Shark} alt = "" className="projects-image"/>
                        <h1 className="projects-header">College Shark</h1>
                        <ul style={{textAlign:"left"}}>
                            <li>
                            Helped lead team to develop a full-stack website which streamlines all college application info into one platform.
                            </li>
                            <li>
                            Hosted a SQL database on Azure for the college information, noSQL Firebase Database for users’ information
                            </li>
                            <li>
                            Led frontend team, developed with ReactJS + HTML, CSS, Bootstrap, and integrated Google Maps API
                            </li>
                        </ul>
                        <a style={{color:"#800000", textDecoration:"underline"}} href="https://www.college-shark.com/" target = "_blank" rel="noopener noreferrer">Link to website</a>
                        <a style={{color:"#800000"}}>   |   </a>
                        <a style={{color:"#800000", textDecoration:"underline"}} href="https://github.com/nvanny/college-shark" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                    <div className="projects-update">
                        <img src={Football} alt = "" className="projects-image"/>
                        <h1 className="projects-header">College Football Stats</h1>
                        <ul style={{textAlign:"left"}}>
                            <li>
                            Created a project to compile college football statistics of 500+ players into a mutable data frame via web scraping
                            </li>
                            <li>
                            Implemented the python libraries of Pandas to create the data frame, beautifulSoup to parse the info, and urlrequest to get the url
                            </li>
                            <li>
                            Aim to use the statistics to supply info to a machine-learning, matchup predicting model in the future
                            </li>
                        </ul>
                        <a style={{color:"#800000", textDecoration:"underline"}} href="https://github.com/nvanny/sportsStatsFinalProject" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                    <div className="projects-update">
                        <img src={TSE} alt = "" className="projects-image"/>
                        <h1 className="projects-header">TSE Recruitment Tool</h1>
                        <ul style={{textAlign:"left"}}>
                            <li>
                            Developed a primarily back-end application to streamline the application process to TSE
                            </li>
                            <li>
                            Utilized the Express.js framework and REST API to connect the back-end and front-end 
                            </li>
                            <li>
                            Hosted the users’ information on MongoDB, as well as implemented a cookie and token system to verify admins
                            </li>
                            <li>
                            This project is currently still in progress and the repo is private
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;