

var product = prompt("add product name");

if (product === ""){
  alert("insert a valid option");

}

document.querySelector("#titolo").innerText=product;
var product = product.toLowerCase();
document.getElementById('imgpr').src= (product);
document.getElementById('imgpr').width= "220";
document.getElementById('imgpr').height= "270";

        if (product === "iphone xs" || product === "iphone xs max"|| product === "iphone 11" || product === "iphone 11 pro" || product === "iphone 11 pro max"){


    document.getElementById('produttore').innerText= "China";

    document.getElementById('proprietario').innerText= "Ronald Wayne";

    document.getElementById('distributore').innerText= "State Distribution.";
    // document.querySelector("#titolo").innerText=product;
    // document.querySelector("#titolo").innerText=product;


}
document.getElementById('imgpr').src= (product+".png");
