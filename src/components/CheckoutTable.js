import { Table } from "react-bootstrap";

const CheckoutTable = (props) => {
	const { titlelist, pricelist, deletebutton } = props;
	return (
		<Table id="table">
			<tbody>{deletebutton}</tbody>
			<tbody>{titlelist}</tbody>
			<tbody>{pricelist}</tbody>
		</Table>
	);
};

export default CheckoutTable;
