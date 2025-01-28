// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    const favorites = JSON.parse(all)
    if (all) {
        const favorites = JSON.parse(all)
        return favorites
    }
    return []
}

//add product to local storage
const addFavorite = product => {
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.product_id === product.product_id)
    if (isExist) return alert('exist')
    favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

// remove product from local storage
const removeFavorite = id => {
    const favorites = getAllFavorites()
    const remaining = favorites.filter(product => product.product_id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
}


export { addFavorite, getAllFavorites, removeFavorite }