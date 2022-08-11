Webcam.set({
    width:350,
    height:300,
    image_format : 'png' , 
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>'
});
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.js',modelLoaded);