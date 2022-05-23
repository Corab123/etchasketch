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
        canvasElement.classList.add('canvasColor');
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


createCanvas(16);