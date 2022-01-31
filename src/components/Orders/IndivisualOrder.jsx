import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {PRODUCTS} from '../../utils/constants';
import "./IndivisualOrder.css";

function IndivisualOrder({img, noOfItems, status}) {
	return (
		<div className="IndivisualOrder-container flex al-center j-between">
			<div className="IndivisualOrder-img-container">
				<img src={PRODUCTS[0].imgUrl[0]} alt="" />
				<span>{"18"} More Items</span>
			</div>
			
			<div className="IndivisualOrder-details">
				<p>{"19"} items</p>
				<p>Ordered On {"17th Dec"}</p>
			</div>
			
			<p>Status : {"Delivered"}</p>
			
			<ChevronRightIcon />
		</div>
	);
}

export default IndivisualOrder;
