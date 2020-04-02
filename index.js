

var product = prompt("add product name");

if (product === ""){
  alert("insert a valid option");

}

var miao = product;

var iphone = {
  Produttore:"Cina",
  Distributore: "State Distribution.",
  Proprietario: "Ronald Wayne",
  Img:"iphone 11.png"
}
var ferrarelle = {
  Produttore:"Italia",
  Distributore: "Roma",
  Proprietario: "Carlo Pontecorvo, Presidente e Amministratore Delegato",
  Img:"ferrarelle.png"
}
var barilla = {
  Produttore:"Parma",
  Distributore: "Italia",
  Proprietario: "Guido Barilla (presidente)",
  Img:"https://argomenti.ilsole24ore.com/Immagini/Editrice/ILSOLE24ORE/ARGOMENTI/Online/Aziende/Immagini/ABC/barilla.jpg"
}



document.querySelector("#titolo").innerText=product;
var product = product.toLowerCase();

document.getElementById('read').href= ("https://it.wikipedia.org/wiki/"+product);
          if (product === "iphone" || product === "iphone xs" || product === "iphone xs max"|| product === "iphone 11" || product === "iphone 11 pro" || product === "iphone 11 pro max"){

            document.getElementById('imgpr').width= "350";
            document.getElementById('imgpr').height= "400";
              document.getElementById('imgpr').src= iphone.Img;
              document.getElementById('produttore').innerHTML= iphone.Produttore;

              document.getElementById('proprietario').innerText= iphone.Proprietario;

              document.getElementById('distributore').innerText= iphone.Distributore;

          }
          if (product === "ferrarelle" || product === "acqua ferrarelle" || product === "ferrarelle acqua"|| product === "ferrarelle 0,5" ){


            document.getElementById('imgpr').width= "200";
            document.getElementById('imgpr').height= "450";
              document.getElementById('imgpr').src= ferrarelle.Img;

              document.getElementById('produttore').innerHTML= ferrarelle.Produttore;

              document.getElementById('proprietario').innerText= ferrarelle.Proprietario;

              document.getElementById('distributore').innerText= ferrarelle.Distributore;

          }
          if (product === "barilla" || product === "pasta barilla" || product === "sughi barilla"){


            document.getElementById('imgpr').width= "300";
            document.getElementById('imgpr').height= "300";
              document.getElementById('imgpr').src= barilla.Img;

              document.getElementById('produttore').innerHTML= barilla.Produttore;

              document.getElementById('proprietario').innerText= barilla.Proprietario;

              document.getElementById('distributore').innerText= barilla.Distributore;

          }
// document.getElementById('imgpr').src= (product+".png");
