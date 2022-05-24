const canvas = document.querySelector('.canvas');

let activeColor="#000000";
let slider = document.getElementById('myRange');
let sliderOutput = document.getElementById('myRangeValue');

function createCanvas(size=16){
    if (canvas.hasChildNodes){
        while (canvas.firstChild) {
            canvas.removeChild(canvas.lastChild);
        };
    };
    const divSize = newDivSize(size);
    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++){
            const newDiv=document.createElement('div');
            newDiv.classList.add('canvasElement');
            newDiv.setAttribute("style",`width:${divSize}px; height:${divSize}px`);
            canvas.appendChild(newDiv);
        }
    };
    initMouseEnter();
    sliderOutput.textContent = `Grid size: ${slider.value} x ${slider.value}`;
};

function newDivSize(size){
    const vw=canvas.clientWidth;
    const divSize = (vw - (size-1)/2)/size;
    return divSize;
};

window.addEventListener('resize', () => {createCanvas(10)},true);

function initMouseEnter() {
    let canvasMouseEnter = document.querySelectorAll('.canvasElement');
    canvasMouseEnter.forEach((canvasElement) => {
    canvasElement.addEventListener('mouseenter', () => {
        if (!rainbowMode) {
            canvasElement.style.backgroundColor = activeColor;
            return;
        };
        canvasElement.style.backgroundColor = randomColor();
    });
});
};

const clearButton = document.querySelector('button.clear')
clearButton.addEventListener('click', () => {
    createCanvas(16);
});

slider.oninput = function() {
    sliderOutput.textContent = `Grid size: ${this.value} x ${this.value}`;
    slider.value=this.value;
    createCanvas(slider.value);
};
function randomColor(){
    activeColor="#" + Math.floor(Math.random()*16777215).toString(16);
    return activeColor;
}

createCanvas(16);

const rainbow = document.querySelector('.rainbow');
let rainbowMode = false;

rainbow.addEventListener('click', () => {
    if(rainbowMode) {
        rainbowMode = false;
        rainbow.classList.remove('pressed');
        activeColor = myColor.value;
        return;
    };
    rainbowMode = true;
    rainbow.classList.add('pressed');
});

const myColor = document.getElementById('myColor');
myColor.addEventListener('input', () => {
    activeColor = myColor.value;
});