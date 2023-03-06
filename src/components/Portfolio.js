import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFilePdf } from 'react-icons/fa';
import ProfilePic from '../components/assets/PFP-black.png';
import Resume from '../components/assets/Omar_Ahmad_Resume.pdf'
import ProfileImage from '../components/assets/macbook-Img.jpg';


function Portfolio() {
  const html = 90;
  const css = 80;
  const javascript = 70;
  const bootstrap = 85;
  const react = 75;
  const github = 'https://github.com/omar-ahm';
  const linkedin = 'https://www.linkedin.com/in/omar-ahm/';
  const email = 'omar-ahm@outlook.com';
  const phone = '+44 555 56 55 56';
//   const cv = '/path/to/cv.pdf';

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
      <Row>
        <Col>
        <div className='social-icons' d-flex justify-content-center>
          <a href={github}><FaGithub /> GitHub</a>{' '}
          <a href={linkedin}><FaLinkedin /> LinkedIn</a>{' '}
          <a href={`mailto:${email}`}><FaEnvelope /> Email</a>{' '}
          <a href={`tel:${phone}`}><FaPhone /> Phone</a>{' '}
          <a href={Resume}><FaFilePdf /> CV (PDF)</a>{' '}
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;

