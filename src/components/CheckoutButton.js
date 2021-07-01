import { Button } from "react-bootstrap";
import wsp from "../images/resources/whatsappicon.png";
import { useSelector } from "react-redux";

const CheckoutButton = (props) => {
	const checkout = useSelector((state) => state.checkout);
	const { state } = props;

	const checky = {};

	checkout.titles.forEach(function (x) {
		checky[x] = (checky[x] || 0) + 1;
	});
	console.log(checky);

	const ck = Object.keys(checky);
	const cv = Object.values(checky);

	const cf = [];

	ck.forEach((i, index) => {
		cf.push(cv[index] + " " + i);
	});

	const createOrder = (state) => {
		const pos = state.pos
			? " Precisaría el POS para pagar con tarjeta."
			: "";

		return console.log(
			`Hola! podrías mandarme: ${cf.join(", ")} a ${
				state.address
			}.${pos} Muchas gracias.`
		);
	};
	return (
		<Button
			variant="success"
			id="wspbutton"
			onClick={() => createOrder(state)}
		>
			Pedir ya
			<img id="wspimgbutton" src={wsp} alt="Whatsapp icon" />
		</Button>
	);
};

export default CheckoutButton;
