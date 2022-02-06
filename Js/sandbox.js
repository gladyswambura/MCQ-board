let userForm = document.getElementById("userForm");
let score = 0;
userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let userData = new FormData(userForm);
    questions(userData);
})
function questions(userData) {
    let male = userData.get("male");
    if (male == "Tim Berners-Lee") {
        score++;
        // alert(score)
    } else {
        alert("wrong! Try again!");
    }
    let language = userData.get("language");
    if (language == "Markup Language") {
        score++;
        // alert(score)
    } else {
        alert("wrong! Try again!");
    }
    let what = userData.get("what");
    if (what == "css") {
        score++;
        // alert("correct!")
    } else {
        alert("wrong! Try again!");
    }

    let father = userData.get("father");
    if (father == "Watts S. Humphre") {
        score++;
        // alert("correct!")
    } else {
        alert("wrong! Try again!");
    }
    let model = userData.get("model");
    if (model == "4GT Model") {
        score++;
        // alert("correct!")
    } else {
        alert("wrong! Try again!");
    }
    userForm.style.display = "none";
    // alert(score);
    let userScore = document.querySelector(".score");
    userScore.textContent = 'Your Score is:' + ' ' + score;
    // userScore.getElementsByClassName.color="red";
    // userForm.style.display="none";
}