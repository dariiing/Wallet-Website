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
