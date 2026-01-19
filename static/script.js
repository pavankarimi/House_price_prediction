function predictPrice() {

    const data = {
        Area: document.getElementById("area").value,
        Bedrooms: document.getElementById("bedrooms").value,
        Bathrooms: document.getElementById("bathrooms").value,
        Floors: document.getElementById("floors").value,
        Parking: document.getElementById("parking").value,
        Age: document.getElementById("age").value
    };

    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if (res.predicted_price !== undefined) {
            document.getElementById("result").innerText =
                "💰 Estimated Price: ₹ " + res.predicted_price;
        } else {
            document.getElementById("result").innerText =
                "❌ Error: " + res.error;
        }
    });
}
