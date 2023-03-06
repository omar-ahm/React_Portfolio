import React from 'react';
import {  Container, Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import projectsData from '../projects.json';

function ProjectPage() {
  return (
    <Container>
      <Row>
        {projectsData.map((project, index) => (
          <Col md={4} key={index}>
            <Project
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              repoLink={project.repoLink}
              deployedLink={project.deployedLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectPage;