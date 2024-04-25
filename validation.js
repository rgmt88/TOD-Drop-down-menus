function validation() {
    liveValidation();
    handleFormSubmission();
}

function handleFormSubmission() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();
        let isValid = validateForm();
        if (isValid) {
            alert('High five! 🖐');
        } else {
            alert('Please correct the errors before submitting');
        }
    });
}

function validateForm() {
    let formInputs = document.querySelectorAll('#registrationForm input');
    let allValid = true;
    formInputs.forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });
    return allValid;
}

function liveValidation() {
    let inputs = document.querySelectorAll('#registrationForm input')
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateField(input);
        });
    });
}

function validateField(input) {
    let isValid = true;
    let errorMessage = '';

    if (input.value.trim() === '') {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (input.type === 'email' && !input.checkValidity()) {
        isValid = false;
        errorMessage = 'Please enter a valid email';
    } else if (input.id === 'zipcode' && (input.value < 10000 || input.value > 19999)) {
        isValid = false;
        errorMessage = 'Please enter a valid number between [10000 - 20000]';
    } else if (input.id === 'password' && !validatePassword(input.value)) {
        isValid = false;
        errorMessage = 'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character'
    } else if (input.id === 'confirmpassword' && input.value !== document.getElementById('password').value) {
        isValid = false;
        errorMessage = 'Passwords do not match';
    }

    let errorSpan = input.nextElementSibling;
    if (!isValid) {
        input.classList.add('error');
        if (errorSpan) {
            errorSpan.textContent = errorMessage;
            errorSpan.style.display = 'block';
        }
    } else {
        input.classList.remove('error');
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
    }

    return isValid;
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
}

validation();

// Password min 8 with 1 Upper
// Don’t forget to style validations with CSS by using the :valid and :invalid pseudo-classes!