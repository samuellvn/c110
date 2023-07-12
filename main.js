//https://teachablemachine.withgoogle.com/models/6VCE8eYb0/
var Previsao1="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

var camera=document.getElementById("webcam");

Webcam.attach(camera);

function tirar_foto(){
    Webcam.snap(function(dataURI) {
        document.getElementById("result").innerHTML="<img id='foto' src='"+dataURI+"'>";
    });
}

console.log("ml5 version:", ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6VCE8eYb0/model.json", model_loaded);

function model_loaded(){
    console.log("modelo carregado")
}
function fala(){
    var texto_fala=window.SpeechSynthesis;
    var dado_da_fala1="a primeira previsão é "+Previsao1;
    var fala_convertida=new SpeechSynthesisUtterance(dado_da_fala1);
    texto_fala.speak(fala_convertida);
}
function prever_o_gesto(){
    var imagem=document.getElementById("foto");
    classifier.classify(imagem, got_results);
}
function got_results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML=results[0].label;
    }
}