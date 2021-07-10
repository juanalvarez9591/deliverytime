import checkoutlogo from "../images/resources/checkout.png";
import { useSelector } from "react-redux";

const FloatingCheckout = () => {
	const checkoutlength = useSelector((state) => state.checkout.titles.length);
	const empty = <img id="floatingcheckoutitem" src={checkoutlogo} />;
	const notempty = <p id="floatingcheckoutitem">{checkoutlength}</p>;

	return (
		<div
			style={{
				position: "fixed",
				bottom: 0,
				right: 0,
				margin: "2rem",
			}}
		>
			{checkoutlength == 0 ? empty : notempty}
		</div>
	);
};

export default FloatingCheckout;
