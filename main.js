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