import checkoutlogo from "../images/resources/checkout.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FloatingCheckout = () => {
	const checkoutlength = useSelector((state) => state.checkout.titles.length);

	return (
		<div
			style={{
				position: "fixed",
				bottom: 0,
				right: 0,
				margin: "2rem",
			}}
		>
			<Link to="/checkout" style={{ color: "white" }}>
				<img alt="Checkout" id="floatingcheckout" src={checkoutlogo} />
				<p id="floatingcheckoutnumber">{checkoutlength}</p>
			</Link>
		</div>
	);
};

export default FloatingCheckout;
