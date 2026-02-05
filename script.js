document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id:1,
            name:"Laptop",
            price:800,
            img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        },
        {
            id:2,
            name:"Smartphone",
            price:500,
            img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
        },
        {
            id:3,
            name:"Headphones",
            price:150,
            img:"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id:4,
            name:"Smart Watch",
            price:200,
            img:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
        }
    ];

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Load Products (guard if element missing)
    const productsDiv = document.getElementById("products");
    if (productsDiv) {
        products.forEach(p=>{
            productsDiv.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>$${p.price}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>`;
        })
    }

    // Add to Cart
    function addToCart(id){
        const item = cart.find(p=>p.id===id);
        if(item){
            item.qty++;
        }else{
            const product = products.find(p=>p.id===id);
            if (!product) return;
            cart.push({...product, qty:1});
        }
        saveCart();
    }

    // Save Cart
    function saveCart(){
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }

    // Update Cart UI (guard missing elements)
    function updateCart(){
        const cartCountEl = document.getElementById("cartCount");
        if (cartCountEl) {
            cartCountEl.innerText = cart.reduce((sum,i)=>sum+i.qty,0);
        }

        const cartItems = document.getElementById("cartItems");
        if (cartItems) {
            cartItems.innerHTML="";
            let total=0;

            cart.forEach((i,index)=>{
                total += i.price*i.qty;
                cartItems.innerHTML += `
                <div class="cart-item">
                    <span>${i.name} x ${i.qty}</span>
                    <button onclick="removeItem(${index})">X</button>
                </div>`;
            });

            const totalEl = document.getElementById("total");
            if (totalEl) totalEl.innerText = `$${total}`;
        }
    }

    // Remove Item
    function removeItem(index){
        cart.splice(index,1);
        saveCart();
    }

    // Toggle Cart (use computed style to handle initial state)
    function toggleCart(){
        const cartDiv=document.getElementById("cart");
        if (!cartDiv) return;
        const isHidden = getComputedStyle(cartDiv).display === "none";
        cartDiv.style.display = isHidden ? "block" : "none";
    }

    // expose handlers for inline `onclick` attributes
    window.addToCart = addToCart;
    window.removeItem = removeItem;
    window.toggleCart = toggleCart;

    updateCart();
});
