function donateFood() {
    alert("🎉 Thank you! Your food donation has been submitted successfully.");
}

function checkFood() {

    let food = document.getElementById("foodType").value;
    let weather = document.getElementById("weather").value;
    let hours = parseInt(document.getElementById("hours").value);

    let result = document.getElementById("result");

    if(food=="" || weather=="" || isNaN(hours)){
        result.innerHTML="⚠️ Please fill all details.";
        result.style.color="orange";
        return;
    }

    if(hours <= 4){
        result.innerHTML="✅ Fresh and Safe to Donate";
        result.style.color="green";
    }
    else if(weather=="Hot" && hours>4){
        result.innerHTML="⚠️ Donate Immediately. Food may spoil soon.";
        result.style.color="orange";
    }
    else if(hours<=8){
        result.innerHTML="✅ Safe, but donate as soon as possible.";
        result.style.color="green";
    }
    else{
        result.innerHTML="❌ Food is not recommended for donation.";
        result.style.color="red";
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
function submitDonation() {

    document.getElementById("successMessage").innerHTML = `
        <div class="success-box">
            <h2>✅ Donation Submitted Successfully!</h2>
            <p>Thank you for helping reduce food waste.</p>
            <p>Searching for the nearest NGO...</p>
        </div>
    `;

    // Show the tracker
    document.getElementById("tracker").style.display = "block";

    // Reset tracker steps
    document.getElementById("step1").innerHTML = "⏳ Donation Request Received";
    document.getElementById("step2").innerHTML = "⏳ NGO Assignment Pending";
    document.getElementById("step3").innerHTML = "⏳ Volunteer Not Assigned";
    document.getElementById("step4").innerHTML = "⏳ Waiting for Delivery";

    // Animate the tracking
    setTimeout(function () {
        document.getElementById("step1").innerHTML = "✅ Donation Request Received";
    }, 1000);

    setTimeout(function () {
        document.getElementById("step2").innerHTML = "🏢 NGO Assigned";
    }, 2500);

    setTimeout(function () {
        document.getElementById("step3").innerHTML = "🚚 Volunteer On The Way";
    }, 4500);

    setTimeout(function () {
        document.getElementById("step4").innerHTML = "❤️ Food Delivered Successfully";
    }, 6500);

}
setTimeout(function () {
    document.getElementById("step1").innerHTML = "✅ Donation Request Received";
    document.getElementById("progressBar").style.width = "25%";
}, 1000);

setTimeout(function () {
    document.getElementById("step2").innerHTML = "🏢 NGO Assigned";
    document.getElementById("progressBar").style.width = "50%";
}, 2500);

setTimeout(function () {
    document.getElementById("step3").innerHTML = "🚚 Volunteer On The Way";
    document.getElementById("progressBar").style.width = "75%";
}, 4500);

setTimeout(function () {
    document.getElementById("step4").innerHTML = "❤️ Food Delivered Successfully";
    document.getElementById("progressBar").style.width = "100%";
}, 6500);
