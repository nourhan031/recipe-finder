function createrecipeElement(recipeData) {
    if (!recipeData.href || recipeData.href === '') {
        return;
    }
    
    const recipeRow = document.createElement('tr');
    recipeRow.id = recipeData.id; // Set the id attribute here

    const recipeNameCell = document.createElement('td');
    recipeNameCell.textContent = recipeData.recipeName;

    const recipeDeleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    // deleteButton.textContent = 'Delete';
    recipeDeleteCell.appendChild(deleteButton);

    recipeRow.appendChild(recipeNameCell);
    // recipeRow.appendChild(recipeDeleteCell);

    return recipeRow;
}
