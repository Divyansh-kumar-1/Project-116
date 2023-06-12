noseX = 0;
noseY = 0;
function preload(){
 Mustache = loadImage("https://i.postimg.cc/FsTrBHCh/m.png");
}
function setup() {
        canvas = createCanvas(500, 500);
        canvas.center();
        Video = createCapture(VIDEO);
        Video.size(300,300);
        Video.hide();

        poseNet = ml5.poseNet(Video, modelLoaded);
        poseNet.on('pose', gotPoses);
}
function draw(){
        image(Video, 0, 0, 300, 300);
        image(Mustache,noseX,noseY,75,50)
}
function gotPoses(results)
{
 if(results.length > 0){
  console.log(results);      
  noseX = results[0].pose.nose.x-35;
  noseY = results[0].pose.nose.y;
 }
}
function modelLoaded(){
        console.log("Model Loaded")
}
function take_photo(){
        save("Mustache_App_filter.png")
}