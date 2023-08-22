const counterInput = document.querySelector('#counterValue');
const decrementBtn = document.querySelector('#decrement');
const incrementBtn = document.querySelector('#increment');
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const divideBtn = document.querySelector('.divide-btn');
const firstNumber = document.querySelector('#firstNumber');
const secondnumber = document.querySelector('#secondNumber');
const result = document.querySelector('#result');
const dialogButton = document.getElementById('dialogButton');
const outputDiv = document.getElementById('output');
let previousText = '';

//счетчик
decrementBtn.onclick = () => {
    counterInput.value++
}

incrementBtn.onclick = () => {
    if(counterInput.value > 0){
        counterInput.value--
    }
}

//калькулятор
plusBtn.onclick = () => {
    result.value = Number(firstNumber.value) + Number(secondnumber.value)
}

minusBtn.onclick = () => {
    result.value = Number(firstNumber.value) - Number(secondnumber.value)
}

multiplyBtn.onclick = () => {
    result.value = Number(firstNumber.value) * Number(secondnumber.value)
}

divideBtn.onclick = ()=>{
    result.value = Number(firstNumber.value) / Number(secondnumber.value)
}

//диалоговое окно
dialogButton.addEventListener('click', () => {
    const userInput = prompt('Enter text:');
    if (userInput !== null) {
      previousText = userInput;
      outputDiv.textContent = previousText;
    }
})