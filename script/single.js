let item=JSON.parse(localStorage.getItem("Singlepage"));
console.log(item)

item.forEach(function(elem){
    var inner_f =document.getElementById("inner-f")
var inner_f1 =document.getElementById("inner-f1")
var fcont2=document.getElementById("f-cont2")
 let h2=document.createElement("h2");
 h2.innerText=elem.name
 let p=document.createElement("p");
 p.innerText="Sold by Zulay Kitchen"
 let p1 = document.createElement("p");
 p1.innerText="Write a Review"
 let p2 = document.createElement("h1");
 p2.innerText="$"+27.99
 p2.style.textDecoration="line-through"
 let p3 = document.createElement("h1");
 p3.innerText="saved:$"+8.00
 let p4 = document.createElement("h1");
 p4.innerText=`$${elem.S_price}`
 let div1 = document.createElement("div");
 div1.style.display="flex";
 div1.style.padding="10px"
 div1.style.backgroundColor="whitesmoke"
 let img= document.createElement("img");
 img.src="https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg"
 img.style.height="40px"
 h3=document.createElement("h2")
 h3.innerText="Now accepting Crypto at Checkout!"
 color=document.createElement("h3")
 color.innerText=elem.color
 let button= document.createElement("button")
 button.className="btn-primary"
 button.innerText="Add to Cart"
 button.style.width="290px"
 button.addEventListener("click",function(){
     addCart(elem)
 })
 let div3 = document.createElement("div")
 div3.style.display="flex"
 div3.style.border="1px solid black"
 div3.style.padding="10px"
 let qty=document.createElement("p");
 qty.innerText="Qty"
 let input= document.createElement("input")
 input.type="number";
 input.style.width="30px"
 input.style.marginRight="40px"

 let p5 = document.createElement("p");
 p5.innerText="SKU: Z-PRTBL-BLNDR-BLCK"
 let p6 = document.createElement("h2");
 p6.innerText=elem.name
 let p7 = document.createElement("p");
 p7.innerText=elem.des
 let p15 = document.createElement("p");
 p15.innerText=elem.code
 let p16 = document.createElement("h2");
 p16.innerText=elem.name
 let p17 = document.createElement("h3");
 p17.innerText=elem.des
let img1= document.createElement("img");
 img1.className = "Fe-image"
 img1.src=elem.img

 inner_f.append(img1)
 div1.append(img,h3)
 div3.append(qty,input,button)
inner_f1.append(h2,p,p1,p2,p3,p4,div1,color,div3,p17)
fcont2.append(p5,p6,p7)
})


let f_array=[
{
        name:"Grunt Style Realtree Edge - Beer Season T-Shirt - Black",
        soldby:"Fifth Sun",
        S_price:24.95,
        img:"https://img.shop.com/Image/240000/249300/249385/products/1865547882.jpg?size=400x400",
        color:"red",
        code:"SKU: DNMC00103MTS",
         b_img:"https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg",
         des:"What has two ears, is the fastest land animal, and loves brunch? Give up? It's the Disney Minnie Mouse Cheetah Print Bow Signature Men's Tee! Get ready to pile on some mouse-eared pancakes while dressed for maximum bling!"
    },
    {
        name:"Animal House National Lampoon's Men's Bluto 7 Years Of College Short Sleeve T-Shirt",
        soldby:"Fifth Sun",
        S_price:24.99,
        img:"https://img.shop.com/Image/240000/243400/243406/products/1789678270.jpg?size=400x400",
        color:"red",
        code:"SKU: DNMC00103MTS",
         b_img:"https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg",
         des:"What has two ears, is the fastest land animal, and loves brunch? Give up? It's the Disney Minnie Mouse Cheetah Print Bow Signature Men's Tee! Get ready to pile on some mouse-eared pancakes while dressed for maximum bling!"
    },
    {
        name:"Grunt Style Alcohol Sanitizes T-Shirt - Heather Gray",
        soldby:"Fifth Sun",
        S_price:21.95,
        img:"https://img.shop.com/Image/240000/249300/249385/products/1865742326.jpg?size=400x400",
        color:"red",
        code:"SKU: DNMC00103MTS",
         b_img:"https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg",
         des:"What has two ears, is the fastest land animal, and loves brunch? Give up? It's the Disney Minnie Mouse Cheetah Print Bow Signature Men's Tee! Get ready to pile on some mouse-eared pancakes while dressed for maximum bling!"
    },
    {
        name:"Thymenol Unisex T-shirt",
        soldby:"Fifth Sun",
        S_price:20.00,
        img:"https://img.shop.com/Image/290000/291400/291468/products/1924804263.jpg?size=400x400",
        color:"red",
        code:"SKU: DNMC00103MTS",
         b_img:"https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg",
         des:"What has two ears, is the fastest land animal, and loves brunch? Give up? It's the Disney Minnie Mouse Cheetah Print Bow Signature Men's Tee! Get ready to pile on some mouse-eared pancakes while dressed for maximum bling!"
    },
    {
        name:"INC Mens Black Printed Short Sleeve Classic Fit T-Shirt",
        soldby:"Fifth Sun",
        S_price:9.98,
        img:"https://img.shop.com/Image/270000/278100/278132/products/1893293072.jpg?size=400x400",
        color:"red",
        code:"SKU: DNMC00103MTS",
         b_img:"https://bitpay.com/cdn/merchant-resources/bitpay-accepted-card-group.svg",
         des:"What has two ears, is the fastest land animal, and loves brunch? Give up? It's the Disney Minnie Mouse Cheetah Print Bow Signature Men's Tee! Get ready to pile on some mouse-eared pancakes while dressed for maximum bling!"
    }
]


