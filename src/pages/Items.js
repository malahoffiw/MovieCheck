import React, {useContext} from "react"

import ShopItem from "../components/ShopItem"
import {Context} from "../Context"

function Items() {
    const {picsArray} = useContext(Context)

    const imageElements = picsArray.map((photo, index) => (
      <ShopItem key={photo.id} id={photo.id} url={photo.poster.url} />
    ))

    return (
        <main className="shop-items">
            {imageElements}
        </main>
    )
}

export default Items