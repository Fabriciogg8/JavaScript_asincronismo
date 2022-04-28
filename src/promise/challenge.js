const fetchData = require('../utils/fetchdata')
let API = 'https://rickandmortyapi.com/api/character/';

// Primer llamado a la funcióm
fetchData(API)
.then(data => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`)  // Segundo llamado
})
.then(data => {
    console.log(data.name)
    return fetchData(data.origin.url) // Tercer llamado
})
.then(data => {
    console.log(data.dimension)
})
.catch(error => console.error(error));