const currentLevel = document.getElementById('currentLevel');
const diggedMine = document.getElementById('diggedMine');
const range = document.getElementById('range');
const rangeCounter = document.getElementById('rangeCounter');

let a = 0;
let b = 100000;
// let c = 100000;
range.style.backgroundColor = '#cafe76';

        
function mineIcon(){
    a = a + 1;
    diggedMine.innerText = a;
    if (diggedMine.innerText >= 1000){
        currentLevel.innerText = 'Grower';
    }if(diggedMine.innerText >= 10000){
        currentLevel.innerText = 'Degens';
        
    }
   
    notice.style.display = 'none';
    updateRange();
}

function updateRange() {
    if (rangeCounter.innerText > '0') {
        b = b - 1;
        range.value = b;
        rangeCounter.innerText = range.value;
        rangeCounter.innerText = b;
    }
}

// function updateRange(){
   
    
// }

const clearButton = document.getElementById('clearButton');
const notice = document.querySelector('.notice');

clearButton.addEventListener('click', ()=>{
    notice.style.display = 'flex';
})


