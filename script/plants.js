async function showPlants(){

    let res = await fetch("http://localhost:3000/plants")
    let data= await res.json();
    console.log("data:",data)
    
    show(data)
    }
    let plants = document.getElementById("plants");
    
    let  itemDiv = document.getElementById("item_div")
    
    
    function show(item) {
    
        item.forEach(function(elem){
            let div = document.createElement("div")
        div.className = "prd-menimg"
        div.addEventListener("click",function(){
            singlePge(elem);
        })
        let img = document.createElement("img")
        img.src=elem.img
        img.className="prd-sdimg"
        let name = document.createElement("p")
        name.innerText=elem.name;
        name.style.height="30px"
        name.className="nameClass"
        div1 = document.createElement("div")
        div1.style.display="flex"
        let img1 = document.createElement("img")
        img1.src="https://img.shop.com/Image/resources/images/onecart-icon.svg"
        img1.style.width="20px"
        img1.style.height="20px"
        img1.className="prd-simg"
        let soldby = document.createElement("p")
        soldby.innerText=`Soldy by ${elem.soldby}`
        let price = document.createElement("h2")
        price.innerText=`$${elem.S_price}`
        div2 = document.createElement("div")
        div2.style.display="flex"
        let img2 = document.createElement("img")
        img2.src="https://img.shop.com/Image/resources/images/cashback-icon.svg"
        img2.style.width="20px"
        img2.style.height="20px"
        img2.className="prd-simg"
        let cashbk = document.createElement("p")
        cashbk.innerText=" up to $1.24 / 4%"
        let cshbak = document.createElement("p")
        cshbak.innerText="Cashback"
        let div3 = document.createElement("div")
        div3.style.display="flex";
        let btn = document.createElement("button")
        btn.innerText="See Details"
        btn.style.width="50%";
        btn.style.height="50px";
        btn.className="btn-prd"
        btn.addEventListener("click",function(){
            singlePge(elem)
        })
        let btn1 = document.createElement("button")
        btn1.innerText="Add to Cart"
        btn1.style.width="50%"
        btn1.style.height="50px";
        btn1.className="btn1-prd"
        btn1.addEventListener("click",function(){
            addCart(elem);
        })
        let main = document.createElement("div")
        div3.append(btn,btn1)
        div1.append(img1,soldby)
        div2.append(cashbk,img2,cshbak)
        div.append(img,name,div1,price,div2)
        main.append(div,div3)
        itemDiv.append(main)
        })
     
    
    }
    
    
    
    let product = []
    function singlePge(elem){
    product.push(elem)
    localStorage.setItem("Singlepage",JSON.stringify(product));
    window.location.href="single.html"
    }
    
    
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
    
    
     cb = document.getElementById("cart-box")
     cfix = document.getElementById("cfix")
    function cartDis(){
     cb.style.display = "none"
     cfix.style.display = "none"
    }
    function viewCart(){
    window.location.href ="cart.html"
    }