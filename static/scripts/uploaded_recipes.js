
  
window.onload = function() {
    // Get the favorites from local storage
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    // Create a list of favorites
    const recipesList = document.getElementById("recipes-container");
    if (recipesList && recipes) {
      recipes.forEach((recipeData) => {
        if(recipeData){
          if (recipeData.href && recipeData.href !== '') {
          const recipeDiv = createFavoriteElement(recipeData);
          recipesList.appendChild(recipeDiv);
        }
        }
      });
    }
  }

  //to be used in admin dashboard
  function addToRecipes(recipeData) {
    if(!logged_in_admin){
      alert("log in as admin first!!");
      window.location.href = "/templates/authenticate/login.html";
      return;
    }
    // Get the favorites from local storage
    const favorites = JSON.parse(localStorage.getItem("recipes")) || [];
  
    // Check if the favorites array already contains the recipe data
    const index = favorites.findIndex(
      (favorite) => favorite.recipeName === recipeData.recipeName
    );
  
    // If the recipe data is not already in the favorites array, add it
    if (index === -1) {
      favorites.push(recipeData);
      localStorage.setItem("recipes", JSON.stringify(favorites));
      createFavoriteElement(recipeData);
    }
  }
  
function createFavoriteElement(recipeData) {
      if (!recipeData.href || recipeData.href === '') {
          // console.error('Invalid href property in recipeData:', recipeData);
          return;
        }
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('category');
    
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
      recipeDiv.appendChild(favoriteLink);
      return recipeDiv;
}
  
  // This function will be called when the favorite button is clicked on the recipe page
  function insertFavoriteElement(recipeData) {
    createFavoriteElement(recipeData);
  }