document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('case');
    const options = selectElement.options;
    const additionalCost = 2.35;

    for (let i = 0; i < options.length; i++) {
        const originalValue = parseFloat(options[i].value);
        const newValue = originalValue + additionalCost;
        options[i].value = newValue.toFixed(2); // Update the value with the additional cost
        options[i].textContent += ` (Total: ${newValue.toFixed(2)} EUR)`; // Update the text to show the new value
    }
});

document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = parseFloat(document.getElementById('amount').value);
    const caseCost = parseFloat(document.getElementById('case').value);
    
    if (isNaN(amount) || isNaN(caseCost)) {
        alert('Please enter valid numbers.');
        return;
    }

    const numberOfCases = Math.floor(amount / caseCost);
    document.getElementById('result').textContent = `You can buy ${numberOfCases} cases with ${amount} euros.`;
});