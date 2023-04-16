function themeToggle() {
  const element = document.body;
  element.classList.toggle("dark-theme");
}

Orders.forEach(order => {
  const tr = document.createElement('tr');
  let type;
  if( order.type==='expense'){
    type='-';
  }
  else{
    type='+';
  }

  tr.innerHTML = `
                    <td>${order.name}</td>
                    <td>${order.date}</td>
                    <td>${type}${order.price}</td>
                    `;
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

  tr.innerHTML = `
                    <td>${lastOrder.name}</td>
                    <td>${lastOrder.date}</td>
                    <td>${lastOrder.price}</td>
                    <td>${lastOrder.type}</td>
                    `;
  document.querySelector('table tbody').appendChild(tr);
}

function openPopup(){
  let popup = document.getElementById("popup");
  popup.classList.add("open-popup");
}

function cancelAddExpense(){
  let popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
}

function closePopup(form){
  let popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
  let inputName = form.name.value;
  let inputDate = form.date.value;
  let inputPrice = form.price.value;
  let inputType;
  if (form.type[0].checked) {
    inputType = '-';
  } else if (form.type[1].checked) {
    inputType = '+';
  }
  const tr = document.createElement('tr');
  tr.innerHTML = `
                    <td>${inputName}</td>
                    <td>${inputDate}</td>
                    <td>${inputType}${inputPrice}</td>
                    `;
  const tbody = document.querySelector('table tbody');
  tbody.insertBefore(tr, tbody.firstChild);
}

function openWallet(){
  let popup = document.getElementById("wallet-form");
  popup.classList.add("open-wallet-form");
  popup = document.getElementById("sidebar");
  popup.classList.add("sidebar-height");
}


function openCategory(){
  let popup = document.getElementById("category-form");
  popup.classList.add("open-category-form");
  popup = document.getElementById("sidebar");
  popup.classList.add("sidebar-height");
}


function openEditPopup(){
  let popup = document.querySelector('.edit-popup');
  popup.classList.add("open-popup");
}

function cancelEdit(){
  let popup = document.querySelector('.edit-popup');
  popup.classList.remove("open-popup");
}

function closeWallet(form){
  let popup = document.getElementById("wallet-form");
  popup.classList.remove("open-wallet-form");
  popup = document.getElementById("sidebar");
  popup.classList.remove("sidebar-height");
  let changeName = form.name.value;
  let changeValue = form.value.value;

  const div = document.createElement('div');
  div.setAttribute('class', 'wallet');

  div.innerHTML = `<span class="material-symbols-outlined">wallet</span>
                       <section class="text" onClick="openEditPopup()">
                       <h3>${changeName}</h3>
                       <h4>$${changeValue}</h4>
                       </section>`;
  document.querySelector('.types-wallet').appendChild(div);
}

function closeCategory(form){
  let popup = document.getElementById("category-form");
  popup.classList.remove("open-category-form");
  popup = document.getElementById("sidebar");
  popup.classList.remove("sidebar-height");
  let changeName = form.name.value;
  let changeValue = form.value.value;

  const div = document.createElement('div');
  div.setAttribute('class', 'wallet');

  div.innerHTML = `<span class="material-symbols-outlined">star</span>
                       <section class="text" onClick="openEditPopup()">
                       <h3>${changeName}</h3>
                       <h4>$${changeValue}</h4>
                       </section>`;
  document.querySelector('.types-cat').appendChild(div);
}

