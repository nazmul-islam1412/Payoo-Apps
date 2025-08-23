document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault();

    const bankName=document.getElementById("bank").value;
    const accountNumber=parseInt(document.getElementById("account-number").value);
    const amount=parseInt(document.getElementById("amount").value);
    const pinNumber=document.getElementById("pin").value;

    const availableBalance=parseInt(document.getElementById("available-balance").innerText);
    
    
    const newAvailableBalance=amount+availableBalance;
    document.getElementById("available-balance").innerText=newAvailableBalance;
})