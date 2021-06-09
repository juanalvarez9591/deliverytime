import Food from "./components/Food";
import data from "./components/menu.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

let Chivitos = data.chivito.map((i) => (
  <Col key={i.key}>
    <Food
      title={i.title}
      subtitle={i.subtitle}
      price={i.price}
      url={i.url}
      key={i.key}
    />
  </Col>
));

let chiva = [];
Chivitos.forEach((i) => chiva.push());

function App() {
  return (
    <>
      <Container>
        <Row>{Chivitos}</Row>
      </Container>
    </>
  );
}

export default App;
