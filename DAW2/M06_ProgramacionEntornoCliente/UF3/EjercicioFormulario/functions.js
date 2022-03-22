window.onload = main();

function main() {
    document.querySelector("[type = submit]").addEventListener("click", validar);
}

function validar(e) {
    if (!validaNombre() || !validaTelefono() || !validaApellido() || validaEmail() || validaDni()) {
        e.preventDefault();
    }
}

function validaNombre() {
    let nombre = document.querySelector('#nom');
    if (nombre.value) {
        setSuccess(nombre);
        return true;
    }
    setError(nombre, "El campo no puede estar vacío");
    return false;
}

function validaTelefono() {
    let telf = document.querySelector('#telefono');
    if (telf.value) {
        setSuccess(telf);
        return true;
    }
    setError(telf, "El campo no puede estar vacio");
    return false;
}

function validaApellido() {
    let apellido = document.querySelector('#cognom');
    if (apellido.value) {
        setSuccess(apellido);
        return true;
    }
    setError(apellido, "El campo no puede esar vacio");
    return false;
}

function validaEmail() {
    let email = document.querySelector('#email');
    if (email.value) {
        setSuccess(email);
        return true;
    }
    setError(email, "El campo no puede estar vacio");
    return false;
}

function validaDni() {
    let dni = document.querySelector('#dni');
    if (dni.value) {
        setSuccess(dni);
        return true;
    }
    setError(dni, "El campo no puede estar vacio");
    return false;
}

function setSuccess(input) {
    input.className = "form-control is-valid"
}

function setError(input, mensaje) {
    input.className = "form-control is-invalid";
    input.nextElementSibling.innerHTML = mensaje;
}