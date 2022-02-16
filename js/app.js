
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

    /* expenses calculation */
    const expensesText = document.getElementById('expenses');
    const expenses = food + rent + clothes;
    expensesText.innerText = expenses;

    /* balance calculation */
    const balanceText = document.getElementById('balance')
    var balance = income - food - rent - clothes;
    balanceText.innerText = balance;
})

/* saving button event  */
document.getElementById('btn-save').addEventListener('click', function () {

    /* saving amount calculation */
    const savePercent = document.getElementById('save').value;
    var income = getValue('income');
    const save = income * parseFloat(savePercent) / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = save;

    /* remaining balance calculation */
    const balanceText = document.getElementById('balance').innerText;
    var balance = parseFloat(balanceText);
    const remainingBalance = document.getElementById('remaining-balance');
    const balanceCal = balance - save;
    remainingBalance.innerText = balanceCal;


})