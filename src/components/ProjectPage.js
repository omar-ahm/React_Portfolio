import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Project1 from '../components/assets/Eco-Travel-App.png';
import Project2 from '../components/assets/Team-Generator.png';
import Project3 from '../components/assets/readme-generator.png';
import Project4 from '../components/assets/weather-dashboard.png';
import Project5 from '../components/assets/daily-planner.png';
import Project6 from '../components/assets/code-quiz.png';


function ProjectPage() {
  return (
    <Container className="projects-page my-5">
      <h1 className="text-center mb-5">Projects</h1>
      <Row className="gx-5">

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img className='card-img' variant="top" src={Project1} alt='Project1' />
            <Card.Body>
              <Card.Title>Eco Travel App - Project</Card.Title>
              <Card.Text >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in bibendum ex. Duis vitae velit eleifend, aliquet ex id, eleifend purus.
              </Card.Text>
              <Button style={{background:'#FE9E73'}} variant="primary" href="https://github.com/omar-ahm/Eco-Travel-Planner">View Repo</Button>
              <hr />
              <Button style={{background:'#43A075'}} variant="primary" href="https://omar-ahm.github.io/Eco-Travel-Planner/">View Deployed</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
            <Card.Img className='card-img' variant="top" src={Project2} alt='Project2' />
            <Card.Body>
              <Card.Title>Team Profile Generator</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in bibendum ex. Duis vitae velit eleifend, aliquet ex id, eleifend purus.
              </Card.Text>
              <Button style={{background:'#FE9E73'}} variant="primary" href="https://github.com/omar-ahm/WK12-Team-Profile-Generator">View Repo</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card>
          <Card.Img className='card-img' variant="top" src={Project3} alt='Project3' />
            <Card.Body>
              <Card.Title>README Generator</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in bibendum ex. Duis vitae velit eleifend, aliquet ex id, eleifend purus.
              </Card.Text>
              <Button style={{background:'#FE9E73'}} variant="primary" href="https://github.com/omar-ahm/WK11-Professional-README-Generator">View Repo</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
          <Card.Img className='card-img' variant="top" src={Project4} alt='Project4' />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in bibendum ex. Duis vitae velit eleifend, aliquet ex id, eleifend purus.
              </Card.Text>
              <Button style={{background:'#FE9E73'}} variant="primary" href="https://github.com/omar-ahm/WK8-Weather-Dashboard">View Repo</Button>
              <hr />
              <Button style={{background:'#43A075'}} variant="primary" href="https://omar-ahm.github.io/WK8-Weather-Dashboard/">View Deployed</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
          <Card.Img className='card-img' variant="top" src={Project5} alt='Project5' />
            <Card.Body>
              <Card.Title>Daily Planner</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in bibendum ex. Duis vitae velit eleifend, aliquet ex id, eleifend purus.
              </Card.Text>
              <Button style={{background:'#FE9E73'}} variant="primary" href="https://github.com/omar-ahm/WK7-Daily_Planner_App">View Repo</Button>
              <hr />
              <Button style={{background:'#43A075'}} variant="primary" href="https://omar-ahm.github.io/WK7-Daily_Planner_App/">View Deployed</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card>
          <Card.Img className='card-img' variant="top" src={Project6} alt='Project6' />
            <Card.Body>
              <Card.Title>Code Quiz</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in bibendum ex. Duis vitae velit eleifend, aliquet ex id, eleifend purus.
              </Card.Text>
              <Button style={{background:'#FE9E73'}} variant="primary" href="https://github.com/omar-ahm/WK6_Code_Quiz_Challenge">View Repo</Button>
              <hr />
              <Button style={{background:'#43A075'}} variant="primary" href="https://omar-ahm.github.io/WK6_Code_Quiz_Challenge/">View Deployed</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default ProjectPage