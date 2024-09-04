let calculateAge = ((birthdateString) => {
    // Converting the birthdate string to a Date object.
    const birthDate = new Date(birthdateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    // Logic to Check if the birthday has been occured this year or not.
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
});

let displayAge = (() => {
    const birthdateInput = document.getElementById('birthdate').value;
    if (birthdateInput) {
        const age = calculateAge(birthdateInput);
        document.getElementById('result').textContent = `You are ${age} years old.`;
    } else {
        document.getElementById('result').textContent = 'Please enter your birthdate.';
    }
});

let calcBtn = document.getElementById("calc-btn");
calcBtn.addEventListener("click",(() => {
    displayAge();
}));