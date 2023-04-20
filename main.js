main();
updateSumTotal();
updateSumExpense();
updateSumIncome();
populateWallets();
populateCategories();
updateWallets();
updateExpenses();
updateCategories();
updateList();


function stringJSON(){
  const expensesJSON = JSON.stringify(Expenses);
  const walletsJSON = JSON.stringify(Wallets);
  const categoriesJSON = JSON.stringify(Categories);
  const listJSON = JSON.stringify(List);

  localStorage.setItem('expenses', expensesJSON);
  localStorage.setItem('wallets', walletsJSON);
  localStorage.setItem('categories', categoriesJSON);
  localStorage.setItem('list', listJSON);
}

function main() {
  const expensesJSON = localStorage.getItem('expenses');
  const walletsJSON = localStorage.getItem('wallets');
  const categoriesJSON = localStorage.getItem('categories');
  const listJSON = localStorage.getItem('list');

  Expenses = JSON.parse(expensesJSON, (key, value) => {
    if (key === 'price') {
      return Number(value);
    }
    return value;
  }) || [];
  Wallets = JSON.parse(walletsJSON, (key, value) => {
    if (key === 'value') {
      return Number(value);
    }
    return value;
  }) || [];
  Categories = JSON.parse(categoriesJSON, (key, value) => {
    if (key === 'value') {
      return Number(value);
    }
    return value;
  }) || [];
  List = JSON.parse(listJSON, (key, value) => {
    if (key === 'value') {
      return Number(value);
    }
    return value;
  }) || [];

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

function themeToggle() {
  const element = document.body;
  element.classList.toggle("dark-theme");

  if (element.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function topFunction() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // chrome, firefox, IE, opera
}

function resetMonth(){
  Categories.forEach(cat=>{
    cat.value = 0;
  })
  Expenses = [];
  stringJSON();
  updateCategories();
  updateCategories();
  updateSumExpense();
  updateSumIncome()
  updateExpenses();
}