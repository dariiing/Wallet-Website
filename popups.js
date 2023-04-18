function openPopup(){
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function cancelAddExpense(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

//add expense
function closePopup(form){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    let inputPrice = form.price.value;
    let inputType;
    if (form.type[0].checked) {
        inputType = '-';
    } else if (form.type[1].checked) {
        inputType = '+';
    }

    let walletSelect = document.getElementById("wallet-opt");
    let walletIndex = walletSelect.selectedIndex;
    let selectedWallet = walletSelect.options[walletIndex].value;

    Wallets.forEach(wallet =>{
        if(wallet.name === selectedWallet ){
            if(inputType === '-'){
                wallet.value -= parseInt(inputPrice);
            }
            else{
                wallet.value += parseInt(inputPrice);
            }
           updateWallets();
        }
    })

    let catSelect = document.getElementById("cat-opt");
    let catIndex = catSelect.selectedIndex;
    let selectedCategory = catSelect.options[catIndex].value;

    Categories.forEach(category =>{
        if(category.name === selectedCategory ){
            if(inputType === '-'){
                category.value -= parseInt(inputPrice);
            }
            else{
                category.value += parseInt(inputPrice);
            }
            updateCategories();
        }
    })

    //tabel
    Expenses.push({
        name: form.name.value,
        date: form.date.value,
        price: form.price.value,
        type: inputType
    });

    showRows = 5;
    updateExpenses();
    updateSumTotal();
    updateSumExpense();
    updateSumIncome();
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

//this = div cu wallet
function openEditPopup(form){
    let popup = document.querySelector('.edit-popup');
    popup.classList.add("open-popup");

    const nameInput = document.getElementById('change-name');
    const valueInput = document.getElementById('change-value');

    const changeBtn = document.getElementById('change');
    changeBtn.addEventListener('click', function() {
        let currentName = form.querySelector('.text h3');
        let currentValue = form.querySelector('.text h4');

        Wallets.forEach(wallet => {
            if (wallet.name === currentName.textContent && wallet.value === currentValue.textContent.replace('$', '')) {
                wallet.name = nameInput.value;
                wallet.value = valueInput.value;

                currentName.textContent = nameInput.value;
                currentValue.textContent = '$' + valueInput.value;
            }
        });

        updateSumTotal();
        populateWallets();
        populateCategories();
        cancelEdit();
    });

    const deleteBtn = document.getElementById('delete');
    deleteBtn.addEventListener('click', function() {
        let currenName = form.parentNode.querySelector('h3');
        Wallets.forEach((wallet, index) => {
            if (wallet.name === currenName.textContent) {
                Wallets.splice(index, 1);
                updateSumTotal();
                populateWallets();
            }
        });
        form.parentNode.remove();

        cancelEdit();
    });
}
function cancelEdit(){
    let popup = document.querySelector('.edit-popup');
    popup.classList.remove("open-popup");
}

//new wallet
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

    updateSumTotal();
    populateWallets();
    populateCategories();
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

    Categories.push({
        name: changeName,
        value: changeValue
    });
    document.querySelector('.types-cat').appendChild(div);
}

function populateWallets(){
    let select = document.getElementById("wallet-opt");

    select.innerHTML='';
    Wallets.forEach(wallet =>{
        let option = document.createElement('option');
        option.value= wallet.name;
        option.text = wallet.name;
        select.appendChild(option);
    })
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

