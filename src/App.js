
import './Components/UsersTable.js';
import {useRef} from 'react';
import { Col, Row } from 'reactstrap';
import UsersTable from './Components/UsersTable.js';
function App() {
  const scollToRef = useRef();  
  
 
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container px-5">
                <a className="navbar-brand" href="#page-top">Nemesis Consultants LLP Assessment</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
              
                </div>
            </div>
        </nav>
        <header className="masthead text-center text-white">
            <div className="masthead-content">
                <div className="container px-5">
                    <h1 className="masthead-heading mb-0">Data Manipulation</h1>
                    <h2 style={{fontSize:'30px'}} className="masthead-subheading mb-0">using ReactJs Material Table with axion for data fetching</h2>
                    <a  className="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll"  onClick={() => scollToRef.current.scrollIntoView()}>Learn More</a>
                </div>
            </div>
            <div className="bg-circle-1 bg-circle"></div>
            <div className="bg-circle-2 bg-circle"></div>
            <div className="bg-circle-3 bg-circle"></div>
            <div className="bg-circle-4 bg-circle"></div>
        </header>
        <div ref={scollToRef}>
        <UsersTable/>
        </div>
      
        <footer className="py-5 bg-black">
            <div style={{paddingLeft:'0%'}}><p className="m-0 text-center text-white small">Developed by Harsh Jain</p></div>
         <Row>
           
            <Col>
            <a href="https://github.com/codArtist" target="_blank" >
              <h2 style={{paddingLeft:'20%',paddingTop:'30px'}}>Github</h2>
            </a>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/in/harsh-jain2001/" target="_blank" >
              <h2 style={{paddingLeft:'25%',paddingTop:'30px'}}>LinkedIn</h2>
            </a>
            </Col>
            <Col>
            <a href="https://www.instagram.com/harshabcd9/" target="_blank" >
              <h2 style={{paddingLeft:'30%',paddingTop:'30px'}}>Instagram</h2>
            </a>
            </Col>

         
            </Row>
        </footer>

        </>
  );
}

export default App;
