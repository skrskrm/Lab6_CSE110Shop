// Script.js
if(!localStorage.getItem("p0")) {
  localStorage.setItem("p0", "no");
  localStorage.setItem("p1", "no");
  localStorage.setItem("p2", "no");
  localStorage.setItem("p3", "no");
  localStorage.setItem("p4", "no");
  localStorage.setItem("p5", "no");
  localStorage.setItem("p6", "no");
  localStorage.setItem("p7", "no");
  localStorage.setItem("p8", "no");
  localStorage.setItem("p9", "no");
  localStorage.setItem("p10", "no");
  localStorage.setItem("p11", "no");
  localStorage.setItem("p12", "no");
  localStorage.setItem("p13", "no");
  localStorage.setItem("p14", "no");
  localStorage.setItem("p15", "no");
  localStorage.setItem("p16", "no");
  localStorage.setItem("p17", "no");
  localStorage.setItem("p18", "no");
  localStorage.setItem("p19", "no");
}

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
  console.log(array_data);


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
    addCartBtn.setAttribute("id", i);

    if(localStorage.getItem("p"+addCartBtn.id) == "no") {
      addCartBtn.innerText = "Add to Cart";
    }
    else {
      addCartBtn.innerText = "Remove from Cart";
    }
    
    addCartBtn.onclick = function() {
      if(addCartBtn.innerText == "Add to Cart"){
        alert('Added to Cart!');
        document.getElementById('cart-count').innerText++;
        addCartBtn.innerText = "Remove from Cart";
        localStorage.setItem("p"+addCartBtn.id, "yes")
      }
      else {
        alert('Removed from Cart!');
        document.getElementById('cart-count').innerText--;
        addCartBtn.innerText = "Add to Cart";
        localStorage.setItem("p"+addCartBtn.id, "no")
      }
        
    };

    product.appendChild(img);
    product.appendChild(title);
    product.appendChild(price);
    product.appendChild(addCartBtn);
    newItem.shadowRoot.appendChild(product);
    
    document.getElementById("product-list").appendChild(newItem);
  }
});
