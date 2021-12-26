function preload(){
}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(90, 170);
    video = createCapture(VIDEO);
    video.hide()
}

function draw()
{
    image(video, 150, 150, 300, 200);

    fill(0, 255, 0);
    circle(60, 60, 60);
    circle(580, 60, 60);
    circle(60, 420, 60);
    circle(580, 420, 60);

    fill(0, 0, 255);
    rect(45, 90, 30, 300);
    rect(90, 45, 460, 30);
    rect(565, 90, 30, 300);
    rect(90, 405, 460, 30);
}