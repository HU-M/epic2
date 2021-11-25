 image1 ="";
image2 ="";
image3 = "";
image4 = "";
image5 = "";
status = "";

function preload(){
image1 = loadImage("Fridge.jpg");
image2 = loadImage("Heater.jpg");
image3 = loadImage("Oven.jpg");
image4 = loadImage("Rice Cooker.jpg");
image5 = loadImage("Tv.jpg");
 }

 function setup() {
     canvas = createCanvas(380, 380);
     canvas.center();
     objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 }

 function modelLoaded() {
     console.log("Model Loaded")
     status = true;
     objectDetector.detect(video, gotResult);
 }
 function gotResult() {
     
 }