let showRows = 3;
function updateExpenses(){
  const tbody = document.querySelector('table tbody');
  tbody.innerHTML = '';
  for (let i = Expenses.length - 1; i >= 0; i--) {
    if(showRows > 0){
      const order = Expenses[i];
      const tr = document.createElement('tr');

      tr.innerHTML = `
                    <td>${order.name}</td>
                    <td>${order.date}</td>
                    <td>${order.type}${order.price}</td>
                    `;
      tbody.appendChild(tr);
      showRows--;
    }
  }
}
function showMore() {
  let allRows = Expenses.length;
  let button = document.querySelector(".history span");
  if (showRows === allRows) {
    showRows = 3;
    button.style.backgroundColor ="var(--card-color)";
  } else {
    showRows = allRows;
    button.style.backgroundColor ="var(--color-primary)";

  }
  let currentRows = showRows;
  updateExpenses();
  showRows = currentRows;

}
function topFunction() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // chrome, firefox, IE, opera
}

function updateWallets(){
  const walletsContainer = document.querySelector('.types-wallet');
  walletsContainer.innerHTML = '<div class="wallet-form" id="wallet-form">\n' +
      '                                <form>\n' +
      '                                    <label for="wallet-name">Wallet name:</label><br>\n' +
      '                                    <input type="text" id="wallet-name" name="name" value="ex: Economies"><br>\n' +
      '                                    <label for="wallet-price">Value:</label><br>\n' +
      '                                    <input type="number" id="wallet-price" name="value" value="100" min="1"><br>\n' +
      '                                    <input type="button" name="button" value="Done" onclick="closeWallet(this.form)">\n' +
      '                                </form>\n' +
      '                            </div>';
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
  const categoriesContainer = document.querySelector('.types-cat');
  categoriesContainer.innerHTML = `<div class="category-form" id="category-form">
                                <form>
                                    <label for="category-name">Category name:</label><br>
                                    <input type="text" id="category-name" name="name" value="ex: Scholarship"><br>
                                    <label for="category-price">Value:</label><br>
                                    <input type="number" id="category-price" name="value" value="100" min="1"><br>
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


updateSumTotal();
updateSumExpense();
updateSumIncome();
populateWallets();
populateCategories();
updateWallets();
updateExpenses();
updateCategories();


function themeToggle() {
  const element = document.body;
  element.classList.toggle("dark-theme");
}

