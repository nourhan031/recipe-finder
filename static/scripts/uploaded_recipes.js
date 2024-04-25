
  
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
  alert(recipeId);
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
  recipeDiv.id = recipeData.id; // Set the id attribute here
  // recipeDiv.classList.add('id');

  const recipelink = document.createElement('a');
  // recipelink.href = 'recipe.html';
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
  
