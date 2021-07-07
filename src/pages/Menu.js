import CreateMenu from "../components/CreateMenu";
import FeaturedFood from "../components/FeaturedFood";
import FloatingCheckout from "../components/FloatingCheckout";

function Menu() {
	return (
		<div>
			<FeaturedFood />
			<CreateMenu />
			<FloatingCheckout />
		</div>
	);
}

export default Menu;
