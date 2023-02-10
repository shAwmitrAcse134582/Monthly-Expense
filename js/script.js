//*Total Expenses calculation
document.getElementById('calculate-btn').addEventListener('click', function () {
    //*food expense
    const foodField = document.getElementById('food');
    const foodvalue = foodField.value;
    const foodAmount = parseInt(foodvalue);

    //*rent Expense
    const rentField = document.getElementById('rent');
    const rentvalue = rentField.value;
    const rentAmount = parseInt(rentvalue);

    //*cloth expense
    const clothField = document.getElementById('clothes');
    const clothValue = clothField.value;
    const clothAmount = parseInt(clothValue);

    //*Total Expense
    const TotalExpense = foodAmount + rentAmount + clothAmount;

    const TotalExpenseField = document.getElementById('total-expense');
    TotalExpenseField.innerText = TotalExpense;

    //*incomeField
    const incomeField = document.getElementById('income');
    const incomeValue = incomeField.value;
    const incomeAmount = parseInt(incomeValue);

    //*Balance Amount
    const BalanceField = document.getElementById('balance');
    const balanceAmount = incomeAmount - TotalExpense;
    BalanceField.innerText = balanceAmount;



});

//*savings calculation
document.getElementById('save').addEventListener('click', function () {
    //*save Money
    const savingsField = document.getElementById('saveMoney');
    const savingsParcent = savingsField.value;
    const savingValue = parseInt(savingsParcent);

    //*Balance Field
    const balanceField = document.getElementById('balance');
    const balanceValue = balanceField.innerText;
    const balanceAmount = parseInt(balanceValue);

    const parcentCalculation = balanceAmount * savingValue / 100;


    //*savings Amount field
    const savingsAmountField = document.getElementById('saving-amount');

    savingsAmountField.innerText = parcentCalculation;

    //*remaining Balance  Field
    const remainingBalanceAmount = balanceAmount - parcentCalculation;

    const remainingAmountField = document.getElementById('remaining-balance');
    remainingAmountField.innerText = remainingBalanceAmount;



})