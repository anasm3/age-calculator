const calculateAge = (birthdateString) => {
    const birthDate = new Date(birthdateString);
    const today = new Date();
    
    if (birthDate > today) {
        return { error: 'The selected date is in the future. Please enter a valid date.' };
    }
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return { age };
};

const displayAge = () => {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultElement = document.getElementById('result');
    
    if (birthdateInput) {
        const { age, error } = calculateAge(birthdateInput);
        if (error) {
            resultElement.textContent = error;
        } else {
            resultElement.textContent = `You are ${age} years old.`;
        }
    } else {
        resultElement.textContent = 'Please enter your birthdate.';
    }
};

const toggleButtonVisibility = () => {
    const birthdateInput = document.getElementById('birthdate');
    const calcButton = document.getElementById('calc-btn');
    if (birthdateInput.value) {
        calcButton.style.display = 'inline-block';
    } else {
        calcButton.style.display = 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate');
    const calcButton = document.getElementById('calc-btn');
    birthdateInput.addEventListener('input', toggleButtonVisibility);
    calcButton.addEventListener('click', displayAge);
    toggleButtonVisibility();
});
