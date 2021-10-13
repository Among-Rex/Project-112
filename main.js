prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

    camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ML5 Version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9XHBMDWAE/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The first prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "Hello") {
            document.getElementById("update_emoji").innerHTML = "&#9995;&#127997;";
        }
        if (results[0].label == "Bad") {
            document.getElementById("update_emoji").innerHTML = "&#128078;&#127997;";
        }
        if (results[0].label == "Good") {
            document.getElementById("update_emoji").innerHTML = "&#128077;&#127997;";
        }
        if (results[0].label == "Perfect") {
            document.getElementById("update_emoji").innerHTML = "&#128076;&#127997;";
        }
        if (results[0].label == "Peace/Victory") {
            document.getElementById("update_emoji").innerHTML = "&#9996;&#127997;";
        }

        if (results[1].label == "Hello") {
            document.getElementById("update_emoji").innerHTML = "&#9995;&#127997;";
        }
        if (results[1].label == "Bad") {
            document.getElementById("update_emoji").innerHTML = "&#128078;&#127997;";
        }
        if (results[1].label == "Good") {
            document.getElementById("update_emoji").innerHTML = "&#128077;&#127997;";
        }
        if (results[1].label == "Perfect") {
            document.getElementById("update_emoji").innerHTML = "&#128076;&#127997;";
        }
        if (results[1].label == "Peace/Victory") {
            document.getElementById("update_emoji").innerHTML = "&#9996;&#127997;";
        }
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    utterThis.rate = 0.75;
    synth.speak(utterThis);
}