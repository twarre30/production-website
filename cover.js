/*
const queryParameters = new URLSearchParams(window.location.search)
const resultsList = document.querySelector('results')
const villager = queryParameters.get('villager')


const url = `https://acnhapi.com/v1a/villagers/${villager}`
fetch(url)
    .then((response) => response.json())
    .then((villager) => {
        const $img = document.createElement('img');
        $img.src = villager.icon_uri;
        resultsList.append($img);
    });
    */
        const resultsList = document.querySelector('#results')
        new URLSearchParams(window.location.search).forEach((value, name) => {
            resultsList.append(`${name}: ${value}`)
            resultsList.append(document.createElement('br'))
        })



    /*
    
        .forEach((value, name) => {
            resultsList.append(`${name}: ${value}`)
            resultsList.append(document.createElement('br'))
        })

        */