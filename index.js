//Detecting button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        console.log(this);
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keypress
document.addEventListener("keypress",function(event){
    //.key gives key value pressed
    makeSound(event.key);
    // console.log(event);
    buttonAnimation(event.key);
});

function makeSound(key){
 
    switch (key) {
        case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            break;
        case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            break;
        case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            break;
        case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            break;
        case "j":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            break;
        case "k":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
            break;
        case "l":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
            break;

        default:
                console.log(buttonInnerHTML);
            break;
}
}

function buttonAnimation(currentkey)
{
    //class .w class .a .......
    var activeButton=document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    
    setTimeout( function (){
        activeButton.classList.remove("pressed");
    }, 100); //0.1sec
}