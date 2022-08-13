import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context";

function ShopItem({id, url}) {
    const [hovered, setHovered] = useState(false)
    const {
        cartItems,
        addCartItem,
        removeCartItem,
    } = useContext(Context)

    function itemBar() {
        return (
            <div className={`item-bar ${hovered ? "" : "disabled"}`}>
                {
                    cartItems.some(item => item.id === id)
                        ?
                        <div
                            className={`cart-icon-box ${hovered ? "" : "disabled"}`}
                            onClick={() => removeCartItem({id, url})}
                        >
                            <i className="ri-shopping-cart-fill cart"></i>
                        </div>
                        :
                        <div
                            className={`cart-icon-box ${hovered ? "" : "disabled"}`}
                            onClick={() => addCartItem({id, url})}
                        >
                            <i className="ri-shopping-cart-line cart"></i>
                        </div>
                }
            </div>
        )
    }

    // function heartIcon() {
    //     if (img.isFavorite) return (
    //         <i
    //             className="ri-heart-fill favorite"
    //             onClick={() => toggleFavorite(img.id)}
    //         ></i>
    //     )
    //     else if (hovered) return (
    //         <i
    //             className="ri-heart-line favorite"
    //             onClick={() => toggleFavorite(img.id)}
    //         ></i>
    //     )
    // }

    return (
        <div
            className={`item-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={url} className="item-image" alt=""/>

            {/*{heartIcon()}*/}
            {itemBar()}
        </div>
    )
}

ShopItem.propTypes = {
    id: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
}

export default ShopItem