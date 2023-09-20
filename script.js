const submitBtn = document.querySelector("#submit-btn");  
const inputs = document.querySelectorAll('input[name="rating"]');

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let rating;
    for (const input of inputs) {
        if (input.checked) {
            rating = input.value;
            break;
        }
    }

    if (!rating) {
        submitBtn.classList.add("shake");

        setTimeout(() => {
            submitBtn.classList.remove("shake");
        }, 500);

        return;
    }

    document.getElementById("rating-state").style.display = "none";
    document.getElementById("thank-you-state").style.display = "block";
    document.getElementById("obtained-rating").innerHTML = rating;

});

