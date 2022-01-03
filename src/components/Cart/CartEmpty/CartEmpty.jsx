import React from 'react';
import "./CartEmpty.css";

function CartEmpty() {
    return (
        <div className="flex-c al-center txt-al-center">
            <img className="CartEmpty-gif" src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" alt="" />
            {/* <img className="CartEmpty-gif" src="https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif" alt="" /> */}
            <p className="CartEmpty-txt">Your Cart is empty! Order something now...</p>
        </div>
    )
}

export default CartEmpty
