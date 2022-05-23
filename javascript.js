const canvas = document.querySelector('.canvas');


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
    initMouseOver();
    sliderOutput.textContent = `Grid size: ${slider.value} x ${slider.value}`;
};

function newDivSize(size){
    const vw=Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const divSize = (vw*6/10 - (size-1)/2)/size;
    return divSize;
};

window.addEventListener('resize', () => {createCanvas(10)},true);

function initMouseOver() {
    let canvasMouseOver = document.querySelectorAll('.canvasElement');
    canvasMouseOver.forEach((canvasElement) => {
    canvasElement.addEventListener('mouseover', () => {
        if (!rainbowMode) {
            canvasElement.style.backgroundColor = "black";
            return;
        };
        canvasElement.style.backgroundColor = "#" + randomColor();

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
    return Math.floor(Math.random()*16777215).toString(16);
}

createCanvas(16);

const rainbow = document.querySelector('.rainbow');
let rainbowMode = false;

rainbow.addEventListener('click', () => {
    if(rainbowMode) {
        rainbowMode = false;
        rainbow.style.backgroundColor = 'chocolate';
        return;
    }
    rainbowMode = true;
    rainbow.style.backgroundColor = 'red';
});