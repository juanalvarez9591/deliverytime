import Carousel from "react-bootstrap/Carousel";

function Featured() {
	function CarouselSize() {
		if (window.innerWidth > 480) {
			return { borderRadius: "1rem", width: "40rem" };
		} else {
			return { borderRadius: "1rem", width: "20rem" };
		}
	}

	return (
		<div
			style={{
				display: "grid",
				justifyContent: "center",
				padding: "1rem",
			}}
		>
			<Carousel>
				<Carousel.Item>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/8/88/McDonald%27s_McDouble_close.jpg"
						alt="First slide"
						style={CarouselSize()}
					/>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Featured;
