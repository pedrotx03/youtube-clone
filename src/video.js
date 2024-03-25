import{Col,Card,Button,Image}from 'react-bootstrap';
import'./App.css';

export default function Video(){
    return(
        <Col xs={12} lg={8}>
            <Card>
                <Card.Img src="https://i.chzbgr.com/full/9671582720/h944278BD/ball-leave-now"/>
                <Card.Body>
                    <Card.Title>melancia</Card.Title>
                    <Image src="https://media.inkscape.org/media/resources/render/FOTO_DE_PERFIL_MARIO.png" className='VideoPfp'></Image>
                    <strong>canal</strong>
                    <Button variant="dark">inscrever-se</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}