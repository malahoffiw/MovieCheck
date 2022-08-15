const parseStaff = (staff) => {
    const parsedStaff = {
        actors: [],
        director: {
            type: "Режиссер",
            name: "",
            photo: "",
        },
        writer: {
            type: "Сценарист",
            name: "",
            photo: "",
        },
        operator: {
            type: "Оператор",
            name: "",
            photo: "",
        },
    }

    staff.forEach(member => {
        switch (member.professionKey) {
            case "DIRECTOR":
                if (parsedStaff.director.name === "") {
                    parsedStaff.director.name = member.nameRu
                    parsedStaff.director.photo = member.posterUrl
                }
                break
            case "ACTOR":
                if (parsedStaff.actors.length < 5) {
                    parsedStaff.actors.push({
                        type: "Актер",
                        name: member.nameRu,
                        photo: member.posterUrl
                    })
                }
                break
            case "WRITER":
                if (parsedStaff.writer.name === "") {
                    parsedStaff.writer.name = member.nameRu
                    parsedStaff.writer.photo = member.posterUrl
                }
                break
            case "OPERATOR":
                if (parsedStaff.operator.name === "") {
                    parsedStaff.operator.name = member.nameRu
                    parsedStaff.operator.photo = member.posterUrl
                }
                break
            default:
                break
        }
    })

    return parsedStaff
}

export default parseStaff