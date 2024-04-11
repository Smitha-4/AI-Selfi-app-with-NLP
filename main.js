var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

   if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
    }

}
function say(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").innerHTML;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your picture in 5 seconds. Get ready!";
    alert(speak_data);

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 350,
    image_format: 'jpeg',
    jpeg_quality: 100
});

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id="selfie">';
    });
}


function save() {
    a = document.getElementById("link");
    img_src = document.getElementById("selfie").src;
    a.href = img_src;
    a.clcik();
}
