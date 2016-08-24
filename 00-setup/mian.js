var gl;

initGL();
draw();

function initGL(){
    var canvas = document.getElementById("canvas");
    gl = canvas.getContext("webgl");

    gl.viewport(0,0,canvas.width, canvas.height);
    gl.clearColor(1,0,0,1); //red, blue, green, alpha
}

function draw(){
    gl.clear(gl.COLOR_BUFFER_BIT); //Paint the color to the canvas
}