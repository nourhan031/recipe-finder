function deleteRecipe(index) {
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes.splice(index, 1);
  localStorage.setItem("recipes", JSON.stringify(recipes));
}
