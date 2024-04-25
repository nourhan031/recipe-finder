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
        id:incId()
      };
      
      const recipeData2 = {
        href: "recipe.html",
        imagePath: "../../static/images/chicken.jpg",
        imageAlt: "chicken stir fry",
        recipeName: "Stir fry",
        id: incId()
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