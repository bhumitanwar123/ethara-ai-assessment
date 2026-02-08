function predictCrime() {
    const severity = document.getElementById("severity").value;

    if (!severity) {
        document.getElementById("result").innerText = "Please enter a value";
        return;
    }

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            severity: Number(severity)
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText =
            data.prediction ? data.prediction : data.error;
    })
    .catch(err => {
        document.getElementById("result").innerText =
            "Backend not reachable";
        console.error(err);
    });
}
