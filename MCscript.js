var c = document.getElementById("can")
var ctx = c.getContext("2d")
var radius = c.height / 2;
var pointsIn = 0, numberOfPoints=0;
var PIaprox=0;
var p = document.getElementById("PI")
var i = document.getElementById("iteracje")
var speed = 50
var slider = document.getElementById("slider")
var speedOutput = document.getElementById("speed")

function start(){
    speedOutput.innerText = speed
    ctx.beginPath()
    ctx.arc(radius, radius, radius, 0, 2*Math.PI)
    ctx.stroke()
    ctx.closePath()
}

function generatePoint(){
    return {'x': Math.random()* c.height,
            'y': Math.random()* c.width}
}

function hitOrMiss(point){
    numberOfPoints++;
    let c;
    if(radius * radius >= (radius-point.x)*(radius-point.x) + (radius-point.y)*(radius-point.y)){
        pointsIn++;
        c='#FE5209'
    }else{
        c='#0048FF'
    }
    PIaprox = 4*(pointsIn / numberOfPoints);
    p.innerText = PIaprox.toFixed(8)
    i.innerText = numberOfPoints
    return c
}

function play(){
    let p = generatePoint()
    ctx.beginPath()
    ctx.arc(p.x, p.y, 2, 0, 2*Math.PI)
    ctx.fillStyle = hitOrMiss(p)
    ctx.fill()
    ctx.closePath()
}
start()

var interval = setInterval(play, 1000 / speed)

slider.oninput = function() {
    speed=this.value
    speedOutput.innerText = speed 
    clearInterval(interval)
    interval = setInterval(play, 1000 / speed)
}


