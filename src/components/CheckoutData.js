import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";

const CheckoutData = () => {
	const [address, setAddress] = useState({ address: "", pos: false });

	return <CheckoutForm state={address} setState={setAddress} />;
};

export default CheckoutData;
