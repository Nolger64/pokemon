const Gridpokemons = document.getElementById("Gridpokemons");
const inputBuscar = document.getElementById("inputBuscar");

//Buscar
inputBuscar.oninput = function () {

    const buscar = getData().then((data) => {
        Gridpokemons.replaceChildren();
        let lengthString = (inputBuscar.value).length;
        let found = false;
        for (let i = 0; i < 500; i++) {
            const name = (data.results[i].name).substring(0, lengthString);
            if (name.toLowerCase() == inputBuscar.value.toLowerCase()) {
                cardCreate(i);
                found = true;
            }
        }
        if (found) {
            
        }else{
            Gridpokemons.innerHTML = ("No encontrado");
        }
    })
}

//---------------------------------------------------------

//Funciones para obtener datos del servidor
async function getData() {
    const data = fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(data => data.json());
    return data;
}
function getUrl(id) {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + (id + 1) + ".svg";
    return url;
}
//----------------------------------------------------------

//Crea cartas apartir de un 1 y las añade al div Gridpokemons
export function cardCreate(id) {
    const grid = getData().then((data) => {
        const divCard = document.createElement('div');
        divCard.className = ('card');
        const cardImgTop = document.createElement('img');
        cardImgTop.className = ('card-img-top');
        cardImgTop.src = getUrl(id);
        divCard.appendChild(cardImgTop);
        const divCardBody = document.createElement('div');
        divCardBody.className = ('card-body');
        divCard.appendChild(divCardBody);
        let cardText = document.createElement('p');
        cardText.className = ('card-text');
        cardText.innerHTML = "<strong>" + data.results[id].name + "</strong>";
        divCardBody.appendChild(cardText);
        Gridpokemons.appendChild(divCard);
    });
}
//------------------------------------------------------------
for (let i = 0; i < 40; i++) {
    cardCreate(i);
}

console.log();