function createCategory(){
    let popup = document.getElementById("category-form");
    popup.classList.add("open-category-form");
    popup = document.getElementById("sidebar");
    popup.classList.add("sidebar-height");
}

function closeCategory(form){
    let popup = document.getElementById("category-form");
    popup.classList.remove("open-category-form");
    popup = document.getElementById("sidebar");
    popup.classList.remove("sidebar-height");
    let changeName = form.name.value;
    let changeValue = form.value.value;

    const div = document.createElement('div');
    div.setAttribute('class', 'wallet');
    div.innerHTML = `<span class="material-symbols-outlined">category</span>
                       <section class="text" onClick="openEditPopup(this)">
                       <h3>${changeName}</h3>
                       <h4>$${changeValue}</h4>
                       </section>`;

    Categories.push({
        name: changeName,
        value: changeValue
    });
    document.querySelector('.types-cat').appendChild(div);
}

function populateCategories(){
    let select = document.getElementById("cat-opt");

    select.innerHTML='';
    Categories.forEach(category =>{
        let option = document.createElement('option');
        option.value= category.name;
        option.text = category.name;
        select.appendChild(option);
    })
}