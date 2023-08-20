const input = document.querySelector('.input');
const output = document.querySelector('.output');
let currentInput = ``;

input.addEventListener('click',(e)=>{
    const buttonText = e.target.textContent;
    switch(buttonText){
        case 'DEL': currentInput = currentInput.slice(0,-1); break;
        case `=`: currentInput = eval(currentInput); break;
        case 'RESET': currentInput = ``; break;
        default: currentInput += buttonText; break;
    }
    output.textContent = currentInput;
})