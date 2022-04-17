const $animals = document.querySelector('#animals')
const villagerCardTemplate = document.querySelector('[data-villager-template]')
const villagerCardContainer = document.querySelector('[data-villager-cards-container]')
const spinner = document.querySelector('.lds-hourglass')
const searchInput = document.querySelector('[data-search]')

let villagers = []

searchInput.addEventListener('input', event => {
    const value = event.target.value.toLowerCase()
    console.log(value)
    villagers.forEach(villager => {
        const isVisible = villager.name.toLowerCase().includes(value) || villager.personality.toLowerCase().includes(value) ||
            villager.birthday.toLowerCase().includes(value) || villager.species.toLowerCase().includes(value) ||
            villager.gender.toLowerCase().includes(value) || villager.hobby.toLowerCase().includes(value) ||
            villager.phrase.toLowerCase().includes(value)
    villager.element.classList.toggle('hide', !isVisible)    
    })
})

const url = 'https://acnhapi.com/v1a/villagers'
fetch(url)
    .then(response => response.json())
    .then(data => {
        villagers = data.map(villager => {
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
            personality.textContent = villager.personality
            birthday.textContent = villager['birthday-string']
            species.textContent = villager.species
            gender.textContent = villager.gender
            hobby.textContent = villager.hobby
            phrase.textContent = villager['catch-phrase']
            villagerCardContainer.append(card)
            return {
                name: villager.name['name-USen'], personality: villager.personality, birthday: villager['birthday-string'], species: villager.species,
                gender: villager.gender, hobby: villager.hobby, phrase: villager['catch-phrase'], element: card
            }
        })

    })
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*
const $animals = document.querySelector('#animals')
   .then(response => {
        const villagers = response.map(villager => villager)
        villagers.forEach(villager => {
            const div = document.createElement('div')
            div.innerHTML = `
                <img src="${villager.image_uri}"> 
                <figcaption>${villager.name['name-USen']}</figcaption>
                <aside>
                    <p>Personality: ${villager.personality}<br>
                    Birthday: ${villager['birthday-string']}<br>
                    Species: ${villager.species}<br>
                    Gender: ${villager.gender}<br>
                    Hobby: ${villager.hobby}<br>
                    Catch-Phrase: "${villager['catch-phrase']}"
                </aside>
        `
            $animals.append(div)
        })
    }).then(responses => {
        spinner.classList.add('hidden')
        responses.forEach(response => {
            (response)
        }).catch((error) => {
            const $p = document.createElement('p');
            $p.textContent = "Something went wrong!";
            document.querySelector('#animals').append($p);
        })
    })*/