//yyyy-mm-dd
const Expenses = [
    {
        name: 'Electricity Bill',
        date: '2023-03-03',
        price: 234,
        type: '-'
    },
    {
        name: 'School Tuition',
        date: '2023-04-13',
        price: 124,
        type: '-'
    },
    {
        name: 'Bolt',
        date: '2023-04-15',
        price: 14,
        type: '-'
    },
    {
        name: 'Shoes',
        date: '2023-04-15',
        price: 140,
        type: '-'
    },
    {
        name: 'Prize',
        date: '2023-04-15',
        price: 100,
        type: '+'
    },
    {
        name: 'Pepco',
        date: '2023-02-03',
        price: 120,
        type: '-'
    },
    {
        name: 'Brunch',
        date: '2023-01-03',
        price: 250,
        type: '-'
    },
    {
        name: 'Scolarship',
        date: '2023-03-03',
        price: 500,
        type: '+'
    }
]

const Wallets = [
    {
        name: 'Home',
        value: 340
    },
    {
        name: 'Economies',
        value: 125
    }
]

const Categories = [
    {
        name: 'Utility',
        value: 87
    },
    {
        name: 'Health',
        value: 324
    }
]

let List = [
    {
        name: 'Food',
        value: 122
    },
    {
        name: 'Phone',
        value: 200
    }
]

let showRows = 5;

function updateSumTotal() {

    let totalSum = 0;

    Wallets.forEach(wallet =>{
        totalSum += parseInt(wallet.value);
    })
    let totalMoney = document.querySelector(".total-money h2");
    totalMoney.textContent = "$" + totalSum;
}


function updateSumExpense(){
    let totalSum = 0;
    Expenses.forEach(order =>{
        if(order.type==='-'){
            totalSum += parseInt(order.price);
        }
    })

    let totalMoney = document.querySelector(".total-expenses h2");
    totalMoney.textContent = "$" + totalSum;
}


function updateSumIncome(){
    let totalSum = 0;
    Expenses.forEach(order =>{
        if(order.type==='+'){
            totalSum += parseInt(order.price);
        }
    })

    let totalMoney = document.querySelector(".total-income h2");
    totalMoney.textContent = "$" + totalSum;
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


function updateExpenses(){
    const tbody = document.querySelector('.history table tbody');
    tbody.innerHTML = '';
    for (let i = Expenses.length - 1; i >= 0; i--) {
        if(showRows > 0){
            const order = Expenses[i];
            const tr = document.createElement('tr');

            tr.innerHTML = `
                    <td>${order.name}</td>
                    <td>${order.date}</td>
                    <td>${order.type}${order.price}</td>
                    <td><span class="material-symbols-outlined" onclick="deleteExpense(this.parentNode)">delete</span></td>
                    `;
            tbody.appendChild(tr);
            showRows--;
        }
    }
}
function deleteExpense(td){
    const name = td.parentNode.children[0].textContent;
    const typePrice = td.parentNode.children[2].textContent.split('');
    const type = typePrice[0];
    const price = parseInt(typePrice.slice(1).join(''));
    Expenses.forEach((item, index) => {
        if(name === item.name && type === item.type && price === item.price) {
            Expenses.splice(index, 1);
        }
    });
    console.log(Expenses);
    console.log(typePrice);
    showRows = 5;
    if(typePrice[0] === '-'){
        Wallets[0].value += price;
    }
    else{
        Wallets[0].value -= price;
    }
    updateWallets();
    updateExpenses();
    updateSumTotal();
    updateSumExpense();
    updateSumIncome();
}

function updateList(){
    const tbody = document.querySelector('.todo table tbody');
    tbody.innerHTML = '';
    List.forEach(item=>{
        const tr = document.createElement('tr');

        tr.innerHTML = `
                    <td><input type="checkbox" onclick="completeItem(this.parentNode)"></td>
                    <td>${item.name}</td>
                    <td>${item.value}</td>
                    <td><span class="material-symbols-outlined" onclick="deleteItem(this.parentNode)">delete</span></td>
                    `;
        tbody.appendChild(tr);
    })
}

function completeItem(td){
    const nameAdd = td.parentNode.children[1].textContent;
    const valueAdd = td.parentNode.children[2].textContent;
    const currentDate = new Date();
    Expenses.push({
        name: nameAdd,
        date: currentDate.toISOString().substring(0, 10),
        price: parseInt(valueAdd),
        type: '-'
    });
    console.log(Expenses);
    showRows = 5;
    updateExpenses();


    Wallets[0].value -= parseInt(valueAdd);
    updateWallets();
    updateSumTotal();
    updateSumExpense();
    deleteItem(td);
}

function deleteItem(td){
    const name = td.parentNode.children[1].textContent;
    const value = td.parentNode.children[2].textContent;
    List.forEach((item, index) => {
        if(name === item.name && parseInt(value) === item.value) {
            List.splice(index, 1);

        }
    });
    updateList();
}

function showMore() {
    let allRows = Expenses.length;
    let button = document.querySelector(".history .more");
    if (showRows === allRows) {
        showRows = 5;
        button.style.backgroundColor ="var(--card-color)";
    } else {
        showRows = allRows;
        button.style.backgroundColor ="var(--color-primary)";

    }
    let currentRows = showRows;
    updateExpenses();
    showRows = currentRows;

}