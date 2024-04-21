function createRecipe(recipeData) {
    if (!recipeData.href || recipeData.href === '') {
        return;
      }
    const favoriteDiv = document.createElement('div');
    favoriteDiv.classList.add('category');
  
    const favoriteLink = document.createElement('a');
    favoriteLink.href = recipeData.href;
  
    const favoriteImage = document.createElement('img');
    favoriteImage.src = recipeData.imagePath;
    favoriteImage.alt = recipeData.imageAlt;
  
    const favoriteCaption = document.createElement('div');
    favoriteCaption.classList.add('caption');
    favoriteCaption.textContent = recipeData.recipeName;
  
    favoriteLink.appendChild(favoriteImage);
    favoriteLink.appendChild(favoriteCaption);
    favoriteDiv.appendChild(favoriteLink);
  
    return favoriteDiv;
  }