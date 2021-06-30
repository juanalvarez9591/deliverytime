const CheckoutTotal = (props) => {
	const { pricelist } = props;

	let total = 0;
	const currency = " UYU";

	for (let i = 0; i < pricelist.length; i++) {
		total += parseInt(pricelist[i].replace(/\D/, ""));
	}

	return (
		<tr>
			<td>Total:</td>
			<td></td>
			<td>{total + currency}</td>
		</tr>
	);
};

export default CheckoutTotal;
