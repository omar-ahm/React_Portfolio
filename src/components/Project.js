import React from 'react';
import { Card, Button } from 'react-bootstrap';

// Import the image files
import ecoTravelAppImg from '../assets/Eco-Travel-App.png';
import teamGeneratorImg from '../assets/Team-Generator.png';
import readmeGeneratorImg from '../assets/readme-generator.png';
import weatherDashboardImg from '../assets/weather-dashboard.png';
import dailyPlannerImg from '../assets/daily-planner.png';
import codeQuizImg from '../assets/code-quiz.png';

function Project(props) {
  // Map the project title to the corresponding image file
  const imageSrcMap = {
    'Eco Travel App - Project': ecoTravelAppImg,
    'Team Profile Generator': teamGeneratorImg,
    'README Generator': readmeGeneratorImg,
    'Weather Dashboard': weatherDashboardImg,
    'Daily Planner': dailyPlannerImg,
    'Code Quiz': codeQuizImg
  };

  // Get the corresponding image file based on the project title
  const imageSrc = imageSrcMap[props.title];

  return (
    <div project-container>
    <Card>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button href={props.repoLink}>View Code</Button>{' '}
        {props.deployedLink && <Button href={props.deployedLink}>View App</Button>}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Project;
