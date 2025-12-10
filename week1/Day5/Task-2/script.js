// THEME SWITCHER
document.getElementById("lightBtn").onclick = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
};

document.getElementById("darkBtn").onclick = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
};

function calculate(type) {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let error = document.getElementById("error");
    let resultBox = document.getElementById("result");

    if (n1 === "" || n2 === "") {
        error.innerText = "❌ Both fields are required!";
        resultBox.innerText = "Result: --";
        return;
    } else {
        error.innerText = "";
    }

    n1 = Number(n1);
    n2 = Number(n2);

    let result;

    switch (type) {
        case "add":
            result = n1 + n2;
            break;
        case "sub":
            result = n1 - n2;
            break;
        case "mul":
            result = n1 * n2;
            break;
        case "div":
            result = n1 / n2;
            break;
    }

    resultBox.innerText = "Result: " + result;
}
