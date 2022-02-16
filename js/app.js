function getValue(id) {
    const idText = document.getElementById(id).value;
    const idValue = parseFloat(idText);
    return idValue;
}
document.getElementById('calculate').addEventListener('click', function () {
    /* const incomeText = document.getElementById('income').value;
    const income = parseFloat(incomeText); */
    const income = getValue('income');
    /*  const foodText = document.getElementById('food').value;
     const food = parseFloat(foodText); */
    const food = getValue('food');

    /*  const rentText = document.getElementById('rent').value;
     const rent = parseFloat(rentText); */
    const rent = getValue('rent');

    /*  const clothesText = document.getElementById('clothes').value;
     const clothes = parseFloat(clothesText); */
    const clothes = getValue('clothes')

    const expensesText = document.getElementById('expenses');
    const expenses = food + rent + clothes;
    expensesText.innerText = expenses;

    const balanceText = document.getElementById('balance')
    const balance = income - food - rent - clothes;
    balanceText.innerText = balance;


})