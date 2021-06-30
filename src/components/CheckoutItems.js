import DeleteCheckoutItem from "./DeleteCheckoutItem";

const CheckoutItems = (props) => {
	const { titlelist, pricelist } = props;

	const table = [];

	titlelist.forEach((i, index) => {
		table.push(
			<tr>
				<td>
					<DeleteCheckoutItem title={i} price={pricelist[index]} />
				</td>
				<td>{i}</td>
				<td>{pricelist[index]}</td>
			</tr>
		);
	});

	return table;
};

export default CheckoutItems;
