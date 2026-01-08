// 40 Clothing Products: Men, Women, Kids
const products = [
  // MEN
  {id:1,name:"Men Black T-Shirt",price:2499,category:"men",image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",description:"Premium cotton black t-shirt for daily wear.",rating:4.5},
  {id:2,name:"Men White Polo",price:3299,category:"men",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",description:"Stylish white polo shirt with slim fit.",rating:4.6},
  {id:3,name:"Men Denim Jacket",price:5999,category:"men",image:"https://images.unsplash.com/photo-1543076447-215ad9ba6923",description:"Classic blue denim jacket for winters.",rating:4.7},
  {id:4,name:"Men Cotton Kurta",price:3499,category:"men",image:"https://images.unsplash.com/photo-1603252109303-2751441dd157",description:"Soft cotton kurta for daily wear.",rating:4.5},
  {id:5,name:"Men Casual Shirt",price:2999,category:"men",image:"https://images.unsplash.com/photo-1520975916090-3105956dac38",description:"Comfortable casual shirt for office and outings.",rating:4.6},
  {id:6,name:"Men Hoodie",price:4999,category:"men",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7",description:"Warm hoodie for winter seasons.",rating:4.7},
  {id:7,name:"Men Formal Pants",price:3799,category:"men",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",description:"Premium formal pants for office.",rating:4.5},
  {id:8,name:"Men Leather Jacket",price:9999,category:"men",image:"https://images.unsplash.com/photo-1520975916090-3105956dac38",description:"Classic leather jacket.",rating:4.8},
  {id:9,name:"Men Sneakers",price:5499,category:"men",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772",description:"Comfortable sneakers for daily use.",rating:4.6},
  {id:10,name:"Men Sandals",price:2699,category:"men",image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2",description:"Stylish summer sandals.",rating:4.5},
  {id:11,name:"Men Shorts",price:1799,category:"men",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",description:"Casual cotton shorts.",rating:4.4},
  {id:12,name:"Men Winter Coat",price:8999,category:"men",image:"https://images.unsplash.com/photo-1543076447-215ad9ba6923",description:"Thick winter coat.",rating:4.7},
  {id:13,name:"Men Sweatshirt",price:3999,category:"men",image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7",description:"Comfortable sweatshirt.",rating:4.5},
  {id:14,name:"Men Jeans",price:4299,category:"men",image:"https://images.unsplash.com/photo-1542272604-787c3835535d",description:"Denim jeans for casual wear.",rating:4.6},

  // WOMEN
  {id:15,name:"Women Lawn Suit",price:6999,category:"women",image:"https://images.unsplash.com/photo-1583394838336-acd977736f90",description:"Premium lawn suit for women.",rating:4.8},
  {id:16,name:"Women Kurti",price:2499,category:"women",image:"https://images.unsplash.com/photo-1618354691221-1f40c2e20e90",description:"Traditional printed kurti.",rating:4.7},
  {id:17,name:"Women Maxi Dress",price:4799,category:"women",image:"https://images.unsplash.com/photo-1520974735194-5d3a5a5a7a60",description:"Elegant maxi dress.",rating:4.6},
  {id:18,name:"Women Cardigan",price:3799,category:"women",image:"https://images.unsplash.com/photo-1520975916090-3105956dac38",description:"Warm cardigan for casual outings.",rating:4.5},
  {id:19,name:"Women Abaya",price:8500,category:"women",image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990",description:"Premium abaya.",rating:4.7},
  {id:20,name:"Women Handbag",price:3200,category:"women",image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3",description:"Stylish handbag.",rating:4.6},
  {id:21,name:"Women Heels",price:4499,category:"women",image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2",description:"Elegant heels.",rating:4.5},
  {id:22,name:"Women Chiffon Dupatta",price:1599,category:"women",image:"https://images.unsplash.com/photo-1585386959984-a41552231693",description:"Light chiffon dupatta.",rating:4.6},
  {id:23,name:"Women Summer Dress",price:4299,category:"women",image:"https://images.unsplash.com/photo-1618354691229-88d47f285158",description:"Casual summer dress.",rating:4.5},
  {id:24,name:"Women Formal Dress",price:7999,category:"women",image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990",description:"Premium formal dress.",rating:4.7},
  {id:25,name:"Women Blouse",price:1999,category:"women",image:"https://images.unsplash.com/photo-1520975916090-3105956dac38",description:"Stylish blouse.",rating:4.6},
  {id:26,name:"Women Skirt",price:2999,category:"women",image:"https://images.unsplash.com/photo-1520974735194-5d3a5a5a7a60",description:"Elegant skirt.",rating:4.5},
  {id:27,name:"Women Sneakers",price:5399,category:"women",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772",description:"Casual sneakers for women.",rating:4.6},

  // KIDS
  {id:28,name:"Kids Summer Dress",price:2199,category:"kids",image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",description:"Fun summer dress for kids.",rating:4.5},
  {id:29,name:"Kids Hoodie",price:2499,category:"kids",image:"https://images.unsplash.com/photo-1600180758546-9a5bce8bfe8b",description:"Warm hoodie for kids.",rating:4.6},
  {id:30,name:"Kids Jacket",price:3199,category:"kids",image:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",description:"Winter jacket for kids.",rating:4.5},
  {id:31,name:"Kids Kurta Pajama",price:2999,category:"kids",image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990",description:"Traditional kurta pajama for kids.",rating:4.6},
  {id:32,name:"Kids T-Shirt",price:1799,category:"kids",image:"https://images.unsplash.com/photo-1600180758890-6d0e07a07c3c",description:"Casual t-shirt for kids.",rating:4.5},
  {id:33,name:"Kids Shorts",price:1499,category:"kids",image:"https://images.unsplash.com/photo-1600180758546-9a5bce8bfe8b",description:"Cotton shorts for kids.",rating:4.4},
  {id:34,name:"Kids Sandals",price:1299,category:"kids",image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2",description:"Comfortable summer sandals.",rating:4.5},
  {id:35,name:"Kids Sneakers",price:2499,category:"kids",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772",description:"Kids sports sneakers.",rating:4.6},
  {id:36,name:"Kids Cap",price:899,category:"kids",image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f",description:"Cool summer cap.",rating:4.4},
  {id:37,name:"Kids Socks Pack",price:799,category:"kids",image:"https://images.unsplash.com/photo-1585386959984-a41552231693",description:"Pack of cotton socks.",rating:4.5},
  {id:38,name:"Kids Backpack",price:1999,category:"kids",image:"https://images.unsplash.com/photo-1618354691229-88d47f285158",description:"School backpack.",rating:4.6},
  {id:39,name:"Kids Trousers",price:2199,category:"kids",image:"https://images.unsplash.com/photo-1520974735194-5d3a5a5a7a60",description:"Casual trousers for kids.",rating:4.5},
  {id:40,name:"Kids Sweater",price:2399,category:"kids",image:"https://images.unsplash.com/photo-1543076447-215ad9ba6923",description:"Winter sweater for kids.",rating:4.6}
];

let cart = JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(productId){
  const p = products.find(x => x.id === productId);
  if(!p) return;

  // Check if product already in cart
  let existing = cart.find(item => item.id === p.id);
  if(existing){
    existing.qty += 1;
  } else {
    cart.push({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      qty: 1
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${p.name} added to cart!`);
}


// DYNAMIC RENDER
function renderProducts(){
  const container = document.getElementById("productContainer");
  if(!container) return;
  container.innerHTML = "";
  products.forEach(p=>{
    container.innerHTML += `
    <div class="col-md-3 mb-4 product-card-item ${p.category}">
      <div class="card product-card">
        <img src="${p.image}" class="product-img">
        <div class="card-body text-center">
          <h6>${p.name}</h6>
          <p class="price">PKR ${p.price}</p>
          <button class="btn btn-dark btn-sm w-100 mb-2" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="btn btn-outline-dark btn-sm w-100" onclick="buyNow(${p.id})">Buy Now</button>
        </div>
      </div>
    </div>`;
  });
}
renderProducts();

// SEARCH & FILTER
function searchProducts(){
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.getElementsByClassName("product-card-item");
  for(let card of cards){
    card.style.display = card.innerText.toLowerCase().includes(input)?"block":"none";
  }
}

function filterCategory(cat){
  let cards = document.getElementsByClassName("product-card-item");
  for(let card of cards){
    if(cat==="all"||card.classList.contains(cat)) card.style.display="block";
    else card.style.display="none";
  }
}

// PRODUCT DETAILS
function openProduct(id){
  localStorage.setItem("selectedProduct",id);
  window.location.href="product.html";
}

function loadProduct(){
  const id = localStorage.getItem("selectedProduct");
  const p = products.find(x=>x.id==id);
  if(!p) return;
  document.getElementById("productDetails").innerHTML=`
    <div class="row">
      <div class="col-md-6"><img src="${p.image}" class="img-fluid rounded"></div>
      <div class="col-md-6">
        <h2>${p.name}</h2>
        <h4>PKR ${p.price}</h4>
        <p>${p.description}</p>
        <p>⭐ ${p.rating}/5</p>
       <button class="btn btn-dark btn-sm w-100 mb-2" onclick="addToCart(${p.id})">Add to Cart</button>
        <hr>
        <h5>Customer Reviews</h5>
        <p>⭐⭐⭐⭐⭐ Amazing quality!</p>
        <p>⭐⭐⭐⭐ Very comfortable fabric.</p>
      </div>
    </div>`;
}
if(document.getElementById("productDetails")) loadProduct();
