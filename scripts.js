document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById('inputcontent');
    const buttons = document.querySelectorAll('.button');
    const op = ['+', '-', '*', '/', '%'];
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const buttonValue = this.textContent;
            if (buttonValue === 'AC') {
                inputBox.value = '';
            } 
            else if (buttonValue === 'DEL') 
                {
                inputBox.value = inputBox.value.slice(0, -1);
                } 
            else if (buttonValue === '=') 
                {
                try {
                    inputBox.value = eval(inputBox.value);
                }
                 catch (e) {
                    inputBox.value = 'Error';
                }
            } 
            else {
                if (op.includes(buttonValue) && op.includes(inputBox.value.slice(-1))) {
                    inputBox.value = inputBox.value.slice(0, -1) + buttonValue;
                } 
                else 
                {
                    inputBox.value += buttonValue;
                }
            }
        });
    });
});
