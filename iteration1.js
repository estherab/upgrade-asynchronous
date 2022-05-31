// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.
const callApi = async () => {
    const data = await (await fetch("https://api.agify.io?name=michael")).json();

    console.log(data);
}

// callApi();

// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
let button = document.querySelector("button");
let input = document.querySelector("input")
const baseUrl = 'https://api.nationalize.io';


button.addEventListener("click", (event) = () => {

    fetch(baseUrl + "/?name=" + input.value)
    .then(response => {
        return response.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
});





