// Programa para alterar o nome de usuário e armazená-lo no localStorage
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
    let userName = prompt("Digite seu nome de usuário:");
    if (userName) {
        alert("Bem-vindo, " + userName + "!");
    }
});
localStorage.setItem("userName", userName);
myHeader.textContent = "Bem-vindo, " + userName + "!";

if(!localStorage.getItem("userName")) {
    let userName = prompt("Digite seu nome de usuário:");
    localStorage.setItem("userName", userName);
}
myHeading.textContent = "Bem-vindo, " + localStorage.getItem("userName") + "!";
myButton.onclick = () => {
    let userName = prompt("Digite seu nome de usuário:");
    localStorage.setItem("userName", userName);
    myHeading.textContent = "Bem-vindo, " + userName + "!";
