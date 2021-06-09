import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Food(props) {
  const Order = () => console.log("Encargado");

  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Title style={{ fontSize: "1.3rem" }}>{props.title}</Card.Title>
          <Card.Subtitle style={{ fontSize: "0.7rem" }}>
            {props.price}
          </Card.Subtitle>
          <Card.Text style={{ fontSize: "0.7rem" }}>{props.subtitle}</Card.Text>
          <Button variant="danger" onClick={Order}>
            Encargar ya!
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Food;
