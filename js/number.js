const number=document.querySelectorAll("#numero")
const result =document.querySelector("#caixa-de-entrada")
let arrayNumber = []

number.forEach ( element => element.addEventListener("click",(event)=>{
    addNumber(event.target.value,event.target.getAttribute('data-id'),)
}))

function addNumber (number, dataNumber) {
    let found = false
    for (let i = 0; i < storeNumber(arrayNumber).length; i++) {
    
    if (storeNumber( arrayNumber([i])) == dataNumber) {
    result.value += dataNumber
    found = true;
    break;
   }

   }
   if (!found) {
    result.value += dataNumber
    storeNumber(number)
}}

function storeNumber(number) {
    return  arrayNumber.push (number)
    
}



