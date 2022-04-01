let box = document.getElementById("box");

function payment() {
    cred1= document.getElementById("cred-1").value
cred2= document.getElementById("cred-2").value
cred3= document.getElementById("cred-3").value
    if(cred1.length==16&&cred2.length==3&&cred3.length!==0){
        payment1() 
    }else{
        console.log(cred1.length,cred2.length,cred3.length);
       alert("Invalid Card Details")
    }
    }
let trans = document.getElementById("transaction");  
let redirect = document.getElementById("redirect")  
function payment1(){
box.style.display="none";
trans.style.display="block"
setTimeout(function(trans){

alert("Your transaction is Successfull")

},4000)
setTimeout(function(){ 
window.location.href="landing.html"  
},4000)

}
