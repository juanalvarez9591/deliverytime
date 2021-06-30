import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CheckoutAddress = () => {
	const [address, setAddress] = useState("");

	const inputHandler = (i) => {
		setAddress(i.target.value);
	};

	return (
		<Form onSubmit={(i) => i.preventDefault()}>
			<Form.Control
				onChange={inputHandler}
				value={address.address}
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
				/>
			</label>
		</Form>
	);
};

export default CheckoutAddress;
