const currentLevel = document.getElementById('currentLevel');
const diggedMine = document.getElementById('diggedMine');
const range = document.getElementById('range');
const rangeCounter = document.getElementById('rangeCounter');
const floatingText = document.getElementById('floating-text');

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
    floatingText.style.display = 'none';
    updateRange();
    display();
}

function updateRange() {
    if (rangeCounter.innerText > '0') {
        b = b - 1;
        range.value = b;
        rangeCounter.innerText = range.value;
        rangeCounter.innerText = b;
    }
}


function display(){
   if (mineIcon){
    floatingText.style.display = 'flex';
   }else{
    floatingText.style.display = 'none';
    }
    
}



const clearButton = document.getElementById('clearButton');
const iClass = document.getElementById('iclass');
const notice = document.querySelector('.notice');
const openBot = document.querySelector('.openBot');
const boost = document.querySelector('.boost')

clearButton.addEventListener('click', ()=>{
    notice.style.display = 'flex';
})

function openBotPage() {
    openBot.style.display = 'flex';
}

function openBoostPage() {
    boost.style.display = 'flex';
}

function enlargeHeight() {
    boost.style.height = '700px';
    iClass.style.display = 'flex';
}
function reduceHeight() {
    boost.style.height = '500px';
    iClass.style.display = 'none';
}

function closeBoost() {
    boost.style.display = 'none';
}