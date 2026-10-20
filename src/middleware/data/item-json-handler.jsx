
const safeRecipe = (data) => {
    const recipe = data.recipe || ["", "", "", "", "", "", "", "", "",]
    return {
        recipe,
        "recipe_map": generateItemMap(data.items, recipe)
    }
}

const safeItem = (data, key) => {
    return {
        "name": data.name || "Un-named",
        "description": data.description || "Default description",
        "icon": key,
        "recipe_shape": safeRecipe(data)
    }
}

const itemJsonHandler = (data) => {
    console.log(data)
    return Object.keys(data).map((v) => safeItem(data[v], v))
}


const generateItemMap = (items, recipe_shape) => {
    var recipe = {}
    recipe_shape.forEach(v => {
        if (v === "") return
        if (Object.hasOwn(recipe, v)) return
        recipe[v] = items[Object.keys(recipe).length]
    })
    return recipe;
};


export default itemJsonHandler