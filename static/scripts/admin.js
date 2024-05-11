let add = document.getElementById("ptn_add");
let dlt = document.getElementById("ptn_dlt");
let edit = document.getElementById("ptn_edit");

function Array_Formation(User_input) {
  let Array = [];
  let sentence = "";
  let idx = 0;
  while (User_input.value[idx] != ".") {
    if (User_input.value[idx] == ";") {
      Array.push(sentence);
      sentence = "";
      idx++;
      continue;
    }

    if (!(User_input.value[idx] == " " && sentence.length == 0)) {
      let new_sentence = sentence.concat(User_input.value[idx]);
      sentence = new_sentence;
    }
    idx++;
  }
  Array.push(sentence);

  return Array;

}


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
      alert(`Recipe '${recipeName.value}' deleted successfully.`);
    } else {
      console.log(`Recipe '${recipeName}' not found.`);
    }
  } else {
    console.log("No recipes found in local storage.");
    alert("No recipes found in local storage.");
  }
}


function edit_recipe() {
  let recipeName = document.getElementById("recipeName");
  let recipes = JSON.parse(localStorage.getItem("recipes"));
  let ingredients_inp = document.getElementById("ingredients");
  let description_inp = document.getElementById("description");

  if (recipes) {
    const index = recipes.findIndex(
      (recipe) => recipe.recipeName === recipeName.value
    );

    if (index !== -1) {
      const recipeData = {
        href: "recipe.html",
        imagePath: recipes[index].imagePath,
        imageAlt: recipeName.value,
        recipeName: recipeName.value,
        id: incId(),
        ingredients: Array_Formation(ingredients_inp),
        directions: Array_Formation(description_inp),
      };

      // Reuse deleteRecipe function
      deleteRecipe(recipeName.value);

      let updatedRecipes = [...recipes];
      updatedRecipes.splice(index, 1, recipeData);
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

      console.log(`Recipe '${recipeName.value}' updated successfully.`);
      alert(`Recipe '${recipeName.value}' updated successfully.`);
    } else {
      console.log(`Recipe '${recipeName.value}' not found.`);
      alert(`Recipe '${recipeName.value}' not found.`);
    }
  } else {
    console.log("No recipes found in local storage.");
    alert("No recipes found in local storage.");
  }
}




function Add_recipe() {
  let recipe_name = document.getElementById("recipeName");
  let ingredients_inp = document.getElementById("ingredients");
  let description_inp = document.getElementById("description");
  let x = document.getElementById("courseName");


  const recipeData = {
    href: "recipe.html",
    imagePath: "../../static/images/photo2.png",
    imageAlt: recipe_name.value,
    recipeName: recipe_name.value,
    categories: x.value,
    id: incId(),
    ingredients: Array_Formation(ingredients_inp),
    directions: Array_Formation(description_inp),
  };

  recipes.push(recipeData);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  console.log(`Recipe '${recipe_name.value}' added successfully.`);
  alert(`Recipe '${recipe_name.value}' added successfully.`);
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
