// Check if books data exists in local storage
if (typeof localStorage.getItem('favorites') === 'undefined' || localStorage.getItem('favorites') === null) {
    const favorites = [];
    localStorage.setItem('favorites', JSON.stringify(books));
}


if (typeof localStorage.getItem('recipes') === 'undefined' || localStorage.getItem('recipes') === null) {
    const recipeData1 = {
        href: "recipe.html",
        imagePath: "../../static/images/bolognese.jpg",
        imageAlt: "bolognese",
        recipeName: "Spaghetti Bolognese"
      };
      
      const recipeData2 = {
        href: "recipe.html",
        imagePath: "../../static/images/chicken.jpg",
        imageAlt: "chicken stir fry",
        recipeName: "Stir fry"
      };
      
      const recipeData3 = {
        href: "recipe.html",
        imagePath: "../../static/images/Crème Brûlée.jpg",
        imageAlt: "creme brulee",
        recipeName: "Creme Brulee"
      };
      
      const recipeData4 = {
        href: "recipe.html",
        imagePath: "../../static/images/garlic_bread.jpg",
        imageAlt: "garlic bread",
        recipeName: "garlic bread"
      };
      
      const recipeData5 = {
        href: "recipe.html",
        imagePath: "../../static/images/lgchicken.jpg",
        imageAlt: "lemon garlic chicken",
        recipeName: "Lemon Garlic Chicken"
      };
      
      const recipeData6 = {
        href: "recipe.html",
        imagePath: "../../static/images/pizza.jpg",
        imageAlt: "margherita",
        recipeName: "margherita pizza"
      };
      
      const recipeData7 = {
        href: "recipe.html",
        imagePath: "../../static/images/Pumpkin.jpg",
        imageAlt: "Pumpkin",
        recipeName: "pumpkin"
      };
      
      const recipeData8 = {
        href: "recipe.html",
        imagePath: "../../static/images/scampi.jpg",
        imageAlt: "shrimp scampi",
        recipeName: "shrimp scampi"
      };
      
      const recipeData9 = {
        href: "recipe.html",
        imagePath: "../../static/images/straubrry-cake.jpg",
        imageAlt: "strawberry cake",
        recipeName: "strawberry cake"
      };
      
      const recipeData10 = {
        href: "recipe.html",
        imagePath: "../../static/images/TofuSt.jpg",
        imageAlt: "Tofu Stir Fry",
        recipeName: "Tofu Stir Fry"
      };
      
      const recipeData11 = {
        href: "recipe.html",
        imagePath: "../../static/images/vgchilli.jpg",
        imageAlt: "vegeterian_chilli",
        recipeName: "vegeterian chilli"
      };
      
      const recipeData12 = {
        href: "recipe.html",
        imagePath: "../../static/images/PB.jpg",
        imageAlt: "peanut butter",
        recipeName: "peanut butter"
      };
      
      const recipeData13 = {
        href: "recipe.html",
        imagePath: "../../static/images/veg_rice.jpg",
        imageAlt: "Veggie rice",
        recipeName: "Veggie rice"
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