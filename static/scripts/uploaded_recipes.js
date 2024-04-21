
  
window.onload = function() {
    // Get the favorites from local storage
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    // Create a list of favorites
    const recipesList = document.getElementById("recipes-container");
    if (recipesList && recipes) {
      recipes.forEach((recipeData) => {
        if(recipeData){
          if (recipeData.href && recipeData.href !== '') {
          //  alert(recipeData.href);
          const recipeDiv = createrecipeElement(recipeData);
          recipesList.appendChild(recipeDiv);
        }
        }
      });
    }
  }
  const recipesContainer = document.getElementById('recipes-container');

  recipesContainer.addEventListener('click', function(event) {
    // Check if the clicked element is a recipe div
    if (event.target.classList.contains('recipe')) {
      // Get the recipe name from the data attribute
      const recipeName = event.target.dataset.recipeName;
      
      // Call a function with the recipe name as a parameter
      handleRecipeClick(recipeName);
    }
  });
  // //to be used in admin dashboard
  // function addToRecipes(recipeData) {
  //   if(!logged_in_admin){
  //     alert("log in as admin first!!");
  //     window.location.href = "/templates/authenticate/login.html";
  //     return;
  //   }
  //   // Get the favorites from local storage
  //   const favorites = JSON.parse(localStorage.getItem("recipes")) || [];
  
  //   // Check if the favorites array already contains the recipe data
  //   const index = favorites.findIndex(
  //     (favorite) => favorite.recipeName === recipeData.recipeName
  //   );
  
  //   // If the recipe data is not already in the favorites array, add it
  //   if (index === -1) {
  //     favorites.push(recipeData);
  //     localStorage.setItem("recipes", JSON.stringify(favorites));
  //     createrecipeElement(recipeData);
  //   }
  // }
  
function createrecipeElement(recipeData) {
      if (!recipeData.href || recipeData.href === '') {
          // console.error('Invalid href property in recipeData:', recipeData);
          return;
        }
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('category');
    
      const recipelink = document.createElement('a');
      recipelink.href = 'recipe.html';
    
      const recipeImage = document.createElement('img');
      recipeImage.src = recipeData.imagePath;
      recipeImage.alt = recipeData.imageAlt;
    
      const recipeCaption = document.createElement('div');
      recipeCaption.classList.add('caption');
      recipeCaption.textContent = recipeData.recipeName;
      recipelink.appendChild(recipeImage);
      recipelink.appendChild(recipeCaption);
      recipeDiv.appendChild(recipelink);
      return recipeDiv;
}
  
  // This function will be called when the favorite button is clicked on the recipe page
