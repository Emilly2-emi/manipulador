leftwristX=0;
rightwristX=0;
dife=0;

function setup(){
    video =createCapture(VIDEO);

    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("poseNet foi inicializado");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
    
        leftwristX=results[0].pose.leftWrist.x;
        
        rightwristX=results[0].pose.rightWrist.x;

        dife=floor(leftwristX-rightwristX);
    }
}

function draw(){
    background('#D6EAF8');
    textSize(dife);
    fill('#7FFFD4');
    text("Emilly",200,200);
}

