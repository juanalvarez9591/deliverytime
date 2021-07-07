import checkoutlogo from "../images/resources/checkout.png";

const FloatingCheckout = () => {
	return (
		<div
			style={{
				position: "fixed",
				bottom: 0,
				right: 0,
				margin: "2rem",
			}}
		>
			<img
				src={checkoutlogo}
				style={{
					width: "3.5rem",
					backgroundColor: "red",
					padding: "0.3rem",
					borderRadius: "0.5rem",
				}}
			/>
		</div>
	);
};

export default FloatingCheckout;
