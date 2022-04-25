const villagerCardTemplate = document.querySelector('[data-villager-template]')
const villagerCardContainer = document.querySelector('.villager-cards')
const spinner = document.querySelector('.lds-hourglass')
const searchInput = document.querySelector('[data-search]')

let villagers = []

searchInput.addEventListener('input', event => {
    const value = event.target.value.toLowerCase()
    villagers.forEach(villager => {
        const isVisible = villager.name.toLowerCase().includes(value) || villager.personality.toLowerCase().includes(value) ||
            villager.birthday.toLowerCase().includes(value) || villager.species.toLowerCase().includes(value) ||
            villager.gender.toLowerCase().includes(value) || villager.hobby.toLowerCase().includes(value) 
        villager.element.classList.toggle('hide', !isVisible)
    })
})

function createVillagerCard(villager) {
    villagerCardContainer.innerHTML = `
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
}

const url = 'https://acnhapi.com/v1a/villagers'
fetch(url)
    .then(response => response.json())
    .then(data => {
        spinner.classList.add('hidden')
        villagers = data.map(villager => {
            createVillagerCard(villager)
console.log(villager)
            /*
                        const card = villagerCardTemplate.content.cloneNode(true).children[0]
                        const image = card.querySelector('[data-image]')
                        const name = card.querySelector('[data-name]')
                        const personality = card.querySelector('[data-personality]')
                        const birthday = card.querySelector('[data-birthday')
                        const species = card.querySelector('[data-species]')
                        const gender = card.querySelector('[data-gender]')
                        const hobby = card.querySelector('[data-hobby]')
                        const phrase = card.querySelector('[data-phrase]')
                        image.src = villager.image_uri
                        name.textContent = villager.name['name-USen']
                        personality.textContent = `Personality: ${ villager.personality } `
                        birthday.textContent = `Birthday: ${ villager['birthday-string'] } `
                        species.textContent = `Species: ${ villager.species } `
                        gender.textContent = `Gender: ${ villager.gender } `
                        hobby.textContent = `Hobby: ${ villager.hobby } `
                        phrase.textContent = `Catch - Phrase: ${ villager['catch-phrase'] } `
                        villagerCardContainer.append(card) */
            return {
                name: villager.name['name-USen'], personality: villager.personality, birthday: villager['birthday-string'], species: villager.species,
                gender: villager.gender, hobby: villager.hobby
            }
        })
    }).catch((error) => {
        window.location.href = '404page.html'
    })