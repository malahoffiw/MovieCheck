const parseBoxOffice = (dataBoxOffice) => {
    if (dataBoxOffice.length === 0) return ["", ""]

    const budgetInfo = dataBoxOffice.find(el => el.type === "BUDGET")
    const worldInfo = dataBoxOffice.find(el => el.type === "WORLD")

    const budget = budgetInfo
        ? budgetInfo.amount.toLocaleString('ru-RU', { style: 'currency', currency: budgetInfo.currencyCode || "USD"})
        : ""
    const world = worldInfo
        ? worldInfo.amount.toLocaleString('ru-RU', { style: 'currency', currency: worldInfo.currencyCode || "USD"})
        : ""

    return [budget, world]
}

export default parseBoxOffice