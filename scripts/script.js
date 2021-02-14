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
  //console.log(array_data[19].description);

  function updateShadow(elem, titleC) {
    var shadow = elem.shadowRoot;
    var childNodes = shadow.childNodes;
    childNodes[1].getElementsByClassName("title").innerText = "hello";
    console.log(childNodes.children[0].innerHTML);
    /*
    for(var i = 0; i < childNodes.length; i++) {
      if(childNodes[i].nodeName === 'title') {
        childNodes[i].textContent = titleC;
      }
    }
    */
  }

  for(var i = 0; i<20; i++) {
    var newItem = document.createElement("product-item");
    updateShadow(newItem, array_data[i].title);
    document.getElementById("product-list").appendChild(newItem);
    //console.log(newItem);
  }

});
