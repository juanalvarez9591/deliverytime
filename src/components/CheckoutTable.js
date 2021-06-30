import { Table } from "react-bootstrap";
import CheckoutItems from "./CheckoutItems";
import CheckoutTotal from "./CheckoutTotal";

const CheckoutTable = (props) => {
	const { titlelist, pricelist } = props;

	return (
		<Table striped responsive id="table">
			<tbody>
				<CheckoutItems titlelist={titlelist} pricelist={pricelist} />

				<CheckoutTotal pricelist={pricelist} />
			</tbody>
		</Table>
	);
};

export default CheckoutTable;
