

window.onload = function() {
  // Get the favorites from local storage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  // Create a list of favorites
  const favoritesList = document.getElementById("favorites-container");
  if (favoritesList && favorites) {
    favorites.forEach((recipeData) => {
      if(recipeData){
        if (recipeData.href && recipeData.href !== '') {
        const favoriteDiv = createFavoriteElement(recipeData);
        favoritesList.appendChild(favoriteDiv);
      }
      }
    });
  }
}

function addToRecipes(recipeData) {
  if(!logged_in_user){
    alert("log in first!!");
    window.location.href = "/templates/authenticate/login.html";
    return;
  }
  // Get the favorites from local storage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Check if the favorites array already contains the recipe data
  const index = favorites.findIndex(
    (favorite) => favorite.recipeName === recipeData.recipeName
  );

  // If the recipe data is not already in the favorites array, add it
  if (index === -1) {
    favorites.push(recipeData);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    createFavoriteElement(recipeData);
  }
}

  function createFavoriteElement(recipeData) {
    if (!recipeData.href || recipeData.href === '') {
        // console.error('Invalid href property in recipeData:', recipeData);
        return;
      }
    const favoriteDiv = document.createElement('div');
    favoriteDiv.classList.add('category');
  
    const favoriteLink = document.createElement('a');
    favoriteLink.href = recipeData.href;
  
    const favoriteImage = document.createElement('img');
    favoriteImage.src = recipeData.imagePath;
    favoriteImage.alt = recipeData.imageAlt;
  
    const favoriteCaption = document.createElement('div');
    favoriteCaption.classList.add('caption');
    favoriteCaption.textContent = recipeData.recipeName;
    favoriteLink.appendChild(favoriteImage);
    favoriteLink.appendChild(favoriteCaption);
    favoriteDiv.appendChild(favoriteLink);
    return favoriteDiv;
  }

// This function will be called when the favorite button is clicked on the recipe page
function insertFavoriteElement(recipeData) {
  createFavoriteElement(recipeData);
}