var nosex=0;
var noseY=0;
function preload(){
        clown_nose=loadImage('https://i.postimg.cc/NFWy5J1N/moustache-PNG44.png');
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function take_snapshot(){
    save('funny_clown.png');

}
function draw()
{
image(video,0,0,300,300);
image(clown_nose,nosex-20,noseY+10,60,15);
}
function modelLoaded(){
    console.log('PoseNet Is Initializied');
}
function gotPoses(result)
{console.log("entered");
    if(result.length>0)
    {
        console.log(result);
        nosex= result[0].pose.nose.x;
        noseY= result[0].pose.nose.y;+
        console.log("nose x ="+result[0].pose.nose.x);
    }
}