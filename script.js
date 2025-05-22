const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerText === '=') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText === '0') {
            display.innerText = button.innerText;
        } else {
            display.innerText += button.innerText;
        }
    });
})

display.addEventListener("keydown", function (event) {
    const allowedKeys = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "+", "-", "*", "/", ".", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Home", "End"
    ];

    if (
        !allowedKeys.includes(event.key) &&
        !(event.ctrlKey && ["a", "c", "v", "x"].includes(event.key.toLowerCase()))
    ) {
        event.preventDefault();
    }
});

