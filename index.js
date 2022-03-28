const API_URL = "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js";

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        console.log(data);  
        const featured_image = data.featured_image;
        const images = data.images;
        const description = data.description;
        const title = data.title;
        const vendor = data.vendor;
        const price = data.price/100;
        const compare_at_price = data.compare_at_price/100;
        const formatDolar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })
        var priceformat = formatDolar.format(price);
        var price_max_format = formatDolar.format(compare_at_price);

        document.querySelector(".description-product").innerHTML = description;
        document.querySelector(".breadCrumb").innerHTML = 'Catalog / '+vendor+' / <strong>'+title+'</strong>';
        document.querySelector(".title-order").innerHTML = '<strong>Producto: </strong>'+title;
        document.querySelector(".name-product").innerHTML = title;
        document.querySelector(".brand").innerHTML = 'By '+vendor;
        document.querySelector(".price").innerHTML = priceformat;
        document.querySelector(".price-order").innerHTML = '<strong>Valor unitario: </strong>'+priceformat;
        document.querySelector(".price-full").innerHTML = price_max_format;
        document.querySelector(".total").innerHTML = 'Total price <strong>'+priceformat+'</strong>';

        
        
        //document.querySelector(".image").innerHTML = '<img src="'+featured_image+'" alt=""></img>';
        
        
        //Mostrar imagenes
        /*
        let txt = "";
        images.forEach(myFunction);
        document.querySelector(".images").innerHTML = txt;
        function myFunction(value) {
            txt += '<img src="'+value+'" alt=""></img>';
            //txt += '<h1>'+value + "</h1>"; 
        }   */    
        
        //HTMLResponse.innerHTML = `<li>${data.images}</li>`
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}`);
xhr.send();


// Función Cantidad 
var i = 1; 
var total = 285.00;
const formatDolarPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})
function contadormas(){ 
    i = i + 1; 
    var cant = document.getElementById("cantidad"); 
    cant.value = i;
    var restotal = total*i;
    var priceformatt = formatDolarPrice.format(restotal);
    document.querySelector(".total").innerHTML = 'Total price <strong>'+priceformatt+'</strong>'; 
    document.querySelector(".qty-order").innerHTML = '<strong>Cantidad: </strong>'+i;
    document.querySelector(".total-order").innerHTML = '<strong>TOTAL: </strong>'+priceformatt;
}
function contadormenos(){ 
    if(i>=2){
        i = i - 1; 
        var cant = document.getElementById("cantidad"); 
        cant.value = i;
        var restotal = total*i;
        var priceformatt = formatDolarPrice.format(restotal);
        document.querySelector(".total").innerHTML = 'Total price <strong>'+priceformatt+'</strong>';
        document.querySelector(".qty-order").innerHTML = '<strong>Cantidad: </strong>'+i;
        document.querySelector(".total-order").innerHTML = '<strong>TOTAL: </strong>'+priceformatt;
    }
}
//Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}