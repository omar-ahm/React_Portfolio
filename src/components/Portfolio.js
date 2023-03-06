import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import ProfilePic from '../assets/PFP-black.png';
import ProfileImage from '../assets/macbook-Img.jpg';


function Portfolio() {
  const html = 90;
  const css = 80;
  const javascript = 65;
  const bootstrap = 95;
  const react = 75;

  return (
    <Container>
      <Row className='top-section'>
        <Col>
          <Image className='profile-pic' src={ProfilePic}  style={{width:250, padding:20, marginBottom:30, borderRadius:30}}/>
        </Col>
        
        <Col>
          <Image className='profile-image' src={ProfileImage} style={{width:'100%', height:'auto', borderRadius:30, objectFit:'cover'}} fluid />
        </Col>
      </Row>
      <h5>A self procalimed introvert who is highly motivated, organized, and technical driven with sound business acumen and the ability to thrive in a challenging, fast-paced environments.

I am passionate about technology and innovation and maintain a "continuous education" mindset when it comes to self-learning. I have strong process orientation, planning and project management skills and am able to build, maintain and grow successful working relationships with both internal and external stakeholders effectively and confidently.</h5>
      <Row>
        <Col>
          <h2 className='skills-section'>Skills</h2>
          <ProgressBar className='progressBar' now={html} label={`HTML ${html}%`} animated striped variant="success" />
          <ProgressBar className='progressBar' now={css} label={`CSS ${css}%`} animated striped variant="info" />
          <ProgressBar className='progressBar' now={javascript} label={`JavaScript ${javascript}%`} animated striped variant="warning" />
          <ProgressBar className='progressBar' now={bootstrap} label={`Bootstrap ${bootstrap}%`} animated striped variant="danger" />
          <ProgressBar className='progressBar' now={react} label={`React ${react}%`} animated striped variant="info" />
        </Col>
      </Row>
      
    </Container>
  );
}

export default Portfolio;

