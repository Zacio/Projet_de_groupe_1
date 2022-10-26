// La fonction se lance au démarrage de chaque page ET quand on clique sur la checkbox (la corde de la lampe).
// Si l'utilisateur est en SCHEME DARK, la page se lancera en MODE SOMBRE. 
// Si l'utilisateur est en SCHEME LIGHT, la page se lancera en MODE CLAIR.
// Si l'utilisateur n'a pas sélectionné de SCHEME, la page se lancera en MODE CLAIR.


function themeSwap() {

  //const bjbn = document.querySelector('.bjbn')

  if (document.documentElement.classList.contains("clair")) { 

    document.documentElement.classList.add("sombre")
    document.documentElement.classList.remove("clair")    
    //bjbn.innerHTML = "Bonne nuit !"

      } else if (document.documentElement.classList.contains("sombre")) {
         
      document.documentElement.classList.add("clair")
      document.documentElement.classList.remove("sombre")
      //bjbn.innerHTML = "Bonjour !" 

          } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

            document.documentElement.classList.add("sombre")
            document.documentElement.classList.remove("clair")
            //bjbn.innerHTML = "Bonne nuit !"

              } else { 

              document.documentElement.classList.add("clair")
              document.documentElement.classList.remove("sombre")
              //bjbn.innerHTML = "Bonjour !"
                           
              }
}         
function themeSwapContact() {

  if (document.documentElement.classList.contains("clair")) { 

    document.documentElement.classList.add("sombre")
    document.documentElement.classList.remove("clair")    

      } else if (document.documentElement.classList.contains("sombre")) {

      document.documentElement.classList.add("clair")
      document.documentElement.classList.remove("sombre")

          } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

            document.documentElement.classList.add("sombre")
            document.documentElement.classList.remove("clair")

              } else { 

              document.documentElement.classList.add("clair")
              document.documentElement.classList.remove("sombre")
                           
              }
}         

function themeSwapDesk() {

  const abat = document.querySelector('.abat')

  if (document.documentElement.classList.contains("clair")) { 

    document.documentElement.classList.add("sombre")
    document.documentElement.classList.remove("clair")    
    abat.innerHTML = "Assez travaillé..."

      } else if (document.documentElement.classList.contains("sombre")) {

      document.documentElement.classList.add("clair")
      document.documentElement.classList.remove("sombre")
      abat.innerHTML = "Au boulot !" 

          } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

            document.documentElement.classList.add("sombre")
            document.documentElement.classList.remove("clair")
            abat.innerHTML = "Assez travaillé..."

              } else { 

              document.documentElement.classList.add("clair")
              document.documentElement.classList.remove("sombre")
              abat.innerHTML = "Au boulot !"
                           
              }
}         

//Micael ajout flechenav (nico)

var sidenav = document.getElementById("mySidenav")
var flechenav = document.getElementById("ouvrezMoi")
var opentest = document.getElementById("openbtn")
var closetest = document.getElementById("closebtn")
var menuBurgerBouton = document.getElementById("openBtnBurger")
var burgerspan = document.getElementById("burgerspan")
var bodyColor = document.getElementById("body")

opentest.onclick = openandclosenav;
menuBurgerBouton.onclick = openandclosenav


function openandclosenav(){
    if(sidenav.classList.contains("ok")){
        sidenav.classList.remove("ok")
        flechenav.classList.remove("ok")
        burgerspan.classList.remove("ok")
        bodyColor.classList.remove("ok")
    }
    else{
        sidenav.classList.add("ok")
        flechenav.classList.add("ok")
        burgerspan.classList.add("ok")
        bodyColor.classList.add("ok")
    }
}


//Tornike// 












//Tornike 