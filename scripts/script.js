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
  async function myFetch() {
    try {
      let response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        let data = await response.json();
        localStorage.setItem("products_data", JSON.stringify(data));
        render();
      }
    } catch(e) {
      console.log(e);
    }
  }
  if(localStorage.getItem('products_data') == null) {
    myFetch();
  }
  else {
    render();
  }

  function render() {
    let array_data = JSON.parse(localStorage.getItem("products_data"));
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
        document.getElementById('cart-count').innerText++;
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

  }};
});
