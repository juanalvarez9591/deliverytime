import { useSelector } from "react-redux";
import CheckoutTable from "../components/CheckoutTable";
import del from "../images/resources/delete.svg";
import { Table, Image } from "react-bootstrap";

function Checkout() {
	const checkout = useSelector((state) => state.checkout);

	const titlelist = checkout.titles.map((i) => <p>{i}</p>);

	const empty = <p>Empty</p>;
	const notempty = titlelist;

	console.log(checkout.titles.length);

	return <div>{checkout.titles.length === 0 ? empty : notempty}</div>;
}

export default Checkout;
