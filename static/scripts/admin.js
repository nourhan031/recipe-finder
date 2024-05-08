let add = document.getElementById("ptn_add");
let dlt = document.getElementById("ptn_dlt");
let edit = document.getElementById("ptn_edit");

function deleteRecipe() {
  let recipeName = document.getElementById("delrecipeName");
  let recipes = JSON.parse(localStorage.getItem("recipes"));

  if (recipes) {
    const index = recipes.findIndex(
      (recipe) => recipe.recipeName === recipeName.value
    );

    if (index !== -1) {
      recipes.splice(index, 1);

      localStorage.setItem("recipes", JSON.stringify(recipes));

      console.log(`Recipe '${recipeName}' deleted successfully.`);
    } else {
      console.log(`Recipe '${recipeName}' not found.`);
    }
  } else {
    console.log("No recipes found in local storage.");
  }
}

function edit_recipe() {
  let recipeName = document.getElementById("recipeName");
  let recipes = JSON.parse(localStorage.getItem("recipes"));
  let ing = document.getElementById("ingredients");
  let des = document.getElementById("description");

  if (recipes) {
    const index = recipes.findIndex(
      (recipe) => recipe.recipeName === recipeName.value
    );

    if (index !== -1) {
      let directions = [];
      let ingredients = [];
      let word = "";
      let idx = 0;
      while (ing.value[idx] != ".") {
        if (ing.value[idx] == ",") {
          ingredients.push(word);
          word = "";
          idx++;
          continue;
        }

        if (!(ing.value[idx] == " " && word.length == 0)) {
          let new_word = word.concat(ing.value[idx]);
          word = new_word;
        }
        idx++;
      }
      ingredients.push(word);

      word = "";

      idx = 0;
      while (des.value[idx] != ".") {
        if (des.value[idx] == ",") {
          directions.push(word);
          word = "";
          idx++;
          continue;
        }

        if (!(des.value[idx] == " " && word.length == 0)) {
          let new_word = word.concat(des.value[idx]);
          word = new_word;
        }
        idx++;
      }
      directions.push(word);

      const recipeData = {
        href: "recipe.html",
        imagePath: recipes[index].imagePath,
        imageAlt: recipeName.value,
        recipeName: recipeName.value,
        id: incId(),
        ingredients: ingredients,
        directions: directions,
      };
      deleteRecipeforEdit(recipeName);
      let recipes2 = JSON.parse(localStorage.getItem("recipes"));
      recipes2.push(recipeData);
      localStorage.setItem("recipes", JSON.stringify(recipes2));
    } else {
      console.log(`Recipe '${recipeName}' not found.`);
    }
  } else {
    console.log("No recipes found in local storage.");
  }
}

function deleteRecipeforEdit(recipeName) {
  let recipes = JSON.parse(localStorage.getItem("recipes"));

  if (recipes) {
    const index = recipes.findIndex(
      (recipe) => recipe.recipeName === recipeName.value
    );

    if (index !== -1) {
      recipes.splice(index, 1);

      localStorage.setItem("recipes", JSON.stringify(recipes));

      console.log(`Recipe '${recipeName}' deleted successfully.`);
    } else {
      console.log(`Recipe '${recipeName}' not found.`);
    }
  } else {
    console.log("No recipes found in local storage.");
  }
}

function Add_recipe() {
  let recipe_name = document.getElementById("recipeName");
  let ing = document.getElementById("ingredients");
  let des = document.getElementById("description");
  let arr = [];
  let word = "";
  let arr2 = [];

  let idx = 0;
  while (ing.value[idx] != ".") {
    if (ing.value[idx] == ",") {
      arr.push(word);
      word = "";
      idx++;
      continue;
    }

    if (!(ing.value[idx] == " " && word.length == 0)) {
      let new_word = word.concat(ing.value[idx]);
      word = new_word;
    }
    idx++;
  }
  arr.push(word);

  word = "";

  idx = 0;
  while (des.value[idx] != ".") {
    if (des.value[idx] == ",") {
      arr2.push(word);
      word = "";
      idx++;
      continue;
    }

    if (!(des.value[idx] == " " && word.length == 0)) {
      let new_word = word.concat(des.value[idx]);
      word = new_word;
    }
    idx++;
  }
  arr2.push(word);

  const recipeData = {
    href: "recipe.html",
    imagePath: "../../static/images/photo2.png",
    imageAlt: recipe_name.value,
    recipeName: recipe_name.value,
    id: incId(),
    ingredients: arr,
    directions: arr2,
  };

  recipes.push(recipeData);
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

dlt.onclick = function () {
  deleteRecipe();
};

add.onclick = function () {
  Add_recipe();
};
edit.onclick = function () {
  edit_recipe();
};
