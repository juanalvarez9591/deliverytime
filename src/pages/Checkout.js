import { useSelector } from "react-redux";
import CheckoutData from "../components/CheckoutData";
import CheckoutTable from "../components/CheckoutTable";

function Checkout() {
	const checkout = useSelector((state) => state.checkout);

	const empty = <p>Empty</p>;
	const notempty = (
		<div id="checkout">
			<CheckoutTable
				titlelist={checkout.titles}
				pricelist={checkout.prices}
			/>
			<CheckoutData />
		</div>
	);

	return <div>{checkout.titles.length === 0 ? empty : notempty}</div>;
}

export default Checkout;
