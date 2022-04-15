const $animals = document.querySelector('#animals')
const spinner = document.querySelector(".lds-hourglass")

const url = 'https://acnhapi.com/v1a/villagers'
fetch(url)
    .then(response => {
        return response.json()
    }).then(response => {
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
    })