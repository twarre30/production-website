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
                <figcaption><a href="villager.html?villager=${villager.name['name-USen']}">${villager.name['name-USen']}</a></figcaption>
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