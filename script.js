// Author: Subekti
// GitHub: https://github.com/Bektiman/


document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';

    function updateDisplay(value) {
        display.textContent = value;
    }

    function handleInput(input) {
        if (input === 'C') {
            currentInput = '';
        } else if (input === 'Enter') {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += input;
        }
        updateDisplay(currentInput);
    }

    document.querySelectorAll('.grid button').forEach(button => {
        button.addEventListener('click', function() {
            handleInput(this.textContent);
        });
    });

    document.querySelector('.bg-blue-500').addEventListener('click', function() {
        handleInput('Enter');
    });
});
