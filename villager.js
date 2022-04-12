const $animals = document.querySelector('#animals')
const $villagerName =document.querySelector('.villagerName')

const url = 'https://acnhapi.com/v1a/villagers/1'
fetch(url)
    .then(response => {
        return response.json()
    }).then(response => {
        const villagerName = response.name['name-USen'] 
        const villagerImage = response.image_uri
        const villagerPersonality = response.personality
        const villagerBirthday = response['birthday-string']
       // const villagerSpecies = response.species
        //const villagerGender = response.gender
        //const villagerHobby = response.hobby


        const li = document.createElement('li')
        li.innerHTML = `
        <img src="${villagerImage}"> 
        <span>${villagerName}</span>
        <span>${villagerPersonality}</span>
        <span>${villagerBirthday}</span>
        `
        $villagerName.append(li)
    }).catch(error => {
        console.error(error.message)
    })