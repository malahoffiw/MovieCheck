import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils/getClass"

function Photos() {
    const {picsArray} = useContext(Context)

    const imageElements = picsArray.map((photo, index) => (
      <Image key={photo.id} img={photo} favorite={photo.isFavorite} className={getClass(index)}/>
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos