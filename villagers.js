const $animals = document.querySelector('#animals')
const $villagerName =document.querySelector('.villagerName')

const url = 'http://acnhapi.com/v1/villagers/1'
fetch(url)
    .then(response => {
        return response.json()
    }).then(response => {
        const villageUrl = response.name.name-USen
        const li = document.querySelector('li')
        $villagerName.append(li)
        console.log(villageUrl)
    })