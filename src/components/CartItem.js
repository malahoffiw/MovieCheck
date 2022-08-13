import React, {useContext, useState} from "react"
import {Context} from "../Context";
import PropTypes from "prop-types";

function CartItem({item}) {
    const [hovered, setHovered] = useState(false)
    const {removeCartItem} = useContext(Context)

    const cartClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={cartClassName}
                onClick={() => removeCartItem(item)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            ></i>
            <img src={item.url} width="130px"  alt="item in cart"/>
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem