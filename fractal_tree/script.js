const create_tree_button = document.getElementById('create_tree')

const get_hue_expression = document.getElementById("hue_expression").value
const get_saturation_expression = document.getElementById("saturation_expression").value
const get_lightness_expression = document.getElementById("lightness_expression").value

const get_xstart = parseInt(document.getElementById("xstart").value)
const get_ystart = parseInt(document.getElementById("ystart").value)

const get_start_length = parseInt(document.getElementById("length").value)
const get_length_change_expression = document.getElementById("length_change_expression").value

const get_angle = parseInt(document.getElementById("angle").value)
const get_iterations = parseInt(document.getElementById("iterations").value)

create_tree_button.addEventListener('click', () =>{

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const get_hue_expression = document.getElementById("hue_expression").value
    const get_saturation_expression = document.getElementById("saturation_expression").value
    const get_lightness_expression = document.getElementById("lightness_expression").value
    
    const get_xstart = parseInt(document.getElementById("xstart").value)
    const get_ystart = parseInt(document.getElementById("ystart").value)

    const get_start_length = parseInt(document.getElementById("length").value)
    const get_length_change_expression = document.getElementById("length_change_expression").value

    const get_angle = parseInt(document.getElementById("angle").value)
    const get_iterations = parseInt(document.getElementById("iterations").value)


    draw_fractal(get_hue_expression, get_saturation_expression, get_lightness_expression, get_xstart, get_ystart, get_start_length, get_length_change_expression, get_angle, get_iterations)
})


let canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

window.onload = winInit;
function winInit() {
    draw_fractal(get_hue_expression, get_saturation_expression, get_lightness_expression, get_xstart, get_ystart, get_start_length, get_length_change_expression, get_angle, get_iterations)
}

function draw_fractal(hue_expression, saturation_expression, lightness_expression, xstart, ystart, length, length_change_expression, angle, iterations){

    ctx.beginPath();
    ctx.save()

    hue = Function( `return ${hue_expression.replace(/L/g, length)}` )();
    saturation = Math.abs( ((100 + Function(`return ${saturation_expression.replace(/L/g, length)}`)()) % 200) - 100 );
    lightness = Math.abs( ((100 + Function(`return ${lightness_expression.replace(/L/g, length)}`)()) % 200) - 100 );

    ctx.strokeStyle = `hsl( ${hue}, ${saturation}%, ${lightness}%)`;

    
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

    draw_fractal(hue_expression, saturation_expression, lightness_expression, 0, -length, Function( `return ${length_change_expression.replace(/L/g, length)}` )(), length_change_expression, -angle, iterations-1)
    draw_fractal(hue_expression, saturation_expression, lightness_expression, 0, -length, Function( `return ${length_change_expression.replace(/L/g, length)}` )(), length_change_expression, +angle, iterations-1)
    ctx.restore();
}
