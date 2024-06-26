window.onload = function () {
  localStorage.clear();
};

function handleRecipeClick(recipeId) {
  const recipesList = JSON.parse(localStorage.getItem("recipes")) || [];
  if (recipeId !== null) {
    const id = parseInt(recipeId);
    const recipe = recipesList.find((recipe) => recipe.id === id);
    if (recipe !== undefined) {
      localStorage.setItem("current", JSON.stringify(recipe));
      window.location = "/templates/recipes/recipe.html";
    }
  }
}

function createrecipeElement(recipeData) {
  if (!recipeData.href || recipeData.href === "") {
    return;
  }

  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("category");
  recipeDiv.id = recipeData.id; // Set the id attribute here
  // recipeDiv.classList.add('id');

  const recipelink = document.createElement("a");
  recipelink.href = "recipe.html";
  const recipeImage = document.createElement("img");
  recipeImage.src = recipeData.imagePath;
  recipeImage.alt = recipeData.imageAlt;
  const recipeCaption = document.createElement("div");
  recipeCaption.classList.add("caption");
  recipeCaption.textContent = recipeData.recipeName;
  const recipeCatergories = document.createElement("ctg");

  recipelink.appendChild(recipeImage);
  recipelink.appendChild(recipeCaption);
  recipeDiv.appendChild(recipelink);
  recipeDiv.appendChild(recipeCatergories);
  return recipeDiv;
}
