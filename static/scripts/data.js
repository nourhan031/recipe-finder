localStorage.clear();
if (typeof localStorage.getItem('favorites') === 'undefined' || localStorage.getItem('favorites') === null) {
    const favorites = [];
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
function incId() {
  let recipeId = localStorage.getItem('id');
  if (recipeId === null) {
    recipeId = 1;
    localStorage.setItem("id", recipeId);
  } else {
    recipeId = Number(recipeId) + 1;
    recipeId = JSON.parse(recipeId);
    localStorage.setItem("id", recipeId);
  }
  return recipeId;
}
if (typeof localStorage.getItem('recipes') === 'undefined' || localStorage.getItem('recipes') === null) {
    const recipeData1 = {
        href: "recipe.html",
        imagePath: "../../static/images/bolognese.jpg",
        imageAlt: "bolognese",
        recipeName: "Spaghetti Bolognese",
        id:incId(),
        ingredients: ["spaghetti", "minced beef", "onion", "garlic", "tomatoes", "salt", "pepper"],
        directions: ["Boil the spaghetti in salted water until al dente.", "While the spaghetti is boiling, chop the onion and garlic and fry them in a pan.",
         "Add the minced beef to the pan and fry until browned.", 
         "Add the canned tomatoes to the pan and simmer for 15 minutes.", 
         "Season with salt and pepper.", "Drain the spaghetti and serve with the bolognese sauce."]
      };
      
      const recipeData2 = {
        href: "recipe.html",
        imagePath: "../../static/images/chicken.jpg",
        imageAlt: "chicken stir fry",
        recipeName: "Stir fry",
        id: incId(), 
        ingredients: ["chicken breast", "bell pepper", "onion", "garlic", "soy sauce", "sesame oil", "salt", "pepper"],
        directions: ["Cut the chicken breast into thin slices.", "Chop the bell pepper, onion, and garlic.", 
        "Heat the sesame oil in a pan.", "Add the chicken to the pan and fry until browned.", 
        "Add the bell pepper, onion, and garlic to the pan and stir fry for a few minutes.",
         "Add the soy sauce and stir well.", "Season with salt and pepper."
         , "Serve the stir fry with rice or noodles."]
      };
      
      const recipeData3 = {
        href: "recipe.html",
        imagePath: "../../static/images/Crème Brûlée.jpg",
        imageAlt: "creme brulee",
        recipeName: "Creme Brulee",
        id: incId(),
      };
      
      const recipeData4 = {
        href: "recipe.html",
        imagePath: "../../static/images/garlic_bread.jpg",
        imageAlt: "garlic bread",
        recipeName: "garlic bread",
        id: incId(),
      };
      
      const recipeData5 = {
        href: "recipe.html",
        imagePath: "../../static/images/lgchicken.jpg",
        imageAlt: "lemon garlic chicken",
        recipeName: "Lemon Garlic Chicken",
        id: incId(),
      };
      
      const recipeData6 = {
        href: "recipe.html",
        imagePath: "../../static/images/pizza.jpg",
        imageAlt: "margherita",
        recipeName: "margherita pizza",
        id: incId(),
      };
      
      const recipeData7 = {
        href: "recipe.html",
        imagePath: "../../static/images/Pumpkin.jpg",
        imageAlt: "Pumpkin",
        recipeName: "pumpkin",
        id: incId(),
      };
      
      const recipeData8 = {
        href: "recipe.html",
        imagePath: "../../static/images/scampi.jpg",
        imageAlt: "shrimp scampi",
        recipeName: "shrimp scampi",
        id: incId(),
      };
      
      const recipeData9 = {
        href: "recipe.html",
        imagePath: "../../static/images/straubrry-cake.jpg",
        imageAlt: "strawberry cake",
        recipeName: "strawberry cake",
        id: incId(),
      };
      
      const recipeData10 = {
        href: "recipe.html",
        imagePath: "../../static/images/TofuSt.jpg",
        imageAlt: "Tofu Stir Fry",
        recipeName: "Tofu Stir Fry",
        id: incId(),
      };
      
      const recipeData11 = {
        href: "recipe.html",
        imagePath: "../../static/images/vgchilli.jpg",
        imageAlt: "vegeterian_chilli",
        recipeName: "vegeterian chilli",
        id: incId(),
      };
      
      const recipeData12 = {
        href: "recipe.html",
        imagePath: "../../static/images/PB.jpg",
        imageAlt: "peanut butter",
        recipeName: "peanut butter",
        id: incId(),
      };
      
      const recipeData13 = {
        href: "recipe.html",
        imagePath: "../../static/images/veg_rice.jpg",
        imageAlt: "Veggie rice",
        recipeName: "Veggie rice",
        id: incId(),
      };
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      
      recipes.push(recipeData1, recipeData2, recipeData3, recipeData4, recipeData5, recipeData6, recipeData7, recipeData8, recipeData9, recipeData10, recipeData11, recipeData12, recipeData13);
      
      localStorage.setItem('recipes', JSON.stringify(recipes));
}



let logged_in_user = localStorage.getItem('loggedUser');
if (logged_in_user === null) {
    logged_in_user = false;
    localStorage.setItem("loggedUser", logged_in_user);
} else {
    logged_in_user = JSON.parse(logged_in_user);
}

let logged_in_admin = localStorage.getItem('loggedAdmin');
if (logged_in_admin === null) {
    logged_in_admin = false;
    localStorage.setItem("loggedAdmin", logged_in_admin);
} else {
    logged_in_admin = JSON.parse(logged_in_admin);
}

let currentRecipe = localStorage.getItem('current');
if (currentRecipe === null) {
    localStorage.setItem("current", currentRecipe);
} else {
  currentRecipe = JSON.parse(currentRecipe);
}


// SEARCH
// Event listener for the search form
document.querySelector('.example').addEventListener('submit', function (event) {
    const searchInput = document.querySelector('input[name="search"]').value.toLowerCase();
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    // Filter recipes by name or ingredients
    const filteredRecipes = recipes.filter(recipe => {
        const recipeNameMatch = recipe.recipeName.toLowerCase().includes(searchInput);
        const ingredientMatch = recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(searchInput)
        );

        return recipeNameMatch || ingredientMatch;
    });

    // Get the recipe container
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = ''; // Clear previous results

    if (filteredRecipes.length === 0) {
        recipeContainer.innerHTML = '<p>No matching recipes found.</p>'; // No results message
    } else {
        // Display the filtered recipes
        filteredRecipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            recipeDiv.innerHTML = `
                <h3>${recipe.recipeName}</h3>
                <p>Ingredients: ${recipe.ingredients.join(', ')}</p>
                <a href="${recipe.href}">View Recipe</a>
            `;

            recipeContainer.appendChild(recipeDiv);
        });
    }
});
