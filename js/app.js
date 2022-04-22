let ratingButtons = document.querySelectorAll(".rate");
let ratingButtonsArray = Array.prototype.slice.call(ratingButtons);

var selectedRate;

ratingButtonsArray.forEach((rate) => {

    // Add event listener for all rates.
    // When clicked remove all the selected-sate rate and add it fore the one clicked.
    rate.addEventListener("click", () => {

        ratingButtonsArray.forEach((rate) => {
            rate.classList.remove("selected")
        })
        rate.classList.add("selected")
        selectedRate = rate.id;
        console.log(`Rate selected : ${selectedRate}`)
    })

})

let submitButton = document.getElementById("submit");
let normalStateDiv = document.getElementById("normal-state");
let thankYouStateDiv = document.getElementById("thank-you-state");
let ratingSelectedPara = document.getElementById("rating-selected");

submitButton.addEventListener("click", () => {

    
    if (selectedRate == undefined) {
        console.log("No selected rate...")
    } 

    else {
        displayThankYouDiv()
        ratingSelectedPara.innerHTML = `You selected ${selectedRate} out of 5`;
    }
    



})

function displayThankYouDiv() {
    // Hide the normal state div
    normalStateDiv.style.display = "none";

    // Display the thank you div
    thankYouStateDiv.style.display = "flex";
}
