import React from 'react';
import NavBar from './navbar';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import CollegeResume from './College Resume Update.pdf';
import Background from './red-white-marble.jpg';

class Resume extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            setNumPages: null,
            pageNumber: 1, 
            setPageNumber: 1     
        }
        //this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    }
 
    render(){
        return(
            <div style={{backgroundImage: `url(${Background})`, height:"100vh"}}>
                <NavBar active="3"/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <h1 style={{marginTop:"2.5vh", color:"#800000", fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold'}}>Resume</h1>
                <div className="resume" >
                <Document file={CollegeResume} >
                <Page pageNumber={this.state.pageNumber} scale="1.25"/>
                </Document> 
                </div>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
                <a style={{color:"#800000", textDecoration:"underline", fontFamily: 'Open Sans, sans-serif', fontWeight: 'normal'}} href={CollegeResume} target="_blank" rel="noopener noreferrer"> Download/Print here</a> 
            </div>
        )
    }
}
export default Resume;