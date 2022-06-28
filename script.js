let submitButton = document.getElementsByClassName("submit")[0];
let value = null
let ratings = document.getElementsByClassName("option");
let card1 = document.getElementsByClassName("card1")[0];
let card2 = document.getElementsByClassName("card2")[0];

for(let rating of ratings) {
    rating.addEventListener("click", () => { value = rating.textContent });
}

submitButton.addEventListener("click", () => {
    
    card1.setAttribute("hidden", true);
    card2.removeAttribute("hidden");
    
    if (value != null) {
        let rating_span = document.getElementById("selected");
        rating_span.textContent = value;
    }
});

