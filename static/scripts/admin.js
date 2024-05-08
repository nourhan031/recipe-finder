let add = document.getElementById("ptn_add");

function deleteRecipe(index) {
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes.splice(index, 1);
  localStorage.setItem("recipes", JSON.stringify(recipes));
}


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