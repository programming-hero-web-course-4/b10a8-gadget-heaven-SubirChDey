import { toast } from "react-toastify"

// get all cart products from local storage
const getAllCarts = () => {
    const all = localStorage.getItem('carts')
    const carts = JSON.parse(all)
    if (all) {
        const carts = JSON.parse(all)
        return carts
    }
    return []
}

//add cart products to local storage
const addCart = product => {
    const carts = getAllCarts()
    const isExist = carts.find(item => item.product_id === product.product_id)
    if (isExist) return toast.info('Product Already Exist',{
        autoClose: 1000,
        hideProgressBar: true,
    })
    carts.push(product)
    localStorage.setItem('carts', JSON.stringify(carts))
    toast.success('Product Added Successfully',{
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
    })
}

// remove cart products from local storage
const removeCart = id => {
    const carts = getAllCarts()
    const remaining = carts.filter(product => product.product_id != id)
    localStorage.setItem('carts', JSON.stringify(remaining))
}
// -----------------

// get all favorite products from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites')
    const favorites = JSON.parse(all)
    if (all) {
        const favorites = JSON.parse(all)
        return favorites
    }
    return []
}

//add favorite products to local storage
const addFavorite = product => {
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.product_id === product.product_id)
    if (isExist) return toast.info('Already Added to Favorite',{
        
        autoClose: 1000,
        hideProgressBar: true,
    })
    favorites.push(product)
    localStorage.setItem('favorites', JSON.stringify(favorites))
    toast.success('Successfully added to favorite',{
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
    })
}

// remove favorite products from local storage
const removeFavorite = id => {
    const favorites = getAllFavorites()
    const remaining = favorites.filter(product => product.product_id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining))
}


export {addCart, getAllCarts, removeCart, addFavorite, getAllFavorites, removeFavorite }