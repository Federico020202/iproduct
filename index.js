

var product = prompt("add product name");

if (product === ""){
  alert("insert a valid option");

}

document.querySelector("#titolo").innerText=product;
var product = product.toLowerCase();

  if (product === "iphone xs"){

    document.getElementById('imgpr').src= "iphone xs.png";
    document.getElementById('imgpr').width= "400";
    document.getElementById('imgpr').height= "400";
    document.getElementById('produttore').innerText= "China";

    document.getElementById('proprietario').innerText= "Ronald Wayne";

    document.getElementById('distributore').innerText= "State Property.";
    document.querySelector("#titolo").innerText=product;
    document.querySelector("#titolo").innerText=product;


}
document.getElementById('imgpr').src= (product+".png");
