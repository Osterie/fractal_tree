const create_tree_button = document.getElementById('create_tree')

const get_xstart = parseInt(document.getElementById("xstart").value)
const get_ystart = parseInt(document.getElementById("ystart").value)

const get_start_length = parseInt(document.getElementById("length").value)
const get_length_change_expression = document.getElementById("length_change_expression").value

const get_angle = parseInt(document.getElementById("angle").value)
const get_iterations = parseInt(document.getElementById("iterations").value)

create_tree_button.addEventListener('click', () =>{

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const get_xstart = parseInt(document.getElementById("xstart").value)
    const get_ystart = parseInt(document.getElementById("ystart").value)

    const get_start_length = parseInt(document.getElementById("length").value)
    const get_length_change_expression = document.getElementById("length_change_expression").value

    const get_angle = parseInt(document.getElementById("angle").value)
    const get_iterations = parseInt(document.getElementById("iterations").value)


    draw_fractal(get_xstart, get_ystart, get_start_length, get_length_change_expression, get_angle, get_iterations)
})


let canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

window.onload = winInit;
function winInit() {
    draw_fractal(get_xstart, get_ystart, get_start_length, get_length_change_expression, get_angle, get_iterations)
}




//iterations?


function draw_fractal(xstart, ystart, length, length_change_expression, angle, iterations){

    ctx.beginPath();
    ctx.save()

    // var num = Math.round(4*length*length-80*length+500);
    // ctx.strokeStyle = `hsl(${length*2+200}, ${50}%, ${50}%)`;
    // ctx.strokeStyle = `hsl(${fits(255, iterations)}, ${75}%, ${50}%)`;

    ctx.strokeStyle = `rgb(${fits(255, length/50)}, ${fits(255, iterations)}, ${0})`;

    
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

    draw_fractal(0, -length, Function( `return ${length_change_expression.replace(/L/g, length)}` )(), length_change_expression, -angle, iterations-1)
    draw_fractal(0, -length, Function( `return ${length_change_expression.replace(/L/g, length)}` )(), length_change_expression, +angle, iterations-1)

    ctx.restore();
}