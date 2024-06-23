let search_inp = document.getElementById("search_tag");
let search_ptn = document.getElementById("ptn_tag");
let search_recipe = document.getElementById("ptn_recipe");
let target = "";
let flag = false;
target = target.toLowerCase();

function check(recipeData, searchType) {
    let name = recipeData.recipeName.split(" ");
    let word = "";
    if (searchType === "recipe") {
        name.forEach(element => {
        word = element.toLowerCase();
        if (target == word) {
            flag = true;
        }
    });
    }

    let ings = recipeData.ingredients;
    if (searchType === "ingredient") {
        ings.forEach(element => {
        let words = element.split(" ");
        words.forEach(element => {
            word = element.toLowerCase();
            let idx = 0;
            new_word = "";
            while(word[idx] != null) {
                if (word[idx] >= 'a' && word[idx] <= 'z') {
                    new_word = new_word.concat(word[idx]);
                }
                idx++;
            }
            word = new_word;
            if (target == word) {
                flag = true;
            }
        });
    });
}
}


search_ptn.onclick = function () {
    const recipesList = document.getElementById("recipes-container");
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipesList.replaceChildren();

    target = search_inp.value;
    target = target.toLowerCase();

    if (recipesList && recipes) {
        recipes.forEach((recipeData) => {
            if (recipeData) {
                if (recipeData.href && recipeData.href !== '') {
                    flag = false;
                    check(recipeData, "ingredient");
                    if (flag) {
                        const recipeDiv = createrecipeElement(recipeData);
                        recipesList.appendChild(recipeDiv);
                    }
                }
            }
        });
    }
}


search_recipe.onclick = function(){
    const recipesList = document.getElementById("recipes-container");
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipesList.replaceChildren();

    target = search_inp.value;
    target = target.toLowerCase();

    if (recipesList && recipes) {
        recipes.forEach((recipeData) => {
            if (recipeData) {
                if (recipeData.href && recipeData.href !== '') {
                    flag = false;
                    check(recipeData, "recipe");
                    if (flag) {
                        const recipeDiv = createrecipeElement(recipeData);
                        recipesList.appendChild(recipeDiv);
                    }
                }
            }
        });
    }
}


function handleRecipeClick(recipeId) {
    const recipesList = JSON.parse(localStorage.getItem("recipes")) || [];
    if (recipeId !== null) {
        const id = parseInt(recipeId);
        const recipe = recipesList.find(recipe => recipe.id === id);
        if (recipe !== undefined) {
            localStorage.setItem('current', JSON.stringify(recipe));
            window.location = "/templates/recipes/recipe.html";
        }
    }
}






function createrecipeElement(recipeData) {
    if (!recipeData.href || recipeData.href === '') {
        return;
    }

    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('category');
    recipeDiv.id = recipeData.id; // Set the id attribute here
    // recipeDiv.classList.add('id');

    const recipelink = document.createElement('a');
    // recipelink.href = 'recipe.html';
    const recipeImage = document.createElement('img');
    recipeImage.src = recipeData.imagePath;
    recipeImage.alt = recipeData.imageAlt;
    const recipeCaption = document.createElement('div');
    recipeCaption.classList.add('caption');
    recipeCaption.textContent = recipeData.recipeName;
    recipelink.appendChild(recipeImage);
    recipelink.appendChild(recipeCaption);
    recipeDiv.appendChild(recipelink);
    return recipeDiv;
}

