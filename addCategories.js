function createCategory(){
    let popup = document.getElementById("category-form");
    popup.classList.add("open-category-form");
    popup = document.getElementById("sidebar");
    popup.classList.add("sidebar-height");
}

//adauga categorie noua
function closeCategory(form){
    let popup = document.getElementById("category-form");
    popup.classList.remove("open-category-form");
    popup = document.getElementById("sidebar");
    popup.classList.remove("sidebar-height");
    let changeName = form.name.value;

    let double = false;

    Categories.forEach(cat =>{
        if(cat.name === changeName){
            alert("Change the name of the category");
            double = true;
        }
    })
    if(double === false){
        const div = document.createElement('div');
        div.setAttribute('class', 'wallet');
        div.innerHTML = `<span class="material-symbols-outlined">category</span>
                       <section class="text" onClick="openEditPopup(this)">
                       <h3>${changeName}</h3>
                       <h4>$0</h4>
                       </section>`;

        Categories.push({
            name: changeName,
            value: 0
        });
        stringJSON();
        populateCategories();
        document.querySelector('.types-cat').appendChild(div);
    }

}

function populateCategories(){
    let select1 = document.getElementById("cat-opt");
    let select2 = document.getElementById("cat-todo");
    select1.innerHTML='';
    select2.innerHTML='';
    Categories.forEach(category =>{
        let option1 = document.createElement('option');
        option1.value= category.name;
        option1.text = category.name;
        select1.appendChild(option1);
        let option2 = document.createElement('option');
        option2.value= category.name;
        option2.text = category.name;
        select2.appendChild(option2);
    })
}

//se formeaza sidebar pt categorii
function updateCategories(){
    const categoriesContainer = document.querySelector('.types-cat');
    categoriesContainer.innerHTML = `<div class="category-form" id="category-form">
                                <form>
                                    <label for="category-name">Category name:</label><br>
                                    <input type="text" id="category-name" name="name" value="Scholarship"><br>
                                    <input type="button" name="button" value="Done" onclick="closeCategory(this.form)">
                                </form>
                            </div>`;
    Categories.forEach(category => {
        const div = document.createElement('div');
        div.setAttribute('class', 'wallet');


        div.innerHTML = `<span class="material-symbols-outlined">category</span>
                       <section class="text" onClick="openEditPopup(this)">
                       <h3>${category.name}</h3>
                       <h4>$${category.value}</h4>
                       </section>`;
        document.querySelector('.types-cat').appendChild(div);
    })
}
