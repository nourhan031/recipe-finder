document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const recipeName = document.getElementById('recipe-name').value;
    
    // Collect all ingredient values
    const ingredients = Array.from(document.querySelectorAll('#ingredients-group input[name="ingredient"]'))
                             .map(input => input.value);
                             
    // Collect all step values
    const steps = Array.from(document.querySelectorAll('#steps-group input[name="step"]'))
                       .map(input => input.value);
    
    const newRecipe = {
        name: recipeName,
        ingredients: ingredients,
        steps: steps
    };
    
    console.log('New Recipe:', newRecipe);
    
    
    // Add your code here to save the new recipe or update the UI

    const recipeData = {
        href: "recipe.html",
        imagePath: "../../static/images/photo2.png",
        imageAlt: newRecipe.name,
        recipeName: newRecipe.name,
        categories: "Main course",
        id: incId(),
        ingredients: newRecipe.ingredients,
        directions: newRecipe.steps,
      };
    
      recipes.push(recipeData);
      localStorage.setItem("recipes", JSON.stringify(recipes));
      console.log(`Recipe '${recipe_name.value}' added successfully.`);
      alert(`Recipe '${recipe_name.value}' added successfully.`);
});

function addIngredient() {
    const ingredientsGroup = document.getElementById('ingredients-group');
    const newIngredientInput = document.createElement('div');
    newIngredientInput.classList.add('ingredient-item');
    newIngredientInput.innerHTML = '<input type="text" name="ingredient" required> <button type="button" onclick="removeElement(this)">-</button>';
    ingredientsGroup.appendChild(newIngredientInput);
}

function addStep() {
    const stepsGroup = document.getElementById('steps-group');
    const newStepInput = document.createElement('div');
    newStepInput.classList.add('step-item');
    newStepInput.innerHTML = '<input type="text" name="step" required> <button type="button" onclick="removeElement(this)">-</button>';
    stepsGroup.appendChild(newStepInput);
}

function removeElement(button) {
    button.parentElement.remove();
}


  