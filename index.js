let buttons = document.querySelectorAll(".drum");

for (i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        let buttonInner = this.innerHTML;
        makeSound(buttonInner);
        buttonAnimation(buttonInner);

    });
}
document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key) {
    let file = 'sounds/';
    switch (key) {
        case "w":
            file += 'tom-1.mp3';
            break;
        case "a":
            file += 'tom-2.mp3';
            break;
        case "s":
            file += 'tom-3.mp3';
            break;
        case "d":
            file += 'tom-4.mp3';
            break;
        case "j":
            file += 'snare.mp3';
            break;
        case "k":
            file += 'crash.mp3';
            break;
        case "l":
            file += 'kick-bass.mp3';
            break;
        default:
            console.log(buttonInner);
    }
    let audio = new Audio(file);
    audio.play();
}

function buttonAnimation(key) {
    let button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout(() => 
        button.classList.remove("pressed"), 100);
}
