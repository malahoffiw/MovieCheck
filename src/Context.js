import React, {useState, useEffect} from "react"

const Context = React.createContext(undefined)

function ContextProvider({children}) {
    const [picsArray, setPicsArray] = useState([])
    const [cartItems, setCartItems] = useState([])
    const url = `https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2019-2022&field=typeNumber&search=!null&sortField=votes.kp&sortType=-1&token=${process.env.REACT_APP_KINOPOISK_API_TOKEN}`

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch(url, { signal })
            .then(res => res.json())
            .then(data => setPicsArray((data.docs)))
            .catch(e => {
                if (e.name !== "AbortError") alert(e.message)
            })

        return () => {
            controller.abort()
        }
    }, [url])

    // function toggleFavorite(id) {
    //     setPicsArray(picsArray.map(pic => {
    //         if (pic.id === id) {
    //             return {
    //                 ...pic,
    //                 isFavorite: !pic.isFavorite
    //             }
    //         }
    //
    //         return pic
    //     }))
    // }

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
            {picsArray, cartItems, addCartItem, removeCartItem, clearCart}
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}