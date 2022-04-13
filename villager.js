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

const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
fetch('https://acnhapi.com/v1a/villagers/${queryString.get("villager")}')
    .then(response => {
        return response.json()
    }).then(response => {
        addVillagerImage(response)
        const species = response.species
            .map(response => response.specie.url)
            .map(url => {
                return fetch(url).then(response => response.json())
            })
        return Promise.all(species)
      //  const villagers = response.map(villager => villager)
        //villagers.forEach(villager => {
            
        }).then(responses => {
            spinner.classList.add('hidden')
            responses.forEach(response => {
                (response)
            }).catch((error) => {
                const $p = document.createElement('p');
                $p.textContent = "Something went wrong!";
                document.querySelector('#animals').append($p);
            })
        })
