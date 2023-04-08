function themeToggle() {
  var element = document.body;
  element.classList.toggle("dark-theme");
}

Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
                    <td>${order.name}</td>
                    <td>${order.date}</td>
                    <td>${order.price}</td>
                    <td>${order.type}</td>
                    `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})

function logExpense(){
  Orders.push({
    name: 'Gas Bill',
    date: '04/03/2023',
    price: 150,
    type: 'expense'
  });

  const lastOrder = Orders[Orders.length - 1];
  const tr = document.createElement('tr');
  const trContent = `
                    <td>${lastOrder.name}</td>
                    <td>${lastOrder.date}</td>
                    <td>${lastOrder.price}</td>
                    <td>${lastOrder.type}</td>
                    `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
}

function openPopup(){
  let popup = document.getElementById("popup");
  popup.classList.add("open-popup");
}

function closePopup(){
  let popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
}

function openWallet(){
  let popup = document.getElementById("wallet-form");
  popup.classList.add("open-wallet-form");
  popup = document.getElementById("sidebar");
  popup.classList.add("sidebar-height");
}

function closeWallet(){
  let popup = document.getElementById("wallet-form");
  popup.classList.remove("open-wallet-form");
  popup = document.getElementById("sidebar");
  popup.classList.remove("sidebar-height");
}

function openCategory(){
  let popup = document.getElementById("category-form");
  popup.classList.add("open-category-form");
  popup = document.getElementById("sidebar");
  popup.classList.add("sidebar-height");
}

function closeCategory(){
  let popup = document.getElementById("category-form");
  popup.classList.remove("open-category-form");
  popup = document.getElementById("sidebar");
  popup.classList.remove("sidebar-height");
}
