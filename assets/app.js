const calculateAge = () => {
    const birthDateInput = document.getElementById('birthDate').value;
    const birthDate = new Date(birthDateInput);
    const today = new Date();

    if (!birthDateInput || isNaN(birthDate.getTime())) {
        document.getElementById('result').innerText = 'Please enter a valid date.';
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
};

document.getElementById('calculateButton').addEventListener('click', calculateAge);