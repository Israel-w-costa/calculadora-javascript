const operators = document.querySelectorAll ("#operador")

operators.forEach(element => element.addEventListener ("click", (event) => {
    buttomC (event.target.value )
    // buttomDivision (event.target.value )
    // buttomX (event.target.value )
    // buttomMinus  (event.target.value )
    // buttomPlus (event.target.value )
    // buttomEqual (event.target.value )
})
    
);

function buttomC(buttom) {
    if (buttom=="c") {result.value = ''}
    
}
