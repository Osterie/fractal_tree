const button = document.getElementById('button')


button.addEventListener('click', () =>{
    button_handler(input_field)
})


function button_handler(input) {
    const input_verdi = input.value
    output.innerHtml = 'output'
    //do stuff
}



let canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// ctx.lineWidth = 15;

function name(params) {
    
}



window.onload = winInit;
function winInit() {

    draw_fractal(xstart, ystart, length, angle, iterations)
    //do stuff
}




//iterations?
const xstart = canvas.width/2
const ystart = canvas.height - 50;
const length = 120
const angle = 45
const iterations = 10

function draw_fractal(xstart, ystart, length, angle, iterations){
    ctx.beginPath();
    ctx.save()

    var num = Math.round(4*length*length-80*length+500);
    // ctx.strokeStyle = `hsl(${length*2+200}, ${50}%, ${50}%)`;

    // ctx.strokeStyle = `hsl(${fits(255, iterations)}, ${75}%, ${50}%)`;
    ctx.strokeStyle = `rgb(${fits(255, length/50)}, ${fits(255, iterations)}, ${0})`;
 

    // console.log(fits(255, length))
    
    
    ctx.lineWidth = length/10

    ctx.translate(xstart, ystart)
    ctx.rotate(angle * Math.PI / 180)
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length)
    
    ctx.stroke();

    if (iterations <= 0){
        
        ctx.restore();
        return;
    }
    draw_fractal(0, -length, length*0.8, -angle, iterations-1)
    draw_fractal(0, -length, length*0.8, +angle, iterations-1)

    ctx.restore();
}