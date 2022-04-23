const resultsList = document.querySelector('#results')
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsList.append(`Your ${name} is ${value}`)
    resultsList.append(document.createElement('br'))
}).catch((error) => {
    window.location.href = '404page.html'
})


