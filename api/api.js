const URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

const factPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log("Getting data...");
    let response = await fetch(URL);
    console.log(response);
    
    let data = await response.json();

    let newJoke = document.createElement("p");
    newJoke.innerText = data.joke;
    document.body.appendChild(newJoke);
    // factPara.innerText = data.joke;   // This will replace the previous joke with the new one, instead of appending it to the body.
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", getFacts);

