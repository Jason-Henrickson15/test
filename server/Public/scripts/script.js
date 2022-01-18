$(document).ready(onReady);

function onReady(){
    console.log("JQuery loaded!")
    $("#clickMe").on('click',gotcha);
}


function gotcha(){
    let image = new Image();
    image.src = '/images/fingerCircle.png'
    let audio = new Audio('/sounds/laughing.mp3');
    console.log('empty')
    $("#container").empty();
    $("#container").append(image)
    audio.play();
}