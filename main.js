var fala_texto=window.webkitSpeechRecognition;
var reconhecimento=new fala_texto();
var conteudo;
var imagem;

function reconhece_voz(){
    reconhecimento.start();
}

reconhecimento.onresult=function(evento){
    console.log(evento);
    conteudo=evento.results[0][0].transcript.toLowerCase();
    console.log(conteudo);
    if(conteudo=="tire minha foto"){
        speak1();
    }
}

function speak1(){
    var texto_fala=window.speechSynthesis;
    Webcam.attach(camera);
    var fala_dado="tirando sua selfie em 5 segundos";
    var fala_convertida=new SpeechSynthesisUtterance(fala_dado);
    texto_fala.speak(fala_convertida);

    setTimeout(function(){
        imagem=""
    }, 5000);
}
