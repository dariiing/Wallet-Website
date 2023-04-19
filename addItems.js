function openAddItemPopup(){
    let popup = document.querySelector(".add-todo");
    popup.classList.add("open-popup");
}

function cancelAddItemPopup(){
    let popup = document.querySelector(".add-todo");
    popup.classList.remove("open-popup");
}

function closeAddItemPopup(form){
    let catSelect = document.getElementById("cat-todo");
    let catIndex = catSelect.selectedIndex;
    let selectedCategory = catSelect.options[catIndex].value;

    List.push({
        name: form.name.value,
        value: parseInt(form.price.value),
        cat: selectedCategory
    })

    updateList();
    cancelAddItemPopup();
    stringJSON();
}

function closeNoMoney(){
    let popup = document.querySelector(".no-money");
    popup.classList.remove("open-popup");
}