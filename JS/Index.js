
const urlRickandMorty ="https://rickandmortyapi.com/api/character";

const pagination = document.getElementById('pagination__Button');


const charactersTable = document.getElementById('charactersTable');

let prevUrl;
let nextUrl;

let btnPrevious;
let btnNext;

getInfo(urlRickandMorty);

async function getInfo(url_Prev_Next) {

    let url = url_Prev_Next;

    const response = await fetch(url);
    const data = await response.json();

    displayCharacters(data.results);

    prevUrl = data.info.prev;
    nextUrl = data.info.next;

    display_Buttons(data.info.prev, data.info.next);
}

function displayCharacters (data_Char){
    const tbody = charactersTable.querySelector('tbody');
    tbody.innerHTML = '';
    for(let character of data_Char) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="characterName" data-id="${character.id}"><a href = "./HTML/ItemDetail.html?id=${character.id}">${character.name}</a></td>
            <td><img src="${character.image}" alt="${character.name}"></td>
        `;
        tbody.appendChild(row); 
    };
}

function display_Buttons(prev, next){
    
    btnPrevious = prev ? `
        <button id="buttonAnt_Id" class="buttonClass" onClick=change_button_prev()>Anterior</button>
        ` : ''
    btnNext = next ? `
        <button id="buttonSig_Id" class="buttonClass" onClick=change_button_next()>Siguiente</button>
        ` : ''
        pagination.innerHTML = btnPrevious + " " + btnNext;

}

function change_button_prev(){

    console.log(prevUrl.split('=')[1]);
    if (prevUrl.split('=')[1] == 1){
        prevUrl = urlRickandMorty;
    }
    getInfo(prevUrl);
}

function change_button_next(){
    getInfo(nextUrl);
}