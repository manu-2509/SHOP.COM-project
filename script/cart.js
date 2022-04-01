let cart =JSON.parse(localStorage.getItem("cartItems"))||[]
let leftc= document.getElementById("left_cart")
displayCartItems(cart)
function displayCartItems(cart){
    leftc.innerHTML=null
    let id=Math.floor(Math.random()*(9999-1000+1)+1000)
    cart.forEach((elem,index)=>{
        let div6 = document.createElement("div");
        div6.style.display="flex"
        div6.style.padding="10px"
        let div= document.createElement("div")
        div.className="cart-divv"
        let image = document.createElement("img")
        image.src=elem.img
        image.className="cart-Iimg"
        let div1 = document.createElement("div")
        let name = document.createElement("h3")
        name.innerText=elem.name
        name.className="itemname-c"
        div1.className="cart-div1"
        let price= document.createElement("p")
        price.innerText=`$${elem.S_price}`
        let div3= document.createElement("div")
        div3.style.display="flex"
        let dis = document.createElement("p")
        dis.innerText ="+$0.38"
        let dis_img= document.createElement("img")
        dis_img.src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
        dis_img.className="cart-dollar"
        let dis1= document.createElement("p")
         dis1.innerText ="Cashback"
         let id_cart= document.createElement("p")
         id_cart.innerText=`Item#:${id}` 
         div4 = document.createElement("div")
         div4.style.display="flex"
         head1 = document.createElement("p")
         head1.innerText = "Quantity:"
         let input = document.createElement("input");
         input.type="number";
         input.style.width="35px";
         let anchor = document.createElement("a")
         anchor.href="httpx://value.com"
         anchor.innerText="Update"
         anchor.style.paddingTop="10px";
         anchor.style.marginLeft="15px"
         let div5 = document.createElement("div")
         let btn = document.createElement("button")
         btn.innerText="Save for Later"
         btn.className="btn-cart"
         let btn1 = document.createElement("button");
         btn1.innerText="Remove"
         btn1.addEventListener("click",function(){
             removeItem(index,elem)
         })
         btn1.className="btn-cart"
         let div8= document.createElement("div")
         div8.style.lineHeight="5px"
         div8.style.backgroundColor="rgb(240,241,247)"
         div8.style.marginLeft="45px"
        div8.style.height="150px";
        div8.style.width="250px";
         let div10 = document.createElement("div")
         div10.style.display="flex"
         let input2 = document.createElement("input")
         input2.type="checkbox"
         let imgg = document.createElement("img")
             imgg.src="https://img.shop.com/Image/resources/images/icon-autoship-white.svg"
             imgg.className="cart-dollar"
         let p7= document.createElement("p")
         p7.innerText="AutoShip Save 5.0%"
         let p8 = document.createElement("p")
         p8.innerText="Frequency:";
         let input5= document.createElement("input")
         input5.type="number"
         input5.style.width="50px"
          let p9= document.createElement("p")
          p9.innerText="* Recommended frequency"
          let hr = document.createElement("hr")
          div10.append(input2,imgg,p7)
          div8.append(div10,p8,input5,p9)
         div5.append(btn,btn1)
         div3.append(dis,dis_img,dis1)
         div1.append(name,price,div3,id_cart)
         div4.append(head1,input,anchor)
         div.append(div1,div4,div5)
         div6.append(image,div,div8)
         leftc.append(div6,hr)
    })
} 

let price=0;
cart.map(function(elem){
price+=Number(elem.S_price)
localStorage.setItem("cartItems", JSON.stringify(cart));

})

document.getElementById("mar-bi1").innerText=`$${price}`
document.getElementById("biil").innerText=`$${price/4}`
let p = price
function removeItem(index,elem){
cart.splice(index,1)
p-=Number(elem.S_price);
console.log(p)
document.getElementById("mar-bi1").innerText=Number(p).toFixed(2)
localStorage.setItem("cartItems", JSON.stringify(cart));
displayCartItems(cart)

}



function checkout(p){
console.log(cart.length)
if(cart.length==0){
  alert("Cart is empty. Please Add an Item");
}
else{
window.location.href="checkout.html"
}
}