function openPopup(){
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}

function cancelAddExpense(){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}

//add expense popup
function closePopup(form){
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
    let inputPrice = form.price.value;
    let inputType;
    if (form.type[0].checked) {
        inputType = '-';
    } else if (form.type[1].checked) {
        inputType = '+';
    }
    console.log(form.type[0].checked);
    console.log(form.type[1].checked);
    if(inputPrice === undefined || (form.type[0].checked===false && form.type[1].checked===false)){
        alert("Enter information correctly");
    }
    else{
        let walletSelect = document.getElementById("wallet-opt");
        let walletIndex = walletSelect.selectedIndex;
        let selectedWallet = walletSelect.options[walletIndex].value;
        let added = false;
        Wallets.forEach(wallet =>{
            if(wallet.name === selectedWallet && wallet.value>= parseInt(inputPrice) ){
                if(inputType === '-'){
                    wallet.value -= parseInt(inputPrice);
                }
                else if(inputType==='+'){
                    wallet.value += parseInt(inputPrice);
                }
                updateWallets();
                added = true;
            }
            else if(wallet.name === selectedWallet && wallet.value < parseInt(inputPrice) && inputType==='-' ){
                showNoMoney();
            }

        })
        if(added ===true){
            let catSelect = document.getElementById("cat-opt");
            let catIndex = catSelect.selectedIndex;
            let selectedCategory = catSelect.options[catIndex].value;

            Categories.forEach(category =>{
                if(category.name === selectedCategory && inputType==='-' ){
                    category.value += parseInt(inputPrice);
                    updateCategories();
                }
            })

            //tabel
            Expenses.push({
                name: form.name.value,
                date: form.date.value,
                price: parseInt(form.price.value),
                type: inputType,
                cat : selectedCategory
            });

            showRows = 5;
            updateWallets();
            updateCategories();
            updateExpenses();
            updateSumTotal();
            updateSumExpense();
            updateSumIncome();
            stringJSON();
        }
    }


}








