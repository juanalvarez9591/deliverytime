import { Table } from "react-bootstrap";
import CheckoutItems from "./CheckoutItems";
const CheckoutTable = (props) => {
	const { titlelist, pricelist } = props;

	const total = (
		<tr>
			<td>Total:</td>
			<td></td>
			<td>200 REAIS</td>
		</tr>
	);

	return (
		<Table striped responsive id="table">
			<tbody>
				<CheckoutItems titlelist={titlelist} pricelist={pricelist} />

				{total}
			</tbody>
		</Table>
	);
};

export default CheckoutTable;
