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
    var texto_fala=window.speechSynthesis;
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
        document.getElementById("resultgestName").innerHTML=results[0].label;
        Previsao1=results[0].label;
        fala();
        if(Previsao1=="joia"){
            document.getElementById("update_emoji").innerHTML="&#128077";
        }
        if(Previsao1=="paz"){
            document.getElementById("update_emoji").innerHTML="&#9996;";
        }
        if(Previsao1=="tranquilo"){
            document.getElementById("update_emoji").innerHTML="&#129305;";
        }
    }
    
}
