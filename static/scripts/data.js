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
         "Add the soy sauce and stir well.", "Season with salt and pepper.",
         "Serve the stir fry with rice or noodles."]
      };
      
      const recipeData3 = {
        href: "recipe.html",
        imagePath: "../../static/images/Crème Brûlée.jpg",
        imageAlt: "creme brulee",
        recipeName: "Creme Brulee",
        id: incId(),
        ingredients: ["1 quart heavy cream", "1 vanilla bean, split and scraped", "1 cup vanilla sugar", "6 large egg yolks", "2 quarts hot water", "1/2 cup granulated sugar"],
    directions: [
        "Preheat the oven to 325 degrees F.",
        "In a medium saucepan, mix together the heavy cream, vanilla bean and its pulp. Bring to a boil over medium-high heat, then remove from heat and let it sit for 15 minutes.",
        "In a medium bowl, whisk together 1/2 cup sugar and the egg yolks until well blended and it starts to lighten in color.",
        "Add the cream a little at a time, stirring continually. Pour the liquid into 6 (7 to 8-ounce) ramekins. Place the ramekins into a large cake pan or roasting pan.",
        "Pour enough hot water into the pan to come halfway up the sides of the ramekins.",
        "Bake just until the creme brulee is set, but still trembling in the center, approximately 40 to 45 minutes.",
        "Remove the ramekins from the roasting pan and refrigerate for at least 2 hours and up to 3 days.",
        "Remove the creme brulee from the refrigerator for at least 30 minutes prior to browning the sugar on top.",
        "Divide the remaining 1/2 cup vanilla sugar equally among the 6 dishes and spread evenly on top. Using a torch, melt the sugar and form a crispy top. Allow the creme brulee to sit for at least 5 minutes before serving."
    ]
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