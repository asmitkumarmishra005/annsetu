function donateFood() {
    alert("🎉 Thank you! Your food donation has been submitted successfully.");
}

function checkFood() {

    let hours = document.getElementById("hours").value;
    let result = document.getElementById("result");

    if (hours === "") {
        result.innerHTML = "Please enter the number of hours.";
        result.style.color = "blue";
        return;
    }

    hours = Number(hours);

    if (hours <= 4) {
        result.innerHTML = "✅ Safe to Donate";
        result.style.color = "green";
    } else if (hours <= 8) {
        result.innerHTML = "⚠️ Donate Immediately";
        result.style.color = "orange";
    } else {
        result.innerHTML = "❌ Not Recommended";
        result.style.color = "red";
    }
}
function findNGO() {

    let city = document.getElementById("city").value;
    let result = document.getElementById("ngoResult");

    if(city=="Aurangabad"){
        result.innerHTML="🏢 Helping Hands NGO";
    }
    else if(city=="Patna"){
        result.innerHTML="🏢 Patna Food Bank";
    }
    else if(city=="Ranchi"){
        result.innerHTML="🏢 Ranchi Care Foundation";
    }
    else if(city=="Kolkata"){
        result.innerHTML="🏢 Kolkata Hunger Relief";
    }
    else{
        result.innerHTML="Please select a city.";
    }

}