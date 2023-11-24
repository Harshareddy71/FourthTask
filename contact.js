function clearForm() {
    document.getElementById("myForm").reset();
}
//alert window depending on gender
function identifyGender() {
    let genderSelect = document.getElementsByName("gender");
    for (const radio of genderSelect) {
        if (radio.checked) {
            if (radio.value === "male") {
                alert("Hello sir");
            } else if (radio.value === "female") {
                alert("Hello Lady");
            }
            return;
        }
    }
    alert("Please select a gender");
}


function updatePromoCode() {
    var stateSelect = document.getElementById("state");
    var promoCodeInput = document.getElementById("promotion");
    if (stateSelect.value !== "") {
        promoCodeInput.value = stateSelect.value + " - PROMO";
    } else {
        promoCodeInput.value = "";
    }
}

function validateForm(event) {
    event.preventDefault(); 
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var organizationInput = document.getElementById("organization");
    var adressInput = document.getElementById("adress");
    var errorMessage = document.getElementById("error-message");

    if (nameInput.value === "") {
        document.getElementById('name-validation').innerHTML = "Name is required";
    } else {
        document.getElementById('name-validation').innerHTML = "";
    }

    if (emailInput.value === "") {
        document.getElementById('email-validation').innerHTML = "Email is required";
    } else if (!reg.test(emailInput.value)) {
        document.getElementById('email-validation').innerHTML = "Please enter a valid email";
    } else {
        document.getElementById('email-validation').innerHTML = "";
    }

    if (organizationInput.value === "") {
        document.getElementById('organization-validation').innerHTML = "Organization Name is required";
    } else {
        document.getElementById('organization-validation').innerHTML = "";
    }

    if (nameInput.value === "" || emailInput.value === "" || organizationInput.value === "") {
        errorMessage.textContent = "Please fill all the required fields.";
    } else {
        errorMessage.textContent = "";
        alert("Form submitted successfully");
        document.getElementById("myForm").submit();
    }
}






       
       
