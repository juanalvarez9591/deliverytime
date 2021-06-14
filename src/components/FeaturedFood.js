import Carousel from "react-bootstrap/Carousel";
import data from "./featuredfood.json";

function Featured() {
	function CarouselSize() {
		if (window.innerWidth > 480) {
			return { borderRadius: "1rem", width: "40rem", height: "25rem" };
		} else {
			return { borderRadius: "1rem", width: "20rem", height: "12.5rem" };
		}
	}

	const CarouselComponents = data.map((i) => (
		<Carousel.Item>
			<img src={i.url} alt={i.alt} style={CarouselSize()} />
		</Carousel.Item>
	));

	return (
		<div
			style={{
				display: "grid",
				justifyContent: "center",
				padding: "1rem",
			}}
		>
			<Carousel>{CarouselComponents}</Carousel>
		</div>
	);
}

export default Featured;
