var RText = window.webkitSpeechRecognition;
var Reconhecimento = new RText();
var TeBox = document.getElementById("caixa-de-texto");

function XIS() {
    TeBox.innerHTML = "";
    Reconhecimento.start();

}
Reconhecimento.onresult = function (E) {
    var con =E.results[0][0].transcript;
    TeBox.innerHTML = con;
    if(con == "X"){
        Tom();
    }

  
}
function Tom() {
    var voz = window.speechSynthesis;
    frase = "Sua selfie será tirada em 5 segundos";
    var fale = new SpeechSynthesisUtterance(frase);
    voz.speak(fale);
    Webcam.attach(Camera);
    setTimeout(function () {

        foto();
        save();
    },5000);
}
Camera = document.getElementById("camera");
Webcam.set({width: 360,height: 250,image_format:"jpeg",jpeg_quality: 90});

function foto() {
    Webcam.snap(function(Id) {
    document.getElementById("foto").innerHTML = "<img id = 'selfie' src = '"+ Id + "'>";
    })
}
function save() {
    link = document.getElementById("link");
    AiAiAiAiAiaiaiai = document.getElementById("selfie").src;
    link.href = AiAiAiAiAiaiaiai;
    link.click();
    console.log(AiAiAiAiAiaiaiai);
}