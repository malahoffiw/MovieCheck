import React, {useState, useEffect} from "react"

const Context = React.createContext(undefined)

function ContextProvider({children}) {
    const [picsArray, setPicsArray] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPicsArray((data)))
            .catch(e => console.log(e.message))
    }, [])

    function toggleFavorite(id) {
        setPicsArray(picsArray.map(pic => {
            if (pic.id === id) {
                return {
                    ...pic,
                    isFavorite: !pic.isFavorite
                }
            }

            return pic
        }))
    }

    function addCartItem(chosenPic) {
        setCartItems(prevCart => [
                ...prevCart,
                chosenPic
            ])
    }

    function removeCartItem(chosenPic) {
        setCartItems(prevCart => prevCart.filter(item => item.id !== chosenPic.id))
    }

    function clearCart() {
        setCartItems([])
    }

    return (
        <Context.Provider value={
            {picsArray, cartItems, toggleFavorite, addCartItem, removeCartItem, clearCart}
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}