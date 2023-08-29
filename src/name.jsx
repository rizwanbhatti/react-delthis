import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" width="100px" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
            {props.desc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;