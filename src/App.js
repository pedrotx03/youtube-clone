import './App.css';
import {Container, Row} from 'react-bootstrap';
import NavBar from './navbar';
import Video from './video';

function App() {
  return (
    <Container>
      <Row>
        <NavBar></NavBar>
      </Row>
      <Row>
        <Video></Video>
      </Row>
    </Container>
  );
}

export default App;
