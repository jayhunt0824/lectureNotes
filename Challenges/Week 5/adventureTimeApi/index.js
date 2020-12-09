const baseURL="https://adventure-time-quote-api.glitch.me/api/random/";

const section = document.getElementById("quotes");


fetch(baseURL)
.then(function(result){
    return result.json()
})

.then(json=> displayResults(json));

function displayResults(quotes){
    console.log(quote)

    let heading= document.createElement("h1");
    section.appendChild(heading)
    let img= document.createElement("img");

    section.appendChild(heading);
    section.appendChild(img);

    console.log(quote.split(":"))
    heading.textContent = quote.split(":") [1];

    let character = quote.split(":")[0];

    if(character ==="Finn"){
        img.src = 
    }

}





// function showQuote(quote){
//     let quoteText = document.getElementById('myData')
//     quoteText.innerText=quote 
// }

// showQuote();