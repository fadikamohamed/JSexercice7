//Délaration de la fonction.
function calcul() {
  //Déclaration des variables.
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //Délaration des régex et intégration dans des variables.
  var regexShoeSize = /[2-5][\d]/;
  var regexYear = /(?:19|20)[\d]{2}/;
  //Déclaration de la condition.
  if (regexShoeSize.test(shoeSize) && regexYear.test(yearOfBirth)) {
    /*Multiplication de la pointure par 2, ajout de 5, multiplication du tout
     par 50 moins l'année de naissance plus 1766 et Intégration dans la variable result*/
    var result = (shoeSize * 2 + 5) * 50 - yearOfBirth + 1766;
    alert(result);
   } else {
    alert('Mauvaise saisie !');
    }
  }
