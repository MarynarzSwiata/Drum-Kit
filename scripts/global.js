var btn = document.getElementsByClassName("drum");
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){
        var key = this.innerHTML;   // przyjmuje wartość odczytaną z html
        makeSound(key);  // 2. construktor funkcji wysyła parametr naciśniętego obrazka do funkcji (WYSYŁA ZNAK)
        buttonAnimation(key);
    })
}

// jak chcemy przekazać go do innej funkcji to musimy uzyc zmiennej  np. function(event)
document.addEventListener("keypress", function(event) {
    makeSound(event.key); // 2. constructor funkcji wysyła naciśnięty przycisk klawiatury do funkcji makeSound (WYSYŁA ZNAK)
    buttonAnimation(event.key);
})

function makeSound (key) { //1. funkcja odczytyje wysłany parametr z construktora i wykonuje polecenia (ODCZYTUJE ZNAK)
    if (key === "w" || key === "W") {
        new Audio('media/sounds/tom-1.mp3').play();
    } else if (key === "s" || key === "S") {
        new Audio('media/sounds/tom-2.mp3').play();
    } else if (key === "a" || key === "A") {
        new Audio('media/sounds/tom-3.mp3').play();
    } else if (key === "d" || key === "D") {
        new Audio('media/sounds/tom-4.mp3').play();
    } else if (key === "j" || key === "J") {
        new Audio('media/sounds/snare.mp3').play();
    } else if (key === "k" || key === "K") {
        new Audio('media/sounds/crash.mp3').play();
    } else if (key === "l" || key === "L") {
        new Audio('media/sounds/kick-bass.mp3').play();
    }
}


function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() { 
        activeButton.classList.remove("pressed"); },
        150);
}