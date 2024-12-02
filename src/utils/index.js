import toast from "react-hot-toast";

// get coffee info
const getAllFavorite = () => {
        const all = localStorage.getItem('favorites');
        if (all) {
            const favorites = JSON.parse(all);
            return favorites;
        } else {
            return [];
        }
    }
    // add favorite coffee
const addFavorite = (coffee) => {
        const favorites = getAllFavorite();
        const isExist = favorites.find(item => item.id == coffee.id);
        if (isExist)
            return toast.error('Already Exists!!');
        favorites.push(coffee);
        localStorage.setItem('favorites', JSON.stringify(favorites))
        toast.success('Successfully Added to Favorites!');


    }
    // remove from favorite
const removeFavorite = (id) => {
    const favorites = getAllFavorite();
    const remaining = favorites.filter(coffee => coffee.id != id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Item Successfully Removed!!')
}
export { getAllFavorite, addFavorite, removeFavorite }