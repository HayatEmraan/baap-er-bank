document.getElementById('depositBtn').addEventListener('click', function(){
    const depositAmount = document.getElementById('depositAmount-hex');
    const depositValueN = depositAmount.value;
    const depositMoney = document.getElementById('depositAmount');
    const newValue = depositMoney.innerText;
    const parseNew = parseFloat(newValue);
    const depositNew = parseFloat(depositValueN);
    const currentTotal = parseNew + depositNew;
    depositMoney.innerText = currentTotal;
    const balance = document.getElementById('balance');
    const currentBalanceInt = balance.innerText;
    const totalCurrent = parseFloat(currentBalanceInt) + depositNew;
    balance.innerText = totalCurrent;
});

document.getElementById('withdrawBtn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdrawText');
    const withdrawAmountValue = withdrawAmount.value;
    const withdrawAmountValueInt = parseFloat(withdrawAmountValue);
    const withdrawDolar = document.getElementById('withdrawDolar');
    const balance = document.getElementById('balance');
    const currentBalanceInt = balance.innerText;
    if(withdrawAmountValueInt >= 0){
        const withdrawDolarInner = withdrawDolar.innerText;
        const newWithDrawAmount = parseFloat(withdrawDolarInner) + withdrawAmountValueInt;
        withdrawDolar.innerText = newWithDrawAmount;
        const newWithDraw = currentBalanceInt - withdrawAmountValueInt;
        balance.innerText = newWithDraw;
    }
    else{
        alert('Hey Mad! Withdraw Amount cant be Negative Value');
    }
});