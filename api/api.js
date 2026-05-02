const URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

const factPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log("Getting data...");
    let response = await fetch(URL);
    console.log(response);
    
    let data = await response.json();
    factPara.innerText = data.joke;
}