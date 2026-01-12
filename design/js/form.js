const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailAddressInput = document.getElementById("email_address");
const queryTypeInput = document.getElementById("query_type");
const messageInput = document.getElementById("message");

const firstNameError = document.getElementById("first_name_required");
const lastNameError = document.getElementById("last_name_required");
const emailAddressError = document.getElementById("email_address_required");
const messageError = document.getElementById("message_required");
const checkboxError = document.getElementById("submit_error");

firstNameInput.addEventListener("keydown", function (event) {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault(); // Block Numbers
    }
});

firstNameInput.addEventListener("input", function () {
    const value = this.value.trim();

    if (value === '') {
        firstNameError.style.display = "block"; // Show error
    } else {
        firstNameError.style.display = "none"; // Hide error
    }
});

firstNameInput.addEventListener("blur", function () {
    const value = this.value.trim();

    if (value === '') {
        firstNameError.style.display = "block"; // Show error
    }
});

lastNameInput.addEventListener("keydown", function (event) {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault(); // Block Numbers
    }
});

lastNameInput.addEventListener("input", function () {
    const value = this.value.trim();

    if (value === '') {
        lastNameError.style.display = "block"; // Show error
    } else {
        lastNameError.style.display = "none"; // Hide error
    }
});

lastNameInput.addEventListener("blur", function () {
    const value = this.value.trim();

    if (value === '') {
        lastNameError.style.display = "block"; // Show error
    }
});

// Email
emailAddressInput.addEventListener('input', function (event) {
    const emailValue = event.target;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(emailValue.value)) {
        emailAddressError.style.display = "none";
    } else {
        emailAddressError.style.display = "block";
    }
});

// Query Type
document.getElementById('contact_form').addEventListener('submit', function (event) {
    event.preventDefault();

    //Input Values

    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const emailAddressInput = document.getElementById("email_address");
    const messageInput = document.getElementById("message");

    // Radio buttons

    let formValid = false;
    const radios = document.getElementsByName('query_type');
    const queryTypeError = document.getElementById("query_type_error");
    const firstNameError = document.getElementById("first_name_required");
    const lastNameError = document.getElementById("last_name_required");
    const emailAddressError = document.getElementById("email_address_required");
    const messageError = document.getElementById("message_required");
    const checkbox = document.getElementById("checkbox");
    const checkboxError = document.getElementById("submit_error");
    const completedForm = document.getElementById("completed_form")

    // Validation Errors

    if (firstNameInput.value.trim() !== "") {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }

    if (lastNameInput.value.trim() !== "") {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let emailValid = false;
    if (emailRegex.test(emailAddressInput.value)) {
        emailValid = true;
        emailAddressError.style.display = "none";
    } else {
        emailAddressError.style.display = "block";
    }

    // Iterate over the elements to see if any are marked
    let queryTypeValid = false;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            queryTypeValid = true;
            break; // Exit loop
        }
    }

    if (!queryTypeValid) {
        queryTypeError.style.display = "block";
    }
    else {
        queryTypeError.style.display = "none";
    }

    if (messageInput.value.trim() !== "") {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }

    if (!checkbox.checked) {
        checkboxError.style.display = "block";
    }
    else {
        checkboxError.style.display = "none";
    }

    if (firstNameInput.value.trim() !== "" && lastNameInput.value.trim() !== "" && emailValid && queryTypeValid && messageInput.value.trim() !== "" && checkbox.checked) {
        formValid = true;
    }

    if (!formValid) {
        completedForm.style.display = "none";
    } else {
        completedForm.style.display = "block";
        setTimeout(() => {
            window.location.reload();
        }, 8000);
    }
});

// Message

messageInput.addEventListener("keydown", function (event) {
    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault(); // Block Numbers
    }
});

messageInput.addEventListener("input", function () {
    const value = this.value.trim();

    if (value === '') {
        messageError.style.display = "block"; // Show error
    } else {
        messageError.style.display = "none"; // Hide error
    }
});

messageInput.addEventListener("blur", function () {
    const value = this.value.trim();

    if (value === '') {
        messageError.style.display = "block"; // Show error
    }
});

