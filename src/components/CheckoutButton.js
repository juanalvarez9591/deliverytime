import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
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

		const message = `Hola! podrías mandarme: ${cf.join(", ")} a ${
			state.address
		}.${pos} Muchas gracias.`;

		const phonenumber = "59892724405";
		const API = "https://api.whatsapp.com/send?phone=";

		const sendMessage =
			API + phonenumber + "&text=" + message.replace(" ", "%20");

		return sendMessage;
	};

	const handleOrder = () => {
		if (!/[\w\d]/.test(state.address)) {
		} else {
			window.location.href = createOrder(state);
		}
	};

	const handleOverlay = (props) => {
		if (/[\w\d]/.test(state.address)) {
			return <p>{null}</p>;
		} else {
			return (
				<Tooltip id="button-tooltip" {...props}>
					Te falta escribir la direccion del pedido...
				</Tooltip>
			);
		}
	};
	return (
		<>
			<OverlayTrigger placement="bottom" overlay={handleOverlay}>
				<Button
					variant="success"
					id="wspbutton"
					onClick={(e) => {
						e.preventDefault();
						handleOrder();
					}}
				>
					Pedir ya
					<img id="wspimgbutton" src={wsp} alt="Whatsapp icon" />
				</Button>
			</OverlayTrigger>
		</>
	);
};

export default CheckoutButton;
