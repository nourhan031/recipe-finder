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


