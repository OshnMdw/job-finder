import React from 'react'
import Job from '../../assets/characters-looking-job.jpg'
import { Button, Col, Container, Form, Row, Image } from "react-bootstrap";
import Font from 'react-font'
import './homepageStyle.css'
import Searchbar from '../../components/Searchbar';

function HomepageView() {
  return (
    <Container className='container-homepage'>
      <Row>
        <Col className="text-center"> 
            <Font family='Georgia'>
                <h1 className='main-text'>DISCOVER <br/> MORE THAN</h1>
                <h1 className='job-text'>5000+ JOBS</h1>
                <h6 className='sub-text'>Great platform for the job seeker that searching for <br/> new career heights and passionate about startups.</h6>
            </Font>
            
        </Col>
        <Col style={{ marginLeft: '5rem' }}>
          <Image style={{ width: 800, height: 630}} src={Job}/>
        </Col>
      </Row>
      <Searchbar/>
    </Container>
  )
}

export default HomepageView