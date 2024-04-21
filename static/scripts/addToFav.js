// function to add a recipe to favorites
function addToFavorites(mealId) {
    // get the current list of favorite meals from local storage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // add the new favorite meal to the list
    favorites.push(mealId);

    // save the updated list back to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}