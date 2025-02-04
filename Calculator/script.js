const numbers = document.querySelectorAll("form input[type='button']")
const display = document.querySelector("input[type='text']");
const AC = document.querySelector("input[value='AC']");
const DE = document.querySelector("input[value='DE']");
const equ = document.querySelector("input[value='=']");

numbers.forEach( number=>{
number.addEventListener("click",()=>{
    if(number.value !== "AC" && number.value !== "DE" && number.value !== "="){
        display.value += number.value;
    }
    
    console.log(`Button clicked: ${number.value}`);
})
})

AC.addEventListener("click",()=>{
    display.value = "";
    console.log("AC button clicked: Display cleared.");
})

DE.addEventListener("click",()=>{
    display.value = display.value.slice(0,-1);
})

equ.addEventListener("click",()=>{
    display.value = eval(display.value);
})