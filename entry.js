const villagerCardTemplate = document.querySelector('[data-villager-template]')
const villagerIconsContainer = document.querySelector('[data-villager-icons-container]')
const spinner = document.querySelector('.lds-hourglass')
const searchInput = document.querySelector('[data-search]')
/*
let villagers = []

searchInput.addEventListener('input', event => {
    const value = event.target.value.toLowerCase()
    villagers.forEach(villager => {
        const isVisible = villager.name.toLowerCase().includes(value) || villager.personality.toLowerCase().includes(value) ||
            villager.birthday.toLowerCase().includes(value) || villager.species.toLowerCase().includes(value) ||
            villager.gender.toLowerCase().includes(value) || villager.hobby.toLowerCase().includes(value) ||
            villager.phrase.toLowerCase().includes(value)
        villager.element.classList.toggle('hide', !isVisible)  
    })
}) */

const url = 'https://acnhapi.com/v1a/villagers'
fetch(url)
    .then(response => response.json())
    .then(data => {
        spinner.classList.add('hidden')
        villagers = data.map(villager => {
            const card = villagerCardTemplate.content.cloneNode(true).children[0]
            const image = card.querySelector('[data-image]')
            const name = card.querySelector('[data-name]')    
            image.src = villager.icon_uri 
            name.textContent = villager.name['name-USen']
            villagerIconsContainer.append(card)
            return {
                name: villager.name['name-USen'], element: card
            }
        })
        }).catch((error) => {
            const $p = document.createElement('p');
            $p.textContent = "Something went wrong!";
            document.querySelector('.villager-cards').append($p);
        })