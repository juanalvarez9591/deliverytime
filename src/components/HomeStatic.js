import { Button, Carousel } from "react-bootstrap";
import carousel1 from "../images/resources/brand/1.jpeg";
import carousel2 from "../images/resources/brand/2.jpeg";
import carousel3 from "../images/resources/brand/3.jpeg";
import carousel4 from "../images/resources/brand/4.jpeg";
import HomeTutorial from "./HomeTutorial";
import { Link } from "react-router-dom";
import menulogo from "../images/resources/fork.png";
import checkoutlogo from "../images/resources/checkout.png";

const HomeStatic = () => {
	return (
		<>
			<h2>
				💸 ¿Estás cansado de las comisiones de Pedidos Ya, Rappi? 💸
			</h2>
			<h3>
				🛵 ¿Te gustaría volver a trabajar con tus repartidores, sin
				tener que intermediar? 🛵
			</h3>
			<h4>
				🗺️ ¿Te gustaría utilizar un sistema similar al de Pedidos Ya,
				pero estos servicios no funcionan en tu ciudad? 🗺️
			</h4>

			<Carousel fade style={{ padding: "2rem" }}>
				<Carousel.Item>
					<img
						alt="carousel1"
						src={carousel1}
						style={{ borderRadius: "2rem", width: "50%" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						alt="carousel2"
						src={carousel2}
						style={{ borderRadius: "2rem", width: "50%" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						alt="carousel3"
						src={carousel3}
						style={{ borderRadius: "2rem", width: "50%" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						alt="carousel4"
						src={carousel4}
						style={{ borderRadius: "2rem", width: "50%" }}
					/>
				</Carousel.Item>
			</Carousel>

			<h5>
				Desarrollamos un sistema que permite a los usuarios comprar
				cómodamente en la web, sin registrarse, sin enviar datos, sin
				poner tarjetas de crédito. Mucho más fácil que llamar al local
				de comidas. La pagina hecha a medida para tu negocio estará
				pensado segun tu marca, colores, estética para ayudarte a
				impulsar al máximo tus ventas. Ofreciendo herramientas de
				gestión como, cambiar el menú dinámicamente según el día de la
				semana, automáticamente actualizar las comidas destacadas,
				precios, comunicados, etc. Hecho a medida para ahorrarte trabajo
				y que vendas más.
			</h5>
			<h1 id="TutorialText" style={{ marginTop: "0.5rem" }}>
				Andá al{" "}
				<Link to="/menu">
					menú <img alt="logo" src={menulogo}></img>
				</Link>{" "}
				y probame!
			</h1>
		</>
	);
};

export default HomeStatic;
