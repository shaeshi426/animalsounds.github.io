var nofdrums = document.querySelectorAll('.drum').length;
for (var i = 0; i<nofdrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var bu = this.innerHTML;
        makesound(bu);
        btan(bu);
    })
}
function makesound(key) {
    switch (key) {
        case "Tiger":
            var tiger = new Audio("Tiger4.mp3");
            tiger.play();
            break;
        case "Bear":
            var bear = new Audio("ploar.mp3");
            bear.play();
            break;
        case "Wolf":
            var Wolf = new Audio("wolf5.mp3");
            Wolf.play();
            break;
        case "Elephant":
            var elephant = new Audio("elephant1.mp3");
            elephant.play();
            break;       
        case "Boar":
            var boar = new Audio("pig.mp3");
            boar.play();
            break;
        case "Dog":
            var dog = new Audio("chasdog.mp3");
            dog.play();
            break; 
        case "Cat":
            var cat = new Audio("catfight.mp3");
            cat.play();
            break;       
        default:
            break;
    }
}

function btan(activekey){
    var activebut = document.querySelector(".c"+activekey);
    activebut.classList.add("pressed"+activekey);
    setTimeout(function(){
        activebut.classList.remove("pressed" + activekey)
        
    }, 3000);

}