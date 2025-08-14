document.addEventListener('DOMContentLoaded',()=>{
    const products=[
        {id:1,name:"Product 1: ",price:29.99},
          {id:2,name:"Product 2: ",price:30.99},
            {id:3,name:"Product 3: ",price:49.99},
    ];
    const cart=[];
    const productList=document.getElementById('Product-list')
    const cartItems=document.getElementById('cart-items')
    const emptyCart=document.getElementById('empty-cart')
    const cartTotalMessage=document.getElementById('cart-total')
    const TotalpriceDisplay=document.getElementById('Total-price')
    const checkoutBtn=document.getElementById('checkout-btn')



    products.forEach(product=>{
        const productDiv=document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML=`
        <span>${product.name}-$${product.price.toFixed(2)}</span>
           <button data-id="${product.id}">Add to cart</button>`;

           productList.appendChild(productDiv);
    })

    productList.addEventListener('click',(e)=>{

        if(e.target.tagName==='BUTTON'){
           const productId= parseInt(e.target.getAttribute('data-id'))
           const product =products.find(p=>p.id===productId);
           addToCart(product)

        }
    })
    function addToCart(product){
        cart.push(product);
        renderCart();

    }
    function renderCart(){
        cartItems.innerText="";
        let totalPrice=0
        if(cart.length>0){
            emptyCart.classList.add("hidden")
              cartTotalMessage.classList.remove("hidden")
              cart.forEach((item,index)=>{
                totalPrice+=item.price
              const cartItem=  document.createElement('div')
              cartItem.innerHTML=`
              ${item.name}-$${item.price.toFixed(2)}`
              cartItems.appendChild(cartItem)
              TotalpriceDisplay.textContent=`${totalPrice}`

              })

        }else{
            emptyCart.classList.remove("hidden");
             TotalpriceDisplay.textContent=`$0.00`
          
        }
    }
    checkoutBtn.addEventListener('click',()=>{
        cart.length=0;
        alert("checkout successfully")
        renderCart();
    })



})