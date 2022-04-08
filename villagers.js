const animals = document.querySelector('#animals')
const spinner = document.querySelector(".spinner")


function addVillagersImage(villagers) {
    const div = document.createElement('div')
    div.classList.add('villager-listing')
    div.innerHTML = `
        <figure>
            <img src='https://acnhapi.com/v1/images/villagers/' alt='$villagers.name' />
            <figcaption class= "imageName"><a href="villagers.html?villagers=${villagers.name}">${villagers.name}</a></figcaption>
        </figure>      
    `
    app.append(div)
}

const url = 'http://acnhapi.com/v1/villagers'
fetch(url)
    .then(response => {
        return response.json()
    }).then(response => {
        const urls = response.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches) 
        console.log(fetches)
    }).then(responses => {
        spinner.classList.add('hidden')
        responses.forEach(response => {
            addVillagersImage(response)
        })
            .catch((error) => {
                const $p = document.createElement('p');
                $p.textContent = "Something went wrong!";
                document.querySelector('#app').append($p);
            })
    })