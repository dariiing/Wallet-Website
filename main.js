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
}

function topFunction() {
  document.body.scrollTop = 0; // safari
  document.documentElement.scrollTop = 0; // chrome, firefox, IE, opera
}

