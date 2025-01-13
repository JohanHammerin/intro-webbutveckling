document.addEventListener("DOMContentLoaded", function () {
  //Hämta alla knappar med klassen "add-to-cart-btn"
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  // Lägg till event listener för varje knapp
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const productName = button.getAttribute("data-product"); // Hämta produktnamnet från 'data-product' attributet
      addProductToCart(productName);
    });
  });

  const productButtons = document.querySelectorAll(".add-to-cart-btn");
  console.log(productButtons);



  productButtons.forEach((button) => {
    button.addEventListener()
  });

  const gulKnapp = document.getElementById("gul-btn");
  if (gulKnapp) {
    gulKnapp.addEventListener("click", () => {
      if (gulKnapp.style.backgroundColor === "yellow") {
        gulKnapp.style.backgroundColor = "";
      } else {
        gulKnapp.style.backgroundColor = "yellow";
      }
    });
  }

  const rödKnapp = document.getElementById("röd-btn");
  if (rödKnapp) {
    rödKnapp.addEventListener("click", () => {
      if (rödKnapp.style.backgroundColor === "red") {
        rödKnapp.style.backgroundColor = "";
      } else {
        rödKnapp.style.backgroundColor = "red";
      }
    });
  }

  const nav = document.getElementById("nav-bar-ul");
  let navFlag = false;

  if (nav) {
    const navBtn = document.getElementById("nav-btn");

    navBtn.addEventListener("click", () => {
      if (!navFlag) {
        nav.classList.toggle("hidden"); // Dölj navigeringen om den inte redan är dold
        nav.classList.remove("show"); // Ta bort "show"-klassen, om den finns
        navFlag = true;
      } else {
        nav.classList.toggle("show"); // Visa navigeringen om den är dold
        nav.classList.remove("hidden"); // Ta bort "hidden"-klassen
        navFlag = false;
      }
    });
  }

  //Methods
  const addProductToCart = (productName) => {
    alert(`${productName} tillagd i varukorgen`);
  };
});

/*console.log("hej");

let firstName = "Johan";
console.log(firstName);

firstName = "😳";
console.log("firstName = " + firstName);

const pi = 3.14;
console.log("PI = " + pi);

function greet(name) {
  console.log("Hej, " + name);
}

greet("Johan");

const secondGreet = (secondName, test) =>
  `Hej, ${secondName} du är ${test} år gammal`;

console.log(secondGreet("test", 20));
*/
