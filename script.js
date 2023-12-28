let music = new Audio("sound.mp3");
let gamemusic = new Audio("gameover.mp3");
let button = document.querySelector('.button')

let turn = "X";
let gameover = false;

const changeturn = () => {
  return turn === "X" ? "0" : "X";
};

function checkwin() {
  let boxtext = document.querySelectorAll(".boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach(function (elem) {
    if (
      (boxtext[elem[0]].innerText === boxtext[elem[1]].innerText) &&
      (boxtext[elem[1]].innerText === boxtext[elem[2]].innerText) &&
      (boxtext[elem[0]].innerText !== "")
    ) {
      document.querySelector(".info").innerText =
        boxtext[elem[0]].innerText + " won";
        gameover = true;
        setTimeout(function(){
          gamemusic.play();
          document.body.style.backgroundImage = "url('6k2.gif')"; 
        },1000)
    }
  });
}

let boxes = document.querySelectorAll(".box");
boxes.forEach(function (element) {
  let boxtext = element.querySelector(".boxtext");

  element.addEventListener("click", function () {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeturn();
      music.play();
      checkwin();
      if (! gameover) {
        document.querySelector(".info").textContent = "Turn for " + turn;
      }
    }
  });
});
button.addEventListener('click',function(){
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach(function(e){
    e.innerText = ""
  }) 
  turn = "X"
  gameover = false; 
  document.querySelector(".info").textContent = "Turn for " + turn;
  document.body.style.backgroundImage = ""; 
  
})