import React, {useState, useEffect} from "react"

const Context = React.createContext(undefined)

function ContextProvider({children}) {
    const [picsArray, setPicsArray] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPicsArray((data)))
            .catch(e => console.log(e.message))
    }, [])

    function toggleFavorite(id) {
        setPicsArray(picsArray.map(pic => {
            if (pic.id === id) return {
                ...pic,
                isFavorite: !pic.isFavorite
            }

            return pic
        }))
    }

    return (
        <Context.Provider value={{picsArray, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}