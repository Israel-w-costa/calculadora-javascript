const number=document.querySelectorAll("#numero")

// const numeroconvertido = parseInt(numero)
const result =document.querySelector("#caixa-de-entrada")
console.log(result)

number.forEach ( element => element.addEventListener("click",(event)=>{
    addNumber(event.target.value,event.target.getAttribute('data-id'))
    console.log (event.target)
    
}))


function addNumber (number, dataNumber) {
   for (let i = 0; i < array.length; i++) {
    const element = array[index];
    
   }
    if (count=0) {
    result.value = dataNumber
    count++ 
    } else {result.value = number}
   console.log (count)
}

function storeNumber(number) {
    let arrayNumber = []
    arrayNumber.push (number)
    console.log (arrayNumber)
    
}



