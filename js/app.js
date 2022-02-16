
function getValue(id) {
    const idText = document.getElementById(id).value;
    const idValue = parseFloat(idText);
    return idValue;
}
/* calculate button event */
document.getElementById('calculate').addEventListener('click', function () {

    var income = getValue('income');

    const food = getValue('food');

    const rent = getValue('rent');

    const clothes = getValue('clothes');
    /* string check */
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        const error = document.getElementById('error-string');
        error.style.display = 'block';
    }
    /* number check */
    else {
        if (income > 0 && food >= 0 && rent >= 0 && clothes >= 0) {
            /* expenses calculation */
            const expensesText = document.getElementById('expenses');
            const expenses = food + rent + clothes;
            if (income > expenses) {
                /* balance calculation */
                expensesText.innerText = expenses;
                const balanceText = document.getElementById('balance')
                var balance = income - food - rent - clothes;
                balanceText.innerText = balance;
                const error = document.getElementById('error-expenses');
                error.style.display = 'none';
            }
            /* error expenses message */
            else {
                const error = document.getElementById('error-expenses');
                error.style.display = 'block';
            }

            const error = document.getElementById('error-number');
            error.style.display = 'none';
        }
        /* error number message*/
        else {
            const error = document.getElementById('error-number');
            error.style.display = 'block';
        }
    }


})

/* saving button event  */
document.getElementById('btn-save').addEventListener('click', function () {

    /* saving amount calculation */
    const balanceText = document.getElementById('balance').innerText;
    var balance = parseFloat(balanceText);
    const savePercent = document.getElementById('save').value;
    var income = getValue('income');
    const save = income * parseFloat(savePercent) / 100;
    if (balance > save) {
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = save;

        /* remaining balance calculation */
        const remainingBalance = document.getElementById('remaining-balance');
        const balanceCal = balance - save;
        remainingBalance.innerText = balanceCal;
        const error = document.getElementById('error-saving');
        error.style.display = 'none';
    }
    /* error saving message */
    else {
        const error = document.getElementById('error-saving');
        error.style.display = 'block';
    }
})