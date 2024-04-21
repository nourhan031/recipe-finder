// Function to search for recipes by name or ingredient
function searchRecipes(query) {
    // Construct the API URL based on the user's query
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

    // Send a GET request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the API response
            displayRecipes(data.meals);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to display recipes on the webpage
function displayRecipes(meals) {
    const recipeContainer = document.getElementById('recipe-container');

    // Clear previous search results
    recipeContainer.innerHTML = '';

    // Check if there are any recipes returned
    if (meals === null) {
        recipeContainer.innerHTML = '<p>No recipes found. Please try a different search term.</p>';
        return;
    }

    // Loop through each recipe and display it
    meals.forEach(meal => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        // Create elements to display recipe information
        const recipeName = document.createElement('h3');
        recipeName.textContent = meal.strMeal;

        const recipeImage = document.createElement('img');
        recipeImage.src = meal.strMealThumb;
        recipeImage.alt = meal.strMeal;

        // Append elements to recipe card
        recipeCard.appendChild(recipeName);
        recipeCard.appendChild(recipeImage);
        recipeContainer.appendChild(recipeCard);

        // Add click event listener to each recipe card
        recipeCard.addEventListener('click', function() {
            const recipeId = meal.idMeal;
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
                .then(response => response.json())
                .then(data => {
                    // Once the detailed recipe data is fetched, you can display it on the same page
                    displayDetailedRecipe(data.meals[0]);
                })
                .catch(error => {
                    console.error('Error fetching detailed recipe data:', error);
                });
        });
    });
}

// Function to display detailed recipe information
function displayDetailedRecipe(recipe) {
    const recipeDetailContainer = document.getElementById('recipe-container');

    // Clear previous recipe details
    recipeDetailContainer.innerHTML = '';

    // Create elements to display detailed recipe information
    const recipeName = document.createElement('h3');
    recipeName.textContent = recipe.strMeal;

    const recipeImage = document.createElement('img');
    recipeImage.src = recipe.strMealThumb;
    recipeImage.alt = recipe.strMeal;

    const recipeInstructions = document.createElement('p');
    recipeInstructions.textContent = recipe.strInstructions;

    // Append elements to recipe detail container
    recipeDetailContainer.appendChild(recipeName);
    recipeDetailContainer.appendChild(recipeImage);
    recipeDetailContainer.appendChild(recipeInstructions);
}




// Event listener for the search form submission
const searchForm = document.querySelector('.example');
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = searchForm.search.value.trim();
    searchRecipes(searchTerm);
});
