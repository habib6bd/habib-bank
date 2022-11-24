document.getElementById('depositButton').addEventListener('click', function() {
   
    const depositField = document.getElementById('depositField');
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

  const depositAmountField = document.getElementById('depositAmountField');

  const prevDepositAmountText = depositAmountField.innerText;
  const prevDepositAmount = parseFloat(prevDepositAmountText);
  //   console.log(prevDepositAmount);


const newDepositAmount = depositAmount + prevDepositAmount;
depositAmountField.innerText = newDepositAmount; 
//   console.log(newDepositAmount);

//update Balance
const totalBalanceAmount = document.getElementById('totalBalance');
const totalBalanceText = totalBalanceAmount.innerText;
const totalBalance = parseFloat(totalBalanceText);
// console.log(totalBalance);

//new total balance
const newTotalBanlace = totalBalance + depositAmount;
// totalBalance.innerText = newTotalBanlace;
totalBalanceAmount.innerText = newTotalBanlace;

depositField.value = '';

})

document.getElementById('withdrawButton').addEventListener('click', function() {
const withdrawField = document.getElementById('withdrawField')
   const withdrawAmountText = withdrawField.value;
   const withdrawAmount = parseFloat(withdrawAmountText)
//    console.log(withdrawAmount);

//update withdraw
const withdrawTotal = document.getElementById('withdrawTotal');
const prevWithdrawTotalText = withdrawTotal.innerText;
const prevWithdrawTotalAmount = parseFloat(prevWithdrawTotalText);

const newWithdrawTotal = prevWithdrawTotalAmount + withdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;

//update balance
const totalBalanceAmount = document.getElementById('totalBalance');
const totalBalanceText = totalBalanceAmount.innerText;
const totalBalance = parseFloat(totalBalanceText);
// console.log(totalBalance);  

const newBalanceTotal = totalBalance - withdrawAmount;
totalBalanceAmount.innerText = newBalanceTotal;

withdrawField.value = '';
})