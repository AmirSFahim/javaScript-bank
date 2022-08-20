// step 1 
document.getElementById('btn-withdraw').addEventListener('click', function () {
// step 2 
    const withdrawField = document.getElementById('withdraw');
    const totalWithdrawString = withdrawField.value;
    
    const totalWithdraw = parseFloat(totalWithdrawString);
// step 7 
    withdrawField.value ="";
    if(isNaN(totalWithdraw)){
        alert('invalid NUmber')
        return;
    }
// step 3 
    const withdrawShow = document.getElementById('withdraw-show');
    const previousWithdrawString = withdrawShow.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    withdrawShow.innerText = totalWithdraw;

    // step 4 

    const afterWithdraw = document.getElementById('total-amount');
    const allWithdrawString = afterWithdraw.innerText;
    const allWithdraw = parseFloat(allWithdrawString);


    if(totalWithdraw > allWithdraw ){
        alert('stop tran');
        return;
    }
    // step  5 

    const currentTotalWithdraw = totalWithdraw + previousWithdraw;
    withdrawShow .innerText = currentTotalWithdraw;
// step 6
    const newBalace = allWithdraw - totalWithdraw;
    afterWithdraw.innerText = newBalace;


})