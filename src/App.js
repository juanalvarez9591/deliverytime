import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const hamburger =
  "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/165384.jpg";

function App() {
  const Order = () => console.log("Encargado");

  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={hamburger} />
        <Card.Body>
          <Card.Title style={{ fontSize: "1.3rem" }}>
            Hamburgesa con doble queso
          </Card.Title>
          <Card.Text style={{ fontSize: "0.7rem" }}>
            Con mayonesa, ketchup y doble queso cheddar. Incluye papas fritas!
          </Card.Text>
          <Button variant="primary" onClick={Order}>
            Encargar ya!
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
