
function drawClock() {
    drawFace2(ctx, radius);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
    drawFace3(ctx, radius);
    
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'White';
    ctx.fill();
    // Draw the edge circle with gradient
    // TODO: (Optional) add a gradient circle
    // Center circle
    // TODO: make the central black circle
}

function drawFace2(ctx, radius){
    var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
    my_gradient.addColorStop(0, "red");
    my_gradient.addColorStop(1, "orange");
    ctx.arc(0,0, radius*1.08, 0, 2*Math.PI);
    ctx.fillStyle = my_gradient;
    ctx.fill();
}

function drawFace3(ctx, radius){
    ctx.beginPath();
    ctx.arc(0, 0, radius/12, 0, 2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    //TODO: Make sure you show all the numbers
    var ang;
    for(var i=0; i <12; i++){
        var num =i+1
        ctx.font = radius*0.15 + "px arial";
        ctx.textBaseline="middle";
        ctx.fillStyle = '#333';
        ctx.textAlign="center";
        ang = num* Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
   }
}

function drawTime(ctx, radius){
    // TODO: Calculate the angles of every hand depending on the time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    drawHand(ctx,	(hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60)), radius*0.5, radius*0.07);
    //minute
    drawHand(ctx, (minute*Math.PI/30) + (second*Math.PI/(30*60)), radius*0.8, radius*0.07);
    // second
    drawHand(ctx, second*Math.PI/30, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}