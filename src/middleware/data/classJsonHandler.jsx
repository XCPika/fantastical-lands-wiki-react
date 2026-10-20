
const safePower = (data) => {
    return {
        "name": data.name || "None",
        "description": data.description || "",
        "active": data.active || false,
        "cooldown": data.cooldown || 0
    }
}

const safeOrigin = (data) => {
    return {
        "name": data.name || "Un-named",
        "description": data.description || "Default description",
        "impact": data.impact || 0,
        "key": data.key || "None",
        "powers": data.powers.map((v) => safePower(v)) || []
    }
}

const originJsonHandler = (data) => {
    console.log(data)
    return Object.keys(data).map((v) => safeOrigin(data[v]))
}


export default originJsonHandler