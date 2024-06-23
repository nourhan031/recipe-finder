
 
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
            }
            tr.appendChild(td);
        }
    });
    

    body.appendChild(table);
}

createTable();