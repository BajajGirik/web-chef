import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Checkout({cart, shipping, checkout}) {
	const [step, setStep] = useState(0);
	
	return
	(<div className="p-container">
	
		
	</div>);
}

function mapStateToProps(state) {
	return {
		cart: state.cart,
		shipping: state.shipping,
		checkout: state.checkout.stage,
	};
}

export default Checkout;
