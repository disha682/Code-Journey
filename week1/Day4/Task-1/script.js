// Normal Parameterized Function - Rectangle Area
function rectangleArea(length, width) {
    return length * width;
}

function calculateArea() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    if (!length || !width) {
        document.getElementById("areaOutput").textContent = "Please enter both values!";
        return;
    }

    let area = rectangleArea(length, width);
    document.getElementById("areaOutput").textContent = `Area: ${area}`;
}


// Arrow Function – Voting Eligibility
const checkVote = (age) => {
    return age >= 18 ? "Eligible to Vote 👍" : "Not Eligible to Vote ❌";
};

function checkVoting() {
    let age = document.getElementById("age").value;

    if (!age) {
        document.getElementById("voteOutput").textContent = "Please enter your age!";
        return;
    }

    let result = checkVote(age);
    document.getElementById("voteOutput").textContent = result;
}
