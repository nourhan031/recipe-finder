if (
  typeof localStorage.getItem("favorites") === "undefined" ||
  localStorage.getItem("favorites") === null
) {
  const favorites = [];
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
function incId() {
  let recipeId = localStorage.getItem("id");
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
if (
  typeof localStorage.getItem("recipes") === "undefined" ||
  localStorage.getItem("recipes") === null
) {
  const recipeData1 = {
    href: "recipe.html",
    imagePath: "../../static/images/bolognese.jpg",
    imageAlt: "bolognese",
    recipeName: "Spaghetti Bolognese",
    id: incId(),
    ingredients: [
      "spaghetti",
      "minced beef",
      "onion",
      "garlic",
      "tomatoes",
      "salt",
      "pepper",
    ],
    directions: [
      "Boil the spaghetti in salted water until al dente.",
      "While the spaghetti is boiling, chop the onion and garlic and fry them in a pan.",
      "Add the minced beef to the pan and fry until browned.",
      "Add the canned tomatoes to the pan and simmer for 15 minutes.",
      "Season with salt and pepper.",
      "Drain the spaghetti and serve with the bolognese sauce.",
    ],
  };

  const recipeData2 = {
    href: "recipe.html",
    imagePath: "../../static/images/chicken.jpg",
    imageAlt: "chicken stir fry",
    recipeName: "Stir fry",
    id: incId(),
    ingredients: [
      "chicken breast",
      "bell pepper",
      "onion",
      "garlic",
      "soy sauce",
      "sesame oil",
      "salt",
      "pepper",
    ],
    directions: [
      "Cut the chicken breast into thin slices.",
      "Chop the bell pepper, onion, and garlic.",
      "Heat the sesame oil in a pan.",
      "Add the chicken to the pan and fry until browned.",
      "Add the bell pepper, onion, and garlic to the pan and stir fry for a few minutes.",
      "Add the soy sauce and stir well.",
      "Season with salt and pepper.",
      "Serve the stir fry with rice or noodles.",
    ],
  };

  const recipeData3 = {
    href: "recipe.html",
    imagePath: "../../static/images/Crème Brûlée.jpg",
    imageAlt: "creme brulee",
    recipeName: "Creme Brulee",
    id: incId(),
    ingredients: [
      "1 quart heavy cream",
      "1 vanilla bean, split and scraped",
      "1 cup vanilla sugar",
      "6 large egg yolks",
      "2 quarts hot water",
      "1/2 cup granulated sugar",
    ],
    directions: [
      "Preheat the oven to 325 degrees F.",
      "In a medium saucepan, mix together the heavy cream, vanilla bean and its pulp. Bring to a boil over medium-high heat, then remove from heat and let it sit for 15 minutes.",
      "In a medium bowl, whisk together 1/2 cup sugar and the egg yolks until well blended and it starts to lighten in color.",
      "Add the cream a little at a time, stirring continually. Pour the liquid into 6 (7 to 8-ounce) ramekins. Place the ramekins into a large cake pan or roasting pan.",
      "Pour enough hot water into the pan to come halfway up the sides of the ramekins.",
      "Bake just until the creme brulee is set, but still trembling in the center, approximately 40 to 45 minutes.",
      "Remove the ramekins from the roasting pan and refrigerate for at least 2 hours and up to 3 days.",
      "Remove the creme brulee from the refrigerator for at least 30 minutes prior to browning the sugar on top.",
      "Divide the remaining 1/2 cup vanilla sugar equally among the 6 dishes and spread evenly on top. Using a torch, melt the sugar and form a crispy top. Allow the creme brulee to sit for at least 5 minutes before serving.",
    ],
  };

  const recipeData4 = {
    href: "recipe.html",
    imagePath: "../../static/images/garlic_bread.jpg",
    imageAlt: "garlic bread",
    recipeName: "Garlic Bread",
    id: incId(),
    ingredients: [
      "½ cup butter",
      "1 ½ tablespoons garlic powder",
      "1 tablespoon dried parsley",
      "1 (1 pound) loaf Italian bread, cut into 1/2 inch slices",
      "1 (8 ounce) package shredded mozzarella cheese",
    ],
    directions: [
      "Gather all ingredients.",
      "Preheat the oven to 350 degrees F (175 degrees C).",
      "Melt butter in a small saucepan over medium heat; stir in garlic powder and dried parsley.",
      "Place bread slices on a medium baking sheet. Using a basting brush, brush bread generously with melted butter mixture.",
      "Bake in the preheated oven until lightly toasted, about 10 minutes.",
      "Sprinkle bread with mozzarella cheese and any remaining butter mixture. Continue baking until cheese is melted and bread is lightly browned, about 5 minutes.",
    ],
  };

  const recipeData5 = {
    href: "recipe.html",
    imagePath: "../../static/images/lgchicken.jpg",
    imageAlt: "lemon garlic chicken",
    recipeName: "Lemon Garlic Chicken",
    id: incId(),
    ingredients: [
      "2 tablespoons butter",
      "3 skinless, boneless chicken breast halves",
      "1 ½ teaspoons salt",
      "1 ½ teaspoons ground black pepper",
      "2 tablespoons garlic powder, divided",
      "1 lemon, juiced",
    ],
    directions: [
      "Melt butter in a skillet over medium-high heat.",
      "Season chicken with salt and pepper; place in melted butter. Cook chicken, flipping frequently, until browned, about 5 minutes. Sprinkle 1 tablespoon garlic powder over chicken; cook for 2 minutes. Flip and sprinkle remaining 1 tablespoon garlic powder on the second side; cook for 2 minutes.",
      "Pour lemon juice over each side of chicken and cook until no longer pink in the center, 5 to 10 minutes more. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
    ],
  };

  const recipeData6 = {
    href: "recipe.html",
    imagePath: "../../static/images/pizza.jpg",
    imageAlt: "margherita",
    recipeName: "Margherita Pizza",
    id: incId(),
    ingredients: [
      "¼ cup olive oil",
      "1 tablespoon minced garlic",
      "½ teaspoon sea salt",
      "8 Roma tomatoes, sliced",
      "2 (12 inch) pre-baked pizza crusts",
      "8 ounces shredded Mozzarella cheese",
      "4 ounces shredded Fontina cheese",
      "10 fresh basil leaves, washed, dried",
      "½ cup freshly grated Parmesan cheese",
      "½ cup crumbled feta cheese",
    ],
    directions: [
      "Stir together olive oil, garlic, and salt; toss with tomatoes, and allow to stand for 15 minutes. Preheat oven to 400 degrees F (200 degrees C).",
      "Brush each pizza crust with some of the tomato marinade. Sprinkle the pizzas evenly with Mozzarella and Fontina cheeses. Arrange tomatoes overtop, then sprinkle with shredded basil, Parmesan, and feta cheese.",
      "Bake in preheated oven until the cheese is bubbly and golden brown, about 10 minutes.",
    ],
  };

  const recipeData7 = {
    href: "recipe.html",
    imagePath: "../../static/images/Pumpkin.jpg",
    imageAlt: "Pumpkin",
    recipeName: "Pumpkin",
    id: incId(),
    ingredients: [
      "1 (15.25 ounce) package yellow cake mix, divided",
      "⅓ cup unsalted butter, melted",
      "1 large egg",
      "1 (29 ounce) can pumpkin puree",
      "3 large eggs",
      "⅔ cup milk",
      "½ cup brown sugar",
      "2 tablespoons pumpkin pie spice",
      "½ cup white sugar",
      "¼ cup cold unsalted butter, cubed",
      "¾ cup chopped walnuts",
    ],
    directions: [
      "Gather all ingredients.",
      "Preheat the oven to 350 degrees F (175 degrees C). Lightly grease a 9x13-inch baking dish.",
      "Make crust: Transfer 1 cup cake mix to a small bowl; set aside for topping. Place remaining cake mix in a medium bowl with melted butter and egg; mix until well blended.",
      "Spread mixture into the bottom of the prepared baking dish.",
      "Make filling: Combine pumpkin puree, eggs, milk, brown sugar, and pumpkin pie spice in a large bowl; mix well and pour over crust.",
      "Make topping: Add white sugar and cubed butter to reserved cake mix; use a pastry blender to mix until mixture resembles coarse crumbs.",
      "Sprinkle over pumpkin filling, then scatter chopped walnuts over the top.",
      "Bake in the preheated oven until the top is golden brown, 45 to 50 minutes.",
    ],
  };

  const recipeData8 = {
    href: "recipe.html",
    imagePath: "../../static/images/scampi.jpg",
    imageAlt: "shrimp scampi",
    recipeName: "Shrimp Scampi",
    id: incId(),
    ingredients: [
      "2 pounds medium raw shrimp, shelled, deveined, with tails attached",
      "1 cup butter",
      "2 tablespoons Dijon mustard",
      "1 tablespoon fresh lemon juice",
      "1 tablespoon chopped garlic",
      "1 tablespoon chopped fresh parsley",
    ],
    directions: [
      "Gather all ingredients.Preheat oven to 450 degrees F (230 degrees C)",
      "In a small saucepan over medium heat, combine the butter, mustard, lemon juice, garlic, and parsley. When the butter melts completely, remove from heat.",
      "Arrange shrimp in a shallow baking dish. Pour the butter mixture over the shrimp.",
      "Bake in preheated oven for 12 to 15 minutes or until the shrimp are pink and opaque.",
    ],
  };

  const recipeData9 = {
    href: "recipe.html",
    imagePath: "../../static/images/straubrry-cake.jpg",
    imageAlt: "strawberry cake",
    recipeName: "Strawberry Cake",
    id: incId(),
    ingredients: [
      "2 cups white sugar",
      "1 cup butter, softened",
      "1 (3 ounce) package strawberry flavored Jell-O",
      "4 large eggs (room temperature)",
      "2 ¾ cups sifted cake flour",
      "2 ½ teaspoons baking powder",
      "1 cup whole milk, room temperature",
      "½ cup strawberry puree made from frozen sweetened strawberries",
      "1 tablespoon vanilla extract",
    ],
    directions: [
      "Preheat the oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch round cake pans.",
      "Beat sugar, butter, and dry strawberry gelatin together in a large bowl with an electric mixer until light and fluffy. Add eggs one at a time, beating well after each addition.",
      "Combine flour and baking powder in a large bowl; stir into butter mixture alternately with milk.",
      "Blend in strawberry puree and vanilla.",
      "Divide batter evenly between the prepared pans.",
      "Bake in the preheated oven until a toothpick inserted into the center comes out clean, about 25 to 30 minutes. Cool cakes on a wire rack for 10 minutes; run a table knife around the edges to loosen. Invert carefully onto a serving plate or cooling rack to cool completely.",
    ],
  };

  const recipeData10 = {
    href: "recipe.html",
    imagePath: "../../static/images/TofuSt.jpg",
    imageAlt: "Vegetable and Tofu Stir-fry",
    recipeName: "Vegetable and Tofu Stir-fry",
    id: incId(),
    ingredients: [
      "1 tablespoon vegetable oil",
      "½ medium onion, sliced",
      "1 tablespoon fresh ginger root, finely chopped",
      "2 cloves garlic, finely chopped",
      "1 (16 ounce) package tofu, drained and cut into cubes",
      "1 cup baby corn, drained and cut into pieces",
      "1 green bell pepper, seeded and cut into strips",
      "1 carrot, peeled and sliced",
      "1 small head bok choy, chopped",
      "2 cups fresh mushrooms, chopped",
      "1 ¼ cups bean sprouts",
      "1 cup bamboo shoots, drained and chopped",
      "½ teaspoon crushed red pepper",
      "½ cup water",
      "¼ cup rice wine vinegar",
      "2 tablespoons honey",
      "2 tablespoons soy sauce",
      "2 tablespoons water",
      "2 teaspoons cornstarch",
      "2 medium green onions, thinly sliced diagonally",
    ],
    directions: [
      "Heat oil in a large skillet over medium-high heat. Cook and stir onion in hot oil for 1 minute. Stir in ginger and garlic; cook for 30 seconds. Stir in tofu and cook, stirring occasionally, until golden brown.",
      "Add corn, bell pepper, and carrot; cook and stir for 2 minutes. Stir in bok choy, mushrooms, bean sprouts, bamboo shoots, and crushed red pepper. Cook until heated through, then remove from heat.",
      "Make sauce: Combine 1/2 cup water, vinegar, honey, and soy sauce in a small saucepan; bring to a simmer and cook for 2 minutes. Stir together 2 tablespoons water and cornstarch in a small bowl; pour into vinegar mixture. Simmer until sauce thickens",
      "Pour sauce over tofu-vegetable mixture. Garnish with green onions.",
    ],
  };

  const recipeData11 = {
    href: "recipe.html",
    imagePath: "../../static/images/vgchilli.jpg",
    imageAlt: "vegeterian_chilli",
    recipeName: "vegeterian chilli",
    id: incId(),
    ingredients: [
      "80ml (1/3 cup) olive oil",
      "1 large onion, peeled, finely chopped",
      "1 small red chilli, seeded, chopped",
      "1/2 red capsicum, chopped",
      "1/4 tsp chilli flakes",
      "1/2 tsp ground cinnamon",
      "1 tsp ground cumin",
      "1 tsp dried thyme",
      "2-3 garlic cloves, crushed",
      "420g can mixed beans, drained, rinsed",
      "420g can lentils, drained, rinsed",
      "Mutti Polpa Finely Chopped Tomatoes 400g",
      "1 tbsp Mutti Double Concentrate Tomato Paste",
      "1 cup chopped flat-leaf parsley",
    ],
    directions: [
      "Place 2 tablespoons of 80ml (1/3 cup) olive oil in a large saucepan over medium heat. Add the 1 large onion, peeled, finely chopped, fresh 1 small red chilli, seeded, chopped and 1/2 red capsicum, chopped and cook until softened. Add the 1/4 tsp chilli flakes, 1/2 tsp ground cinnamon, 1 tsp ground cumin and 1 tsp dried thyme and cook for a further minute.",
      "Reduce heat to low and add the 2-3 garlic cloves, crushed, 420g can mixed beans, drained, rinsed, 420g can lentils, drained, rinsed, Mutti Polpa Finely Chopped Tomatoes 400g, 1 tbsp Mutti Double Concentrate Tomato Paste and remaining oil.",
      "Cover and simmer for 15 minutes, stirring occasionally. Remove lid and cook for a further 5 minutes or until thickened.",
      "Stir through the 1 cup chopped flat-leaf parsley and serve with warm flour tortillas or steamed rice and sprinkled with grated cheese, if desired.",
    ],
  };

  const recipeData12 = {
    href: "recipe.html",
    imagePath: "../../static/images/PB.jpg",
    imageAlt: "peanut butter",
    recipeName: "Peanut Butter",
    id: incId(),
    ingredients: [
      "2 ¼ cups creamy peanut butter",
      "½ cup butter",
      "4 cups confectioners' sugar",
      "3 cups crisp rice cereal",
      "2 cups semisweet chocolate chips",
    ],
    directions: [
      "Gather all ingredients.",
      "Melt peanut butter and butter in saucepan over low heat, stirring often.",
      "Mix crisp rice cereal and confectioners' sugar in a large bowl until all well combined. Pour melted peanut butter mixture over top and stir until thoroughly blended; mixture will still appear crumbly but will easily form into balls.",
      "Form into 1-inch diameter (or smaller) balls and place onto parchment-lined cookie sheets. Cover with plastic wrap and refrigerate until firm, 3 hours to overnight.",
      "When ready to coat the balls, melt chocolate chips in double boiler. Keep over the lowest heat to keep melted.",
      "Place a peanut butter ball into the melted chocolate. Use two forks to roll it around until fully coated. Carefully remove it, letting any excess chocolate drip back into the pot, and place it on a wire rack set over a piece of parchment paper. Repeat to coat remaining balls.",
      "Refrigerate coated peanut butter balls until completely firm before serving.",
    ],
  };

  const recipeData13 = {
    href: "recipe.html",
    imagePath: "../../static/images/veg_rice.jpg",
    imageAlt: "Veggie rice",
    recipeName: "Veggie Rice",
    id: incId(),
    ingredients: [
      "4 Tablespoons olive oil",
      "1 teaspoon oregano",
      "1/2 teaspoon paprika powder",
      "1 teaspoon salt more or less to taste",
      "1/2 teaspoon black pepper",
      "3 garlic minced cloves",
      "1/2 cup chopped red onion",
      "1 red bell pepper chopped",
      "1/2 cup chopped carrots",
      "1 cup frozen peas",
      "1 bay leaf",
      "3 cups long grain rice rinsed",
      "4 cups low sodium chicken or vegetable broth",
      "1/4 cup fresh dill for garnish optional",
    ],
    directions: [
      "Heat oil in a deep sauté pan.",
      "Add oregano, paprika, salt and pepper to the pan. Next, add in the chopped garlic cloves, red onion, chopped red bell pepper, diced carrots, and frozen peas. Toss in the bay leaf and cook all the ingredients together for about 5-6 minutes.",
      "Once the vegetables are soft, add the washed rice to the pan. Pour in the broth and bring the liquid up to a boil.",
      "Cover and cook the rice for 15-20 minutes over low heat.",
      "Fluff the rice with a fork, remove the bay leaf and serve! Garnish with fresh chopped dill, optional.",
    ],
  };








  recipes.push(
    recipeData1,
    recipeData2,
    recipeData3,
    recipeData4,
    recipeData5,
    recipeData6,
    recipeData7,
    recipeData8,
    recipeData9,
    recipeData10,
    recipeData11,
    recipeData12,
    recipeData13,
  );

  localStorage.setItem("recipes", JSON.stringify(recipes));

}





let add = document.getElementById("ptn_add");




function Add_recipe() {
  let recipe_name = document.getElementById('recipeName');
  let ing = document.getElementById('ingredients');
  let des = document.getElementById('description');
  let arr = [];
  let word = "";
  let arr2 = [];




  let idx = 0;
  while (ing.value[idx] != '.') {
    if (ing.value[idx] == ';') {
      arr.push(word);
      word = "";
      idx++;
      continue;
    }

    if (!(ing.value[idx] == ' ' && word.length == 0)) {
      let new_word = word.concat(ing.value[idx]);
      word = new_word;
    }
    idx++;
  }

  word = "";
  
  idx = 0;
  while(des.value[idx] != '.') {
    if (des.value[idx] == ';') {
      arr2.push(word);
      word = "";
      idx++;
      continue;
    }

    if (!(des.value[idx] == ' ' && word.length == 0)) {
      let new_word = word.concat(des.value[idx]);
      word = new_word;
    }
    idx++;
  }


  const recipeData = {
    href: "recipe.html",
    imagePath: "../../static/images/photo2.png",
    imageAlt: recipe_name.value,
    recipeName: recipe_name.value,
    id: incId(),
    ingredients: arr,
    directions: arr2

  };






  recipes.push(recipeData);
  localStorage.setItem("recipes", JSON.stringify(recipes));

}



add.onclick = function () {
  Add_recipe();
}


let logged_in_user = localStorage.getItem("loggedUser");
if (logged_in_user === null) {
  logged_in_user = false;
  localStorage.setItem("loggedUser", logged_in_user);
} else {
  logged_in_user = JSON.parse(logged_in_user);
}

let logged_in_admin = localStorage.getItem("loggedAdmin");
if (logged_in_admin === null) {
  logged_in_admin = false;
  localStorage.setItem("loggedAdmin", logged_in_admin);
} else {
  logged_in_admin = JSON.parse(logged_in_admin);
}

let currentRecipe = localStorage.getItem("current");
if (currentRecipe === null) {
  localStorage.setItem("current", currentRecipe);
} else {
  currentRecipe = JSON.parse(currentRecipe);
}
