
  
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
 
function handleRecipeClick(recipeId){
  alert('lll');
  if (recipeId !== null) {
    const id = parseInt(recipeId);
    const recipe = recipes.find(recipe => recipe.id === id);
    if (recipe !== undefined) {
      localStorage.setItem('current', JSON.stringify(recipe));
      alert("pp");
    } else {
      alert('nn')
    }
  } else {
    alert('ll')
  }
}

function createrecipeElement(recipeData) {
      if (!recipeData.href || recipeData.href === '') {
          return;
        }
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('category');
      const recipelink = document.createElement('a');
      // recipelink.href = 'recipe.html';
      
      const recipeImage = document.createElement('img');
      recipeImage.src = recipeData.imagePath;
      recipeImage.alt = recipeData.imageAlt;
       // Set the id attribute her
      recipeDiv.id = recipeData.id;

      // alert(recipeData.id);
      const recipeCaption = document.createElement('div');
      recipeCaption.classList.add('caption');
      recipeCaption.textContent = recipeData.recipeName;
      recipelink.appendChild(recipeImage);
      recipelink.appendChild(recipeCaption);
      recipeDiv.appendChild(recipelink);
      // alert(recipeDiv.id);
      // recipeDiv.appendChild(recipeData.id);

      return recipeDiv;
}
  
