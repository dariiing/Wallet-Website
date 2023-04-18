function updateExpenses(){
  Expenses.forEach(order => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
                    <td>${order.name}</td>
                    <td>${order.date}</td>
                    <td>${order.type}${order.price}</td>
                    `;
    document.querySelector('table tbody').appendChild(tr);
  })
}

function updateWallets(){
  Wallets.forEach(wallet => {
    const div = document.createElement('div');
    div.setAttribute('class', 'wallet money');


    div.innerHTML = `<span class="material-symbols-outlined">wallet</span>
                       <section class="text" onClick="openEditPopup(this)">
                       <h3>${wallet.name}</h3>
                       <h4>$${wallet.value}</h4>
                       </section>`;
    document.querySelector('.types-wallet').appendChild(div);
  })
}

function updateCategories(){
  Categories.forEach(category => {
    const div = document.createElement('div');
    div.setAttribute('class', 'wallet');


    div.innerHTML = `<span class="material-symbols-outlined">wallet</span>
                       <section class="text" onClick="openEditPopup(this)">
                       <h3>${category.name}</h3>
                       <h4>$${category.value}</h4>
                       </section>`;
    document.querySelector('.types-cat').appendChild(div);
  })
}


updateSum();
updateExpense();
updateIncome();
populateWallets();
populateCategories();
updateWallets();
updateExpenses();
updateCategories();


function themeToggle() {
  const element = document.body;
  element.classList.toggle("dark-theme");
}

