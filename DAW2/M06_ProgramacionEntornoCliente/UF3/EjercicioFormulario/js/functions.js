window.onload = function () {

    document.querySelector("button[type=submit]").addEventListener("click", validateForm);

    document.getElementById("nom").addEventListener("blur", validateNom);
    document.getElementById("cognoms").addEventListener("blur", validateCognom);
    document.getElementById("dni").addEventListener("blur", validateDNI);
    document.getElementById("email").addEventListener("blur", validateEmail);
    document.getElementById("telefon").addEventListener("blur", validateTelefon);

    document.getElementById("btnUsername").addEventListener("click", generateUsername);
    document.getElementById("findLoc").addEventListener("click", geoLocalizacion);
}

function validateForm(e) {
    if (!validateNom() || !validateCognom() || !validateDNI()
        || !validateEmail() || !validateTelefon()) {
        e.preventDefault();
    }
}

function validateNom() {
    var nomInput = document.getElementById("nom");
    return validateInput(nomInput, "El nom no pot estar buit");
}

function validateCognom() {
    var cognomsInput = document.getElementById("cognoms");
    return validateInput(cognomsInput, "Els cognoms no poden estar buits");
}

function validateDNI() {
    let dniInput = document.getElementById("dni");
    return validateInput(dniInput, "El format del DNI no es valid", isValidDNI)
}

function validateEmail() {
    let emailInput = document.getElementById("email");
    return validateInput(emailInput, "El format del email no es valid", isValidEmail)
}

function validateTelefon() {
    let phoneInput = document.getElementById("telefon");
    return validateInput(phoneInput, "El format del telefon no es valid", isValidPhone)
}

function generateUsername() {

    let nom = document.getElementById("nom").value;
    let cognoms = document.getElementById("cognoms").value.replace(" ", "").toLowerCase();
    let dni = document.getElementById("dni").value;

    let username = nom.substr(0, 1).toLowerCase() +
        cognoms[0].toUpperCase() + cognoms.substr(1, 3) +
        dni[0] + dni[2] + dni[4] + dni[6];

    document.getElementById("username").value = username;
}

// COMMON FUNCTIONS

function validateInput(input, err_message, isInputValid) {

    let is_input_valid = arguments.length > 2 ? isInputValid(input.value) : true;

    if (input.value && is_input_valid) {
        setSuccess(input);
        return true;
    }
    setError(input, err_message);
    return false;
}

function setSuccess(input) {
    input.className = "form-control is-valid";
}

function setError(input, message) {

    input.className = "form-control is-invalid";
    input.nextElementSibling.innerHTML = message;
}

function isValidDNI(dni) {

    const re = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/g;

    if (!re.test(dni)) return false;

    // Check last letter
    let lastLetter = dni.substr(dni.length - 1, dni.lenght);
    let index = parseInt(dni.substr(0, 8)) % 23;

    const dniLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    if (dniLetters.charAt(index) == lastLetter) return true;

    return false;
}

function isValidEmail(email) {

    const re = /^\w+(\.\w+)*@\w+(\.\w+){1,2}$/g;
    return re.test(email);
}

function isValidPhone(phone) {

    const re = /^[^0]\d{8}$/g;
    return re.test(phone);
}
function geoLocalizacion() {
    let address = getAdress();
    L.esri.Geocoding.geocode().text(address).run(function (err, results, response) {
        if (!err) {
            lat = results.results[0].latlng.lat;
            lng = results.results[0].latlng.lng;
            console.log("lat =" + lat + ", lng = " + lng);

        } else {
            console.log(err);
            alert("Geocoding was not successful for the following reason: " + err);
        }
    });
}
function getAdress() {

}