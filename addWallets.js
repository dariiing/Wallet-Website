function createWallet(){
    let popup = document.getElementById("wallet-form");
    popup.classList.add("open-wallet-form");
    popup = document.getElementById("sidebar");
    popup.classList.add("sidebar-height");
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

    updateSumTotal();
    populateWallets();
    populateCategories();
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