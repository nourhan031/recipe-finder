let seh = document.getElementById("search_tag");
let ptn = document.getElementById("ptn_tag");
let find = "";
let flag = false;
find = find.toLowerCase();

function check(recipeData) {
    let name = recipeData.recipeName.split(" ");
    name.forEach(element => {
        let word = element.toLowerCase();
        if (find == word) {
            flag = true;
        }
    });

    let ings = recipeData.ingredients;
    ings.forEach(element => {
        let words = element.split(" ");
        words.forEach(element => {
            word = element.toLowerCase();
            if (find == word) {
                flag = true;
            }
        });
    });
}

ptn.onclick = function () {
    const recipesList = document.getElementById("recipes-container");
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipesList.replaceChildren();

    find = seh.value;
    find = find.toLowerCase();

    if (recipesList && recipes) {
        recipes.forEach((recipeData) => {
            if (recipeData) {
                if (recipeData.href && recipeData.href !== '') {
                    flag = false;
                    check(recipeData);
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






