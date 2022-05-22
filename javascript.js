const canvas = document.querySelector('.canvas');

createCanvas(10)

function createCanvas(size=10){
    const vw=Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const divSize = (vw*6/10 - (size-1))/size;
    
    if (canvas.hasChildNodes){
        while (canvas.firstChild) {
            canvas.removeChild(canvas.lastChild);
        };
    };
    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++){
            const newDiv=document.createElement('div');
            newDiv.classList.add('canvasElement');
            
            newDiv.setAttribute("style",`width:${divSize}px; height:${divSize}px`);
            canvas.appendChild(newDiv);
        }
    };
}

window.addEventListener('resize', () => {createCanvas(10)},true);