import { useSelector } from "react-redux";
import CheckoutAddress from "../components/CheckoutAddress";
import CheckoutTable from "../components/CheckoutTable";

function Checkout() {
	const checkout = useSelector((state) => state.checkout);

	const empty = <p>Empty</p>;
	const notempty = (
		<>
			<CheckoutTable
				titlelist={checkout.titles}
				pricelist={checkout.prices}
			/>
			<CheckoutAddress />
		</>
	);

	return <div>{checkout.titles.length === 0 ? empty : notempty}</div>;
}

export default Checkout;
