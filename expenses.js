//yyyy-mm-dd
const Expenses = [
    {
        name: 'Electricity Bill',
        date: '2023-03-03',
        price: 234,
        type: '-'
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

function updateSum() {

    let totalSum = 0;

    Wallets.forEach(wallet =>{
        totalSum += parseInt(wallet.value);
    })
    let totalMoney = document.querySelector(".total-money h2");
    totalMoney.textContent = "$" + totalSum;
}


function updateExpense(){
    let totalSum = 0;
    Expenses.forEach(order =>{
        if(order.type==='-'){
            totalSum += parseInt(order.price);
        }
    })

    let totalMoney = document.querySelector(".total-expenses h2");
    totalMoney.textContent = "$" + totalSum;
}


function updateIncome(){
    let totalSum = 0;
    Expenses.forEach(order =>{
        if(order.type==='+'){
            totalSum += parseInt(order.price);
        }
    })

    let totalMoney = document.querySelector(".total-income h2");
    totalMoney.textContent = "$" + totalSum;
}
