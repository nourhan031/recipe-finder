// // Sample recipe data (you can replace this with your actual data)
// const recipes = [
//     {
//       name: "garlic_bread",
//       ingredients: ["garlic", "butter", "bread", "mozzarella"],
//     }
//   ];
  
//   function handleSearch() {
//     const userInput = document.querySelector("#ingredient-input").value.toLowerCase();
//     const matchingRecipes = recipes.filter(recipe =>
//       recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(userInput))
//     );
  
//     const recipeContainer = document.querySelector("#recipe-container");
//     recipeContainer.innerHTML = ""; 
  
//     matchingRecipes.forEach(recipe => {
//       const recipeCard = document.createElement("div");
//       recipeCard.classList.add("recipe-card");
//       recipeCard.innerHTML = `
//         <h3>${recipe.name}</h3>
//         <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
//       `;
//       recipeContainer.appendChild(recipeCard);
//     });
//   }
  
//   const searchForm = document.querySelector("fa fa-search");
//   searchForm.addEventListener("submit", handleSearch);
  