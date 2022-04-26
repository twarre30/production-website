const $form = document.querySelector("form")
const $main = document.querySelector("main")
const reset = document.querySelector("reset")
const spinner = document.querySelector('.lds-hourglass')

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
            spinner.classList.add('hidden')
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
            }).catch((error) => {
            window.location.href = '404page.html'
            })
        })
}
