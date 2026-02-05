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
        img:"data:image/jpeg;base64,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"
    },
    {
        id:4,
        name:"Smart Watch",
        price:200,
        img:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    }
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Load Products
const productsDiv = document.getElementById("products");
products.forEach(p=>{
    productsDiv.innerHTML += `
    <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
})

// Add to Cart
function addToCart(id){
    const item = cart.find(p=>p.id===id);
    if(item){
        item.qty++;
    }else{
        const product = products.find(p=>p.id===id);
        cart.push({...product, qty:1});
    }
    saveCart();
}

// Save Cart
function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Update Cart UI
function updateCart(){
    document.getElementById("cartCount").innerText =
        cart.reduce((sum,i)=>sum+i.qty,0);

    const cartItems = document.getElementById("cartItems");
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

    document.getElementById("total").innerText = total;
}

// Remove Item
function removeItem(index){
    cart.splice(index,1);
    saveCart();
}

// Toggle Cart
function toggleCart(){
    const cartDiv=document.getElementById("cart");
    cartDiv.style.display = cartDiv.style.display==="none"?"block":"none";
}

updateCart();
