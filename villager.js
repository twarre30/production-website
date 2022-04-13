const $animals = document.querySelector('#animals')
const $villagerName = document.querySelector('.villagerName')
const spinner = document.querySelector(".lds-hourglass")

/*
const villagerSpecs = {
    Name: $name['name-USen'],
    Personality: personality,
    Birthday: ['birthday-string'],
    Species: species,
    Gender: gender,
    Hobby: hobby,
    Catch_Phrase: ['catch-phrase'],
}
*/

function addVillagerImage(villager) {
    const div = document.createElement('div')
    div.innerHTML = `
        <figure>
            <img src="${villager.image_uri}" />
        </figure>
    `
    $villagerName.append(div)
}

function addVillagerSpecs(villager) {
    const li = document.createElement('li')
    const species= (villager.species)
        .find(species => species)
    li.innerHTML = `
        <span>${villager.name}</span>
        <br><br>
        <span>${species.species}</span>
        <br><br>
        `
    ul.append(li)
}

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch('https://acnhapi.com/v1a/villagers/${queryString.get("villager")}')
    .then(response => {
        return response.json()
    }).then(response => {
        addVillagerImage(response)
        const specieRequest = response.species
            .map(response => response.specie.url)
            .map(url => {
                return fetch(url).then(response => response.json())
            })
        return Promise.all(specieRequest)
      //  const villagers = response.map(villager => villager)
        //villagers.forEach(villager => {
            
        }).then(responses => {
            spinner.classList.add('hidden')
            responses.forEach(response => {
                addVillagerSpecs(response)
            }).catch((error) => {
                const $p = document.createElement('p');
                $p.textContent = "Something went wrong!";
                document.querySelector('#animals').append($p);
            })
        })