f_array.map(function(elem){
let inner_f =document.getElementById("inner_f")
let inner_f1 =document.getElementById("inner_f1")
let cont1 =document.getElementById("f-cont1")

 let div = document.createElement("div");
 div.className = "similar"
 let h2=document.createElement("p");
 h2.className = "text_over"
 h2.innerText=elem.name
 let p=document.createElement("p");
 p.innerText=elem.sold_by
 let p1 = document.createElement("p");
 p1.innerText=elem.review
 let p2 = document.createElement("p");
 p2.innerText=elem.O_price
 let p3 = document.createElement("p");
 p3.innerText=elem.saved
 let p4 = document.createElement("h2");
 p4.innerText=`$${elem.S_price}`
 let img= document.createElement("img");
 img.src=elem.b_img
 let p5 = document.createElement("p");
 p5.innerText=elem.des_code
 let p6 = document.createElement("h2");
 p6.innerText=elem.heading
 let p7 = document.createElement("p");
 p7.innerText=elem.des
 let p8=document.createElement("p");
 p8.innerText=" $2.82 / 5%  Cashback"
 let img1= document.createElement("img");
 img1.style.width="200px"
 img1.style.height="150px"
 img1.src=elem.img

div.append(img1,h2,p4,p8)
cont1.append(div)



})



let cart=JSON.parse(localStorage.getItem("cartItems"))||[]

function addCart(elem){
cart.push(elem)
localStorage.setItem("cartItems",JSON.stringify(cart));
}

 

let cartItem=JSON.parse(localStorage.getItem("cartItems"))||[];
let cartbox = document.getElementById("itemcart")
displayCart(cartItem)
function displayCart(cartItem){
    cartbox.innerHTML=""
   
    cartItem.map(function(elem,index){
    let div = document.createElement("div")
    div.className="cart_div"
    let image = document.createElement("img")
    image.src=elem.img
    image.className="cart_image"
    let div1= document.createElement("div")
    let name = document.createElement("p")
    name.innerText=elem.name
    let price = document.createElement("p")
    price.innerText=`$${elem.S_price}`
    price.className="Cart_pr"
    let div2=document.createElement("div")
    div2.style.display="flex"
    let img1= document.createElement("img")
    img1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHW0SMQWZChkl4oDvFi4AYgt741v79pQc-A&usqp=CAU"
    img1.className="cart-cross"
    img1.addEventListener("click",function(){
        removeItem(index,elem)
    })
    let div3= document.createElement("div")
    div3.style.display="flex"
    let dis = document.createElement("p")
    dis.innerText ="+$0.38"
    let dis_img= document.createElement("img")
    dis_img.src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
    dis_img.className="cart-dollar"
    let dis1= document.createElement("p")
    dis1.innerText ="Cashback"
    div3.append(dis,dis_img,dis1)
    div2.append(div3,img1)
    div1.append(name,div2,price)
    div.append(image,div1)
    cartbox.append(div)
})

}

let price=0;
cartItem.map(function(elem){
    price+=Number(elem.S_price)
    localStorage.setItem("cartItems", JSON.stringify(cartItem));

})

document.getElementById("total_val").innerText=`$${price}`
let p = price
function removeItem(index,elem){
      cartItem.splice(index,1)
      p-=Number(elem.S_price);
      console.log(p)
      document.getElementById("total_val").innerText=Number(p).toFixed(2)
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
    
      displayCart(cartItem);

  }
    

  
  let cb = document.getElementById("cart-box")
  let cfix = document.getElementById("cfix")
  function cartDis(){
   cb.style.display = "none"
   cfix.style.display = "none"
  }
  function viewCart(){
      window.location.href ="cart.html"
  }