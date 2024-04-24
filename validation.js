function validation() {
    liveValidation();
    validateForm();
    formAlert();
}

function formAlert() {
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
    let inputs = document.querySelectorAll('#registrationForm input');
    let allValid = true;
    inputs.forEach(input => {
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
    } else if (input.id === 'confirmpassword' && input.value !== document.getElementById('password').value) {
        isValid = false;
        errorMessage = 'Passwords do not match';
    }

    let errorSpan = input.nextElementSibling;
    if (!isValid) {
        input.classList.add('error');
        errorSpan.textContent = errorMessage;
        errorSpan.style.display = 'block';
    } else {
        input.classList.remove('error');
        errorSpan.textContent = '';
        errorSpan.style.display = 'none';
    }

    return isValid;
}

validation();