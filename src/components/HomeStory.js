import { Carousel } from "react-bootstrap";
import carousel1 from "../images/resources/brand/1.jpg";
import carousel2 from "../images/resources/brand/2.jpg";
import carousel3 from "../images/resources/brand/3.jpg";

const HomeStory = () => {
	const HomeStoryStyle = () => {
		if (window.innerWidth > 480) {
			return {
				text: {
					width: "100%",
					margin: "auto",
					fontSize: "2rem",
				},
				carousel: { width: "40rem", marginTop: "1rem" },
			};
		} else {
			return {
				text: { width: "100%", margin: "auto", fontSize: "1.2rem" },
				carousel: { width: "20rem", marginTop: "1rem" },
			};
		}
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h2 id="StoryTitle" style={HomeStoryStyle().text}>
				Desde hace más de 150 años que llevamos la comida rioplatense tu
				paladar.
			</h2>
			<h3 id="StoryText" style={HomeStoryStyle().text}>
				En sus inicios, comenzamos como un carrito de comida que ofrecía
				chivitos, milanesas, entre otras comidas típicas del Uruguay,
				pero con el paso del tiempo nuestra receta criolla de chivitos
				se popularizó, dándole el nombre de la casa. Y hoy en día nos
				convertimos en el primer restaurante 4 estrellas de la zona sur.
			</h3>
			<Carousel fade style={HomeStoryStyle().carousel}>
				<Carousel.Item>
					<img
						alt="carousel1"
						src={carousel1}
						style={{ borderRadius: "2rem", width: "100%" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						alt="carousel2"
						src={carousel2}
						style={{ borderRadius: "2rem", width: "100%" }}
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						alt="carousel3"
						src={carousel3}
						style={{ borderRadius: "2rem", width: "100%" }}
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default HomeStory;
