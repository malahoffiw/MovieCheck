import React, {useContext, useState} from "react"
import {Context} from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const [inOrderProcess, setInOrderProcess] = useState(false)
    const {cartItems, clearCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = (5.99 * cartItems.length)
        .toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
        setInOrderProcess(true)
        setTimeout(() => {
            setInOrderProcess(false)
            clearCart()
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1 className="cart-page-title">Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            {
                cartItems.length > 0 &&
                <div className="order-button">
                    <button onClick={placeOrder}>
                        {
                            inOrderProcess
                                ? "Ordering..."
                                : "Place Order"
                        }
                    </button>
                </div>
            }
        </main>
    )
}

export default Cart