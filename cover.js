const resultsList = document.querySelector('#results');
const params = new URLSearchParams(window.location.search);
const firstName = params.get("Name");
const animal = params.get("Animal")
const greeting = document.createElement("p")
    .innerHTML = `
    Welcome ${firstName}.
    Your chosen animal is ${animal}. 
    `
console.log(animal)
resultsList.append(greeting)
/*
.catch((error) => {
    window.location.href = '404page.html'
}) */


