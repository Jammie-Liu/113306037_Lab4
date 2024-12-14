function playSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

function effect(currentKey) {
    var activeButton = document.querySelector("." + currentKey); /*document.querySelector("") 可get css中的一個元素(只會get一個);
                                                                      	document.getElementById("")只能get有id的(只會get一個)*/

    if (activeButton) {
        activeButton.classList.add("pressed");
		setTimeout(function(){activeButton.classList.remove("pressed");}, 100); //setTimeout(要執行的method,多久後(ms)執行)
    }
}

var drumButtons = document.querySelectorAll(".drum"); //document.querySelectorAll("")和document.querySelector("")很像，但可get多個符合的
for (var i = 0; i < drumButtons.length; i++) {    //它會回傳所有符合的(多個)，所以要用for迴圈來取
    drumButtons[i].addEventListener("click", function () {
        playSound(this.innerHTML); //this.innerHTML代表HTML裡的各個button，概念Java的this.有點像
        effect(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {  /*Keyboard Event:
														  "keydown"-某個鍵被按下時
														  "keypress"-某個字母鍵/數字鍵被按下時
														  "keyup"-放開某個鍵時(和keydown相反)*/
    playSound(event.key); //key是event這個object的屬性 會給被按下的鍵的值
    effect(event.key);
});
