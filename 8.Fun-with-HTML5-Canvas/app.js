const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.strokeStyle = `hsl(255, 100%, 50%)`;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function lineDraw(e){
    if( ! isDrawing ) {return;}
    
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY); //starting point
    ctx.lineTo(e.offsetX, e.offsetY); //ending point 

    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    if( hue > 360){
        hue = 0;
    }

    hue++;

    if(ctx.lineWidth > 200){
        ctx.lineWidth = 5;
    }

    ctx.lineWidth = ctx.lineWidth + 0.5 ;
}

canvas.addEventListener('mousedown', (e) => {

    isDrawing = true;
    ctx.lineWidth = 5;

    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', lineDraw);

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);