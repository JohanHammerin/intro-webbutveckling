console.log("hej");

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

const rödBlommaBtn = document.getElementById("röd-blomma-btn");

rödBlommaBtn.addEventListener("click", () => {
    alert("Tillagt i varukorgen")
});
