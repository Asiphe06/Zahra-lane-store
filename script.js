let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - R${item.price}`;
    cartList.appendChild(li);
  });

  totalEl.textContent = total;
}