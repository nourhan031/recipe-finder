
let recipes = JSON.parse(localStorage.getItem("recipes"));
 
function createTable() {
    let body = document.body;
    let table = document.createElement("table");

    

    recipes.forEach(recipe => {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for(let j = 0; j < 3; j++) {
            let td = document.createElement("td");
            let txt; 
            if (j == 0) {
                txt = document.createTextNode(recipe.recipeName);
                td.appendChild(txt);
            }

            if (j == 1) {
                let bt = document.createElement("button");
                bt.textContent = "Edit";
                td.appendChild(bt);
            }

            if (j == 2) {
                let bt = document.createElement("button");
                bt.textContent = "Delete";
                td.appendChild(bt);
                bt.onclick = function() {
                  deleteRecipe(recipe.recipeName);
                }
            }
            tr.appendChild(td);
        }
    });
    

    body.appendChild(table);
}

createTable();



function deleteRecipe(name) {
  
    let recipeName = name;
    let recipes = JSON.parse(localStorage.getItem("recipes"));
  
    if (recipes) {
      let index = recipes.findIndex(
        (recipe) => recipe.recipeName === recipeName
      );

      
  
      if (index !== -1) {
        recipes.splice(index, 1);
  
        localStorage.setItem("recipes", JSON.stringify(recipes));
  
        console.log(`Recipe '${recipeName}' deleted successfully.`);
        alert(`Recipe '${recipeName}' deleted successfully.`);
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
  
  