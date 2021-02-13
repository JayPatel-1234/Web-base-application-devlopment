function Save() 
{
    let borrowamount = document.getElementById("borrowamount").value;
    let paymentterm = document.getElementById("paymentterm").value;
    let intrest = (borrowamount * paymentterm) / 12*3 ;
    let payment = borrowamount + intrest;
    let profit =  payment - borrowamount;
    let Decision = accept=index.html , decline=0 , needmoreinfo=0;
   
    localStorage.setItem('companyname', document.getElementById('companyname').value);
    localStorage.setItem('companyowner', document.getElementById('companyowner').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('intrest', intrest);
    localStorage.setItem('payment', payment);
    localStorage.setItem('profit', profit);
   }
   
function onLoad()
   {
    document.getElementById("companyname").value = localStorage.getItem('companyname');
    document.getElementById("companyowner").value = localStorage.getItem('companyowner');
    document.getElementById("email").value = localStorage.getItem('email');
    document.getElementById("phoneno").value = localStorage.getItem('phoneno');
    document.getElementById("annualsale").value = localStorage.getItem('annualsale');
    document.getElementById("borrowamount").value = localStorage.getItem('borrowamount');
    document.getElementById("paymentterm").value = localStorage.getItem('paymentterm');
   }
   
   
