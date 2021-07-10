import del from "../images/resources/delete.svg";
import { Image } from "react-bootstrap";
import { removeTitle, removePrice } from "../redux/checkout";
import { useDispatch } from "react-redux";

const DeleteCheckoutItem = (props) => {
	const { title, price } = props;

	const dispatch = useDispatch();

	const deleteItem = (title, price) => {
		dispatch(removeTitle(title));
		dispatch(removePrice(price));
	};

	return (
		<p onClick={() => deleteItem(title, price)} id="deletecheckoutitem">
			X
		</p>
	);
};

export default DeleteCheckoutItem;
