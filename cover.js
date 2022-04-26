const resultsList = document.querySelector('#results');
const params = new URLSearchParams(window.location.search);
const firstName = params.get("Name");
const animal = params.get("Animal")
const greeting = document.createElement("p")
    .innerHTML = `
    Welcome ${firstName}!
    Your chosen animal is ${animal}. 
    `
resultsList.append(greeting)



const $form = document.querySelector("form")
const $main = document.querySelector("main")
const reset = document.querySelector("reset")

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let favoriteAnimal = formData.get("favorite-animal")
    getFavoriteAnimal(favoriteAnimal);
})


function getFavoriteAnimal(favoriteAnimal) {
    fetch('https://acnhapi.com/v1a/villagers')
        .then(response => response.json())
        .then(data => {
            data.filter(villager => villager.species === `${favoriteAnimal}`).forEach(villager => {
                const card = document.createElement("div")
                card.innerHTML = `
                <img src='${villager.image_uri}' alt='${villager.name['name-USen']}'/>
                <figcaption>${villager.name['name-USen']}</figcaption >
                <ul>
                    <li> Personality: ${villager.personality}</li>
                    <li> Birthday: ${villager['birthday-string']}</li>
                    <li> Species: ${villager.species}</li>
                    <li> Gender: ${villager.gender} </li>
                    <li> Hobby:${villager.hobby} </li>
                </ul>
                `
                $main.append(card)
                
            })//.catch((error) => {
            //window.location.href = '404page.html'
            //})
        })
}
