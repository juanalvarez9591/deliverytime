import { useSelector } from "react-redux";
import CheckoutData from "../components/CheckoutData";
import CheckoutTable from "../components/CheckoutTable";
import CheckoutEmpty from "../components/CheckoutEmpty";

function Checkout() {
	const checkout = useSelector((state) => state.checkout);

	const empty = <CheckoutEmpty />;
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
