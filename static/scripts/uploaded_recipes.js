
  
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
    if (event.target.tagName === 'DIV') {
      const recipeId = event.target.id;
      handleRecipeClick(recipeId);
    }
  });
  
  
function createrecipeElement(recipeData) {
      if (!recipeData.href || recipeData.href === '') {
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
  
