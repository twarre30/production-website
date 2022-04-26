const villagerCardContainer = document.querySelector('main')
const spinner = document.querySelector('.lds-hourglass')

fetch('https://acnhapi.com/v1a/villagers')
    .then(response => response.json())
    .then(data => {
        spinner.classList.add('hidden')
        return data.map(villager => villager).forEach(villager => {
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
            villagerCardContainer.append(card)
        })
    }).catch((error) => {
        window.location.href = '404page.html'
    })
