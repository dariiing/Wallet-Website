function openPopup(){
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function cancelAddExpense(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

function closePopup(form){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    let inputName = form.name.value;
    let inputDate = form.date.value;
    let inputPrice = form.price.value;
    let inputType;
    if (form.type[0].checked) {
        inputType = '-';
    } else if (form.type[1].checked) {
        inputType = '+';
    }

    Expenses.push({
        name: form.name.value,
        date: form.date.value,
        price: form.price.value,
        type: inputType
    });

    updateExpense();
    updateIncome();

    const tr = document.createElement('tr');
    tr.innerHTML = `
                    <td>${inputName}</td>
                    <td>${inputDate}</td>
                    <td>${inputType}${inputPrice}</td>
                    `;
    const tbody = document.querySelector('table tbody');
    tbody.insertBefore(tr, tbody.firstChild);
}

function createWallet(){
    let popup = document.getElementById("wallet-form");
    popup.classList.add("open-wallet-form");
    popup = document.getElementById("sidebar");
    popup.classList.add("sidebar-height");
}

function createCategory(){
    let popup = document.getElementById("category-form");
    popup.classList.add("open-category-form");
    popup = document.getElementById("sidebar");
    popup.classList.add("sidebar-height");
}


function openEditPopup(form){
    let popup = document.querySelector('.edit-popup');
    popup.classList.add("open-popup");

    const nameInput = document.getElementById('change-name');
    const valueInput = document.getElementById('change-value');

    const changeBtn = document.getElementById('change');
    changeBtn.addEventListener('click', function() {
        let currentName = form.closest('.text').querySelector('.text h3');
        currentName.textContent = nameInput.value;
        let currentValue = form.closest('.text').querySelector('.text h4');
        currentValue.textContent = '$' + valueInput.value;
        updateSum();
        cancelEdit();
    });

    const deleteBtn = document.getElementById('delete');
    deleteBtn.addEventListener('click', function() {
        form.parentNode.remove();
        cancelEdit();
    });
}

function cancelEdit(){
    let popup = document.querySelector('.edit-popup');
    popup.classList.remove("open-popup");
}

function closeWallet(form){
    let popup = document.getElementById("wallet-form");
    popup.classList.remove("open-wallet-form");
    popup = document.getElementById("sidebar");
    popup.classList.remove("sidebar-height");
    let changeName = form.name.value;
    let changeValue = form.value.value;

    const div = document.createElement('div');
    div.setAttribute('class', 'wallet money');


    div.innerHTML = `<span class="material-symbols-outlined">wallet</span>
                       <section class="text" onClick="openEditPopup(this)">
                       <h3>${changeName}</h3>
                       <h4>$${changeValue}</h4>
                       </section>`;
    document.querySelector('.types-wallet').appendChild(div);

    Wallets.push({
        name: changeName,
        value: changeValue
    });

    updateSum();
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
    div.innerHTML = `<span class="material-symbols-outlined">star</span>
                       <section class="text" onClick="openEditPopup(this)">
                       <h3>${changeName}</h3>
                       <h4>$${changeValue}</h4>
                       </section>`;
    document.querySelector('.types-cat').appendChild(div);
}
