import './App.css';
import {Col,Form,Button,Row} from 'react-bootstrap';


export default function NavBar(){
    return(
        <Form className="NavBar">
            <Row>
                <Col>
                    <Form.Control size="lg" type="text" placeholder="digite aqui"/>
                </Col>
                <Col>
                    <Button size="lg" variant='warning'>
                        pesquisar
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}