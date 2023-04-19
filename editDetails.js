function cancelEdit(){
    let popup = document.querySelector('.edit-popup');
    popup.classList.remove("open-popup");
}
function openEditPopup(form){
    let popup = document.querySelector('.edit-popup');
    popup.classList.add("open-popup");
    //
    // const nameInput = document.getElementById('change-name');
    // const valueInput = document.getElementById('change-value');
    //
    // const changeBtn = document.getElementById('change');
    // changeBtn.addEventListener('click', function() {
    //     let currentName = form.querySelector('.text h3');
    //     let currentValue = form.querySelector('.text h4');
    //
    //     Wallets.forEach(wallet => {
    //         if (wallet.name === currentName.textContent && wallet.value === currentValue.textContent.replace('$', '')) {
    //             wallet.name = nameInput.value;
    //             wallet.value = valueInput.value;
    //
    //             currentName.textContent = nameInput.value;
    //             currentValue.textContent = '$' + valueInput.value;
    //         }
    //     });
    //
    //     updateSumTotal();
    //     populateWallets();
    //     populateCategories();
    //     cancelEdit();
    // });

    const deleteBtn = document.getElementById('delete');
    deleteBtn.addEventListener('click', function() {
        let currenName = form.parentNode.querySelector('h3');
        Wallets.forEach((wallet, index) => {
            if (wallet.name === currenName.textContent) {
                Wallets.splice(index, 1);
                updateSumTotal();
                populateWallets();
            }
        });
        Categories.forEach((category, index) => {
            if (category.name === currenName.textContent) {
                Categories.splice(index, 1);
            }
        });
        form.parentNode.remove();
        cancelEdit();
        stringJSON();
    });
}