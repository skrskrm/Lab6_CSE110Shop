// product-item.js
class ProductItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const product = document.createElement('li');
    product.setAttribute('class','product');
    const img = document.createElement('img');
    img.width = 200;
    const title = document.createElement('p');
    title.setAttribute('class','title');
    const price = document.createElement('p');
    price.setAttribute('class','price');
    const addCartBtn = document.createElement('button');
    addCartBtn.innerText = "Add to Cart";
    addCartBtn.onclick = function() {
      alert('Added to Cart!');
      document.getElementById('cart-count').innerText++;
    };
    const style = document.createElement('style');
    style.textContent = `
      a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
      }
      
      h1 {
        text-align: center;
      }
      
      nav {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        font-size: 18pt;
      }
      
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      .container {
        width: 70%;
        margin: auto;
      }
      
      .flex-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px 0px;
      }
      
      .icon {
        height: 20px;
        width: 20px;
        display: inline-block;
      }
      
      .logo {
        padding-left: 20px;
      }
      
      .nav-item {
        margin-right: 15px;
      }
      
      .nav-item > a {
        display: inline-block;
        padding-bottom: 2px;
        position: relative;
      }
      
      .nav-item > a:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: rgb(59, 59, 59);
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      
      .nav-item > a:hover:after {
        width: 100%;
        left: 0;
      }
      
      .nav-link {
        align-items: center;
        justify-content: center;
        padding: 10px;
      }
      
      .nav-link > ul {
        display: flex;
        align-items: center;
      }
      
      /* Custom Element CSS starts here */
      
      .price {
        color: green;
        font-size: 1.8em;
        font-weight: bold;
        margin: 0;
      }
      
      .product {
        align-items: center;
        background-color: white;
        border-radius: 5px;
        display: grid;
        grid-template-areas: 
        'image'
        'title'
        'price'
        'add';
        grid-template-rows: 67% 11% 11% 11%;
        height: 450px;
        filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
        margin: 0 30px 30px 0;
        padding: 10px 20px;
        width: 200px;
      }
      
      .product > button {
        background-color: rgb(255, 208, 0);
        border: none;
        border-radius: 5px;
        color: black;
        justify-self: center;
        max-height: 35px;
        padding: 8px 20px;
        transition: 0.1s ease all;
      }
      
      .product > button:hover {
        background-color: rgb(255, 166, 0);
        cursor: pointer;
        transition: 0.1s ease all;
      }
      
      .product > img {
        align-self: center;
        justify-self: center;
        width: 100%;
      }
      
      .title {
        font-size: 1.1em;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .title:hover {
        font-size: 1.1em;
        margin: 0;
        white-space: wrap;
        overflow: auto;
        text-overflow: unset;
      }
      
      /* Custom Element CSS Ends Here */
      
      #shop-icon {
        content: url("../assets/shop-icon.png");
      }
    `;
    shadow.appendChild(style);
    shadow.appendChild(product);
    product.appendChild(img);
    product.appendChild(title);
    product.appendChild(price);
    product.appendChild(addCartBtn);
  }
}

customElements.define('product-item', ProductItem);
