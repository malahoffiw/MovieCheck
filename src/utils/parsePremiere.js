const parsePremiere = (dataPremiere) => {
    if (dataPremiere.length === 0) return ["", ""]
    const worldPremiere = dataPremiere.find(element => element.type === "WORLD_PREMIER")
    const digitalPremiere = dataPremiere.find(element => element.subType === "DIGITAL")

    let worldDate, digitalDate

    if (!worldPremiere && !digitalPremiere) {
        return ["", ""]
    }
    if (!worldPremiere) {
        digitalDate = new Date(digitalPremiere.date).toLocaleDateString(
            'ru-RU',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        )
        return ["", digitalDate]
    }
    if (!digitalPremiere) {
        worldDate = new Date(worldPremiere.date).toLocaleDateString(
            'ru-RU',
            {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
        )
        return [worldDate, ""]
    }

    worldDate = new Date(worldPremiere.date).toLocaleDateString(
        'ru-RU',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    )
    digitalDate = new Date(digitalPremiere.date).toLocaleDateString(
        'ru-RU',
        {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
    )

    return [worldDate, digitalDate]
}

export default parsePremiere