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
			<img id="floatingcheckoutitem" src={checkoutlogo} />
		</div>
	);
};

export default FloatingCheckout;
