const queryString = window.location.search;
const queryParameters = new URLSearchParams(queryString);
const villager = queryParameters.get("villager.name");

const div = document.querySelector("div");

fetch('https://acnhapi.com/v1a/villagers/${villager}')
    .then((response) => response.json())
    .then((villager) => {
        const $img = document.createElement("img");
        $img.src = villager.image_uri;
        div.append($img);
    });
