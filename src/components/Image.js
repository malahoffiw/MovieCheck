import React, {useState, useContext} from "react"
import {Context} from "../Context";

function Image({img, className}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const cartIcon = <i className="ri-add-circle-line cart"></i>
    const heartIcon = img.isFavorite
        ? <i
            className="ri-heart-fill favorite"
            onClick={() => toggleFavorite(img.id)}
        ></i>
        : <i
            className="ri-heart-line favorite"
            onClick={() => toggleFavorite(img.id)}
        ></i>

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {
                hovered && (
                    <>
                        {heartIcon}
                        {cartIcon}
                    </>
                )
            }
        </div>
    )
}

export default Image