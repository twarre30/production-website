const fishCardTemplate = document.querySelector('[data-fish-template]')
const fishCardContainer = document.querySelector('[data-fish-cards-container]')
const spinner = document.querySelector('.lds-hourglass')
const searchInput = document.querySelector('[data-search]')

let fishes = []

searchInput.addEventListener('input', event => {
    const value = event.target.value.toLowerCase()
        fishes.forEach(fish => {
        const isVisible = fish.name.toLowerCase().includes(value) || fish.location.toLowerCase().includes(value) ||
            fish.rarity.toLowerCase().includes(value) || fish.shadow.toLowerCase().includes(value) 
        fish.element.classList.toggle('hide', !isVisible)
    })
})

const url = 'https://acnhapi.com/v1a/fish'
fetch(url)
    .then(response => response.json())
    .then(data => {
        spinner.classList.add('hidden')
        fish = data.map(fish => {
            const card = fishCardTemplate.content.cloneNode(true).children[0]
            const image = card.querySelector('[data-image]')
            const name = card.querySelector('[data-name]')    
            const location = card.querySelector('[data-availability-location]')
            const rarity = card.querySelector('[data-availability-rarity')
            const shadow = card.querySelector('[data-shadow]')
            const price = card.querySelector('[data-price]')
            const cj = card.querySelector('[data-price-cj]')
            image.src = fish.image_uri 
            name.textContent = fish.name['name-USen']
            location.textContent = `Location: ${fish.availability['location']}`
            rarity.textContent = `Rarity: ${fish.availability['rarity']}`
            shadow.textContent = `Shadow: ${fish.shadow}`
            price.textContent = `Price: ${fish.price}`
            cj.textContent = `CJ_Price: ${fish['price-cj']}`
            fishCardContainer.append(card)
            return {
                name: fish.name['name-USen'], location: fish.availability['location'], rarity: fish.availability['rarity'], shadow: fish.shadow,
                element: card
            }
        })
        }).catch((error) => {
            const $p = document.createElement('p');
            $p.textContent = "Something went wrong!";
            document.querySelector('.fishes-cards').append($p);
        })
