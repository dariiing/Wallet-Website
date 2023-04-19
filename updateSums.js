//yyyy-mm-dd
const Expenses = [
    {
        name: 'Electricity Bill',
        date: '2023-03-03',
        price: 234,
        type: '-',
        cat: 'Utility'
    },
    {
        name: 'School Tuition',
        date: '2023-04-13',
        price: 124,
        type: '-',
        cat: 'Utility'
    },
    {
        name: 'Bolt',
        date: '2023-04-15',
        price: 14,
        type: '-',
        cat: 'Utility'
    },
    {
        name: 'Shoes',
        date: '2023-04-15',
        price: 140,
        type: '-',
        cat: 'Utility'
    },
    {
        name: 'Prize',
        date: '2023-04-15',
        price: 100,
        type: '+',
        cat: 'Utility'
    },
    {
        name: 'Pepco',
        date: '2023-02-03',
        price: 120,
        type: '-',
        cat: 'Utility'
    },
    {
        name: 'Brunch',
        date: '2023-01-03',
        price: 250,
        type: '-',
        cat: 'Health'
    },
    {
        name: 'Scolarship',
        date: '2023-03-03',
        price: 500,
        type: '+',
        cat: 'Utility'
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
        value: 0
    },
    {
        name: 'Health',
        value: 0
    }
]

let List = [
    {
        name: 'Food',
        value: 122,
        cat: 'Utility'
    },
    {
        name: 'Phone',
        value: 200,
        cat: 'Utility'
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
//delete button
function deleteExpense(td){
    const name = td.parentNode.children[0].textContent;
    const typePrice = td.parentNode.children[2].textContent.split('');
    const type = typePrice[0];
    let price = parseInt(typePrice.slice(1).join(''));
    Expenses.forEach((item, index) => {
        if(name === item.name && type === item.type && price === item.price) {
            Expenses.splice(index, 1);
        }
    });

    showRows = 5;
    let totalSum = 0;

    Wallets.forEach(wallet =>{
        totalSum += wallet.value ;
    })
    if((totalSum < price) && typePrice[0] === '+' ){
        showNoMoney();
    }
    else{
         Wallets.forEach(wallet =>{
            if(price!==0){
                if(typePrice[0] === '+'){
                    if(wallet.value>price) {
                        wallet.value -= price;
                        price = 0;
                        updateWallets();
                    }
                    else{
                        price= price - wallet.value;
                        wallet.value = 0;
                        updateWallets();
                    }
                }
                else if(typePrice[0] === '-'){
                    wallet.value +=price;
                    price= 0;
                    updateWallets();
                }
            }
        })
        updateWallets();
        updateExpenses();
        updateSumTotal();
        updateSumExpense();
        updateSumIncome();
    }
    console.log(Expenses);
}

function updateList(){
    const tbody = document.querySelector('.todo table tbody');
    tbody.innerHTML = '';
    if(List.length === 0){
        tbody.innerHTML = `<p>add a new item</p>`;
    }
    List.forEach(item=>{
        const tr = document.createElement('tr');

        tr.innerHTML = `
                    <td><input type="checkbox" onclick="completeItem(this.parentNode)"></td>
                    <td>${item.name}</td>
                    <td>${item.value}</td>
                    <td>${item.cat}</td>
                    <td><span class="material-symbols-outlined" onclick="deleteItem(this.parentNode)">delete</span></td>
                    `;
        tbody.appendChild(tr);
    })
}


//checkbox button
function completeItem(td){
    const nameAdd = td.parentNode.children[1].textContent;
    const valueAdd = td.parentNode.children[2].textContent;
    let categoryAdd = td.parentNode.children[3].textContent;
    const currentDate = new Date();

    let totalSum = 0;
    let currentSum =  parseInt(valueAdd);

    Wallets.forEach(wallet =>{
        totalSum +=wallet.value;
    })

    if(totalSum >= currentSum){
        Expenses.push({
            name: nameAdd,
            date: currentDate.toISOString().substring(0, 10),
            price: parseInt(valueAdd),
            type: '-',
            cat: categoryAdd
        });

        console.log(Expenses);
        showRows = 5;
        updateExpenses();

        Wallets.forEach(wallet =>{
            if(wallet.value >= currentSum && currentSum!==0){
                wallet.value -= currentSum;
                currentSum = 0;
            }
            else if(wallet.value < currentSum && currentSum!==0){
                currentSum -= wallet.value;
                wallet.value = 0;
            }
        })
        Categories.forEach(category =>{
            if(category.name === categoryAdd){
                category.value = parseInt(valueAdd);
            }
        })
        updateWallets();
        updateSumTotal();
        updateSumExpense();
        updateCategories();
        deleteItem(td);
    }
    else{
        showNoMoney();
    }
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

function showNoMoney(){
    let popup = document.querySelector(".no-money");
    popup.classList.add("open-popup");
}