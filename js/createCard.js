async function getData (){
    const data = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(data => data.json());
    return data;
}
function getUrl(id){
    const url = "";
}
export const grid = getData().then((data) => {
    const divCard = document.createElement('div');
    divCard.className = ('card');
    const cardImgTop = document.createElement('img');
    cardImgTop.className = ('card-img-top');
    console.log(data);
 })