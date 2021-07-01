import React, { useState } from "react";
import CheckoutButton from "./CheckoutButton";
import CheckoutForm from "./CheckoutForm";

const CheckoutData = () => {
	const [dataform, setDataForm] = useState({ address: "", pos: false });
	console.log(dataform);

	return (
		<div>
			<CheckoutForm state={dataform} setState={setDataForm} />
			<CheckoutButton state={dataform} />
		</div>
	);
};

export default CheckoutData;
