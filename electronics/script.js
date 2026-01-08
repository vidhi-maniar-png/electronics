// script.js

const container = document.getElementById("product-container");

products.forEach(product => {
  const box = document.createElement("div");
  box.classList.add("box");

  box.innerHTML = `
    <span class="discount">-${product.discount}%</span>
    <div class="image">
      <a href="${product.link}">
        <img src="${product.image}" alt="${product.name}">
      </a>
      <div class="icons">
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-btn">Add to cart</a>
        <a href="#" class="fas fa-share"></a>
      </div>
    </div>
    <div class="content">
      <h3>${product.name}</h3>
      <div class="price">₹${product.price} <span>₹${product.oldPrice}</span></div>
    </div>
  `;

  container.appendChild(box);
});
