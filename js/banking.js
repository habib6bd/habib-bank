function getInput(inputId) {
  debugger
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const inputAmount = parseFloat(inputText);

  //clear
  inputField.value = '';

  return inputAmount;

}

function updateTotal(updateId, depositAmount ) {
  const depositAmountField = document.getElementById(updateId);
  const prevDepositAmountText = depositAmountField.innerText;
  const prevDepositAmount = parseFloat(prevDepositAmountText);
  depositAmountField.innerText = depositAmount + prevDepositAmount;
}


function getCurrentBalance() {
  const totalBalanceAmount = document.getElementById('totalBalance');
  const totalBalanceText = totalBalanceAmount.innerText;
  const totalBalance = parseFloat(totalBalanceText);
  return totalBalance;
}

function updateBalance(amount, isAdd) {
  const totalBalanceAmount = document.getElementById('totalBalance');
  // const totalBalanceText = totalBalanceAmount.innerText;
  // const totalBalance = parseFloat(totalBalanceText);
  
  // totalBalanceAmount.innerText = totalBalance + amount;
const totalBalance = getCurrentBalance()

if(isAdd == true) {
  totalBalanceAmount.innerText = totalBalance + amount;
} else {
  totalBalanceAmount.innerText = totalBalance - amount;
}
}


document.getElementById('depositButton').addEventListener('click', function() {
  
  //Get input with function
const depositAmount =  getInput('depositField');
if( depositAmount > 0) {

  //Update total with function
  updateTotal('depositAmountField',depositAmount);
  
  //Update balance with function
  updateBalance(depositAmount, true)
}


   
    /* const depositField = document.getElementById('depositField');
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText); */
    // console.log(depositAmount);


  /* const depositAmountField = document.getElementById('depositAmountField');
  const prevDepositAmountText = depositAmountField.innerText;
  const prevDepositAmount = parseFloat(prevDepositAmountText);
  depositAmountField.innerText = depositAmount + prevDepositAmount; */


//update Balance
/* const totalBalanceAmount = document.getElementById('totalBalance');
const totalBalanceText = totalBalanceAmount.innerText;
const totalBalance = parseFloat(totalBalanceText);
totalBalanceAmount.innerText = totalBalance + depositAmount; */
// console.log(totalBalance);

//new total balance
// const newTotalBanlace = totalBalance + depositAmount;
// totalBalance.innerText = newTotalBanlace;


// depositField.value = '';

})

document.getElementById('withdrawButton').addEventListener('click', function() {
//Get input with function
const withdrawAmount = getInput('withdrawField');
const currentBalace = getCurrentBalance()
if(withdrawAmount > 0 && withdrawAmount < currentBalace) {

  //Update total with function
  updateTotal('withdrawTotal', withdrawAmount);
  
  updateBalance(withdrawAmount, false)
}

// const withdrawField = document.getElementById('withdrawField')
//    const withdrawAmountText = withdrawField.value;
//    const withdrawAmount = parseFloat(withdrawAmountText)
//    console.log(withdrawAmount);

//update withdraw
// const withdrawTotal = document.getElementById('withdrawTotal');
// const prevWithdrawTotalText = withdrawTotal.innerText;
// const prevWithdrawTotalAmount = parseFloat(prevWithdrawTotalText);
// withdrawTotal.innerText = prevWithdrawTotalAmount + withdrawAmount;
// withdrawTotal.innerText = newWithdrawTotal;

//update balance
/* const totalBalanceAmount = document.getElementById('totalBalance');
const totalBalanceText = totalBalanceAmount.innerText;
const totalBalance = parseFloat(totalBalanceText);
totalBalanceAmount.innerText = totalBalance - withdrawAmount; */
// totalBalanceAmount.innerText = newBalanceTotal;

// withdrawField.value = '';
})