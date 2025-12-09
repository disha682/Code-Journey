function startPromise() {
    const result = document.getElementById("result");

    const simulateFetch = new Promise((resolve, reject) => {
        let isOnline = true;  // change to false to test reject()

        setTimeout(() => {
            if (isOnline) {
                resolve("Data fetched successfully");
            } else {
                reject("Network error");
            }
        }, 1500);
    });

    result.textContent = "Fetching data...";

    simulateFetch
        .then(msg => {
            console.log(msg);
            result.textContent = msg;
        })
        .catch(err => {
            console.error(err);
            result.textContent = err;
        });
}
