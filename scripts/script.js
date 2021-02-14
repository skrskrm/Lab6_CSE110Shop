// Script.js
window.addEventListener('DOMContentLoaded', () => {
  function fetchData() {
    fetch('https://fakestoreapi.com/products')
    .then( response => response.json() )
    .then(data => storeLocal(data))
  }
  function storeLoca(data) {
    localStorage.setItem("products_data", JSON.stringify(data));
  }
  let array_data = JSON.parse(localStorage.getItem("products_data"));
  //console.log(array_data[i].title);

  for(var i = 0; i<20; i++) {
    var newItem = document.createElement("product-item");

    const product = document.createElement('li');
    product.setAttribute('class','product');

    const img = document.createElement('img');
    img.width = 200;
    img.src = array_data[i].image;
    img.alt = array_data[i].title;

    const title = document.createElement('p');
    title.setAttribute('class','title');
    title.innerText = array_data[i].title;

    const price = document.createElement('p');
    price.setAttribute('class','price');
    price.innerText = array_data[i].price;

    const addCartBtn = document.createElement('button');
    addCartBtn.innerText = "Add to Cart";
    addCartBtn.onclick = function() {
      alert('Added to Cart!');
      document.getElementById('cart-count').innerText++;
    };

    product.appendChild(img);
    product.appendChild(title);
    product.appendChild(price);
    product.appendChild(addCartBtn);
    newItem.shadowRoot.appendChild(product);
    
    document.getElementById("product-list").appendChild(newItem);
  }

});
