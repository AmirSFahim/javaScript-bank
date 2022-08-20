document.getElementById('deposite-submit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(deposit);

    const depositTotalElement = document.getElementById('deposit-show');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositeTotal;
    // console.log(depositShowFiled)

    const totalAmount = document.getElementById('total-amount');
    const allTotalAmountstring = totalAmount.innerText;
    const AlltotalAmount = parseFloat(allTotalAmountstring);
    const currentTotal = AlltotalAmount + newDepositAmount;
    totalAmount.innerText = currentTotal;
    // last step 
    depositField.value = '';
})