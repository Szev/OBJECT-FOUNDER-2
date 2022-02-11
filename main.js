status= "";

function setup()
{
    canvas= createCanvas(300, 250);
    canvas.center();

    video= createCapture(VIDEO);
    video.size(300, 250);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 380, 250);
}
function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "status: detecting objects";
}
function modelLoaded()
{
    console.log("modelLoaded");
    status=true;
}