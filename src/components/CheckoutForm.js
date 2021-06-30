import { Form } from "react-bootstrap";

const CheckoutForm = (props) => {
	const { state, setState } = props;

	const inputHandler = (i) => {
		setState({ ...state, address: i.target.value });
	};

	return (
		<Form onSubmit={(i) => i.preventDefault()}>
			<Form.Control
				onChange={inputHandler}
				value={state.state}
				placeholder="Ingresa a donde querés que te manden el pedido (incluí detalles de cómo llegar si lo crees necesario)"
			/>
			<Form.Text className="text-muted">
				No almacenamos tu dirección ni ningún tipo de informacion...
			</Form.Text>
			<label>
				<Form.Check
					id="checkbox"
					type="checkbox"
					label="Pagás con tarjeta (te llevamos el POS a tu casa)"
					onClick={() =>
						state.pos
							? setState({ ...state, pos: false })
							: setState({ ...state, pos: true })
					}
				/>
			</label>
		</Form>
	);
};

export default CheckoutForm;
