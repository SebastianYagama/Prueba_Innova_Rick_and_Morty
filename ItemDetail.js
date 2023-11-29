
const name_Id = document.getElementById('characterNameId');
const details_IdDiv = document.getElementById('detailsId');

const url = window.location;

let id_Char = url.search.split('=')[1];

let urlGen = `https://rickandmortyapi.com/api/character/${id_Char}`

fetch(urlGen)
    .then(response => response.json())
    .then(character => {
        name_Id.innerHTML = `
        <h1>${character.name}</h1>
        `;
        details_IdDiv.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <p>Estado: ${character.status}</p>
            <p>Especie: ${character.species}</p>
            <p>Tipo:` + (character.type ? character.type : ' Not type') + `</p>
            <p>Género: ${character.gender}</p>
            <p>Origen: ${character.origin.name}</p>
            <a href = "Index.html">Volver</a>

        `;
    })
