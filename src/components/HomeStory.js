import { Carousel } from "react-bootstrap";
import carousel1 from "../images/resources/brand/1.jpg";
import carousel2 from "../images/resources/brand/2.jpg";
import carousel3 from "../images/resources/brand/3.jpg";

const HomeStory = () => {
	return (
		<>
			<h2 id="StoryTitle">
				Desde hace más de 150 años que llevamos la comida rioplatense a
				las Islas Canarias.
			</h2>
			<h3 id="StoryText">
				En sus inicios, comenzamos como un carrito de comida que ofrecía
				chivitos, milanesas, entre otras comidas típicas del Uruguay,
				pero con el paso del tiempo nuestra receta criolla de chivitos
				se popularizó, dándole el nombre de la casa. Y hoy en día nos
				convertimos en el primer restaurante 4 estrellas de la zona sur
				de las Islas Canarias.
			</h3>
			<Carousel controls={false} fade>
				<Carousel.Item>
					<img
						alt="carousel1"
						src={carousel1}
						style={{ borderRadius: "2rem" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						alt="carousel2"
						src={carousel2}
						style={{ borderRadius: "2rem" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						alt="carousel3"
						src={carousel3}
						style={{ borderRadius: "2rem" }}
					/>
				</Carousel.Item>
			</Carousel>
		</>
	);
};

export default HomeStory;
