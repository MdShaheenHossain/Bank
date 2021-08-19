document.getElementById('deposite-button').addEventListener('click', function () {

    //catch the deposite input amond value
    const depositeAmount /*এটা ইনার টেগ হিসেবে কাজ করে (ভিডিও ২৬-২ এর ৯ঃ২০ থেকে দেখ।*/ = document.getElementById('deposite-input');
    const depositeAmountText = depositeAmount.value;
    const newInputDepositeAmount = parseFloat(depositeAmountText);

    //show the deposite total amount
    const depositeTotal = document.getElementById('depositeTotal');
    const newDepositeTotalText = depositeTotal.innerText; //innerText নিতে হবে। কারন এটা input field না। ইনপুট ফিল্ড ছাড়া সব গুলাকে ইনার টেক্স দ্বারা নিতে হয়।
    const newPreviousTotalAmount = parseFloat(newDepositeTotalText);

    const newTotalAmount = newInputDepositeAmount + newPreviousTotalAmount;
    depositeTotal.innerText = newTotalAmount;

    // clear the deposite input field 

    document.getElementById('deposite-input').value = '';

    //Alltotal Balance add
    const allTotal = document.getElementById('allTotalAmount');
    const allTotalAmountText = allTotal.innerText;
    const allTotalAmount = parseFloat(allTotalAmountText);

    const newAllTotalBalance = allTotalAmount + newInputDepositeAmount;
    allTotal.innerText = newAllTotalBalance;
});

// withdraw function 
document.getElementById('withDraw-button').addEventListener('click', function () {

    //catch the withdraw input amont value
    const withDrawAmount = document.getElementById('withDraw-input');
    const withDrawText = withDrawAmount.value;
    const newWithDrawAmount = parseFloat(withDrawText);


    //show the deposite total amount
    const withDrawTotal = document.getElementById('withDrawTotal');
    const withDrawTotalText = withDrawTotal.innerText;
    const withDrawTotalAmount = parseFloat(withDrawTotalText);

    const newWithDrawTotalAmount = newWithDrawAmount + withDrawTotalAmount;

    withDrawTotal.innerText = newWithDrawTotalAmount
    // clear the deposite input field 

    document.getElementById('withDraw-input').value = '';


    const allTotal = document.getElementById('allTotalAmount');
    const allTotalAmountText = allTotal.innerText;
    const allTotalAmount = parseFloat(allTotalAmountText);

    const newAllTotalBalance = allTotalAmount - newWithDrawAmount;
    allTotal.innerText = newAllTotalBalance;

});