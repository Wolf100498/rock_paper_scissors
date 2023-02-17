const playerPick = document.querySelector('#playerContainer');
const playerImg = document.querySelector('#player-img');
const compPick = document.querySelector('#computerContainer');
const compImg = document.querySelector('#comp-img');

const resultOfGame = document.querySelector('#result');
const matches = document.querySelector('#matches');
const bestOf = document.querySelector('#bestOf');

const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const fps = document.querySelector('#final-player-score');
const cps = document.querySelector('#final-comp-score');
const df = document.querySelector('#draw-final');
const mf = document.querySelector('#matches-final');

const playAgain = document.querySelector('#play-again');
const resetBtn = document.querySelector('#reset');
const gbtns = document.querySelectorAll('.gbtn');



const tableBody = document.querySelector('#tableBody');

let player;
let computer;
let pScore = 0;
let cScore = 0;
let nMatches = 0;


gbtns.forEach(btn => btn.addEventListener('click', function () {
  player = btn.textContent;
  computerChoice();
  playerPick.textContent = player;
  compPick.textContent = computer;
  let result = winner();
  resultOfGame.textContent = result;
  playerScore.textContent = pScore;
  compScore.textContent = cScore;
  nMatches += 1;
  matches.textContent = nMatches;


  if ((player == "Rock")) {
    playerImg.src = 'img/Rock.png';
  } else if (player == "Paper") {
    playerImg.src = 'img/paper.png';
  } else if (player == "Scissor") {
    playerImg.src = 'img/Scissor.png';
  }

  if (computer == "Rock") {
    compImg.src = 'img/Rock.png';
  } else if (computer == "Paper") {
    compImg.src = 'img/paper.png';
  } else if (computer == "Scissor") {
    compImg.src = 'img/Scissor.png';
  }


  let count = bestOf.textContent;
  // waiting to end the best of n matches
  if (nMatches == count) {
    modal.show();
    const overAllResult = document.querySelector('#best-of-result');

    if (pScore == cScore) {
      overAllResult.textContent = 'Draw, Play Again?';
    } else if (pScore > cScore) {
      overAllResult.textContent = 'Congratulations!!!';
    } else {
      overAllResult.textContent = 'You loose, try again?'
    }



    fps.textContent = pScore;
    cps.textContent = cScore;
    mf.textContent = nMatches;
    df.textContent = Math.abs((pScore + cScore) - nMatches);
  }


  const createRow = document.createElement('tr');
  createRow.innerHTML = `<td>${nMatches}</td><td>${player}</td><td>${computer}</td><td>${result}</td>`
  tableBody.appendChild(createRow);
}))

function computerChoice() {
  const randomNumber = Math.trunc((Math.random() * 3) + 1);

  if (randomNumber == 1) {
    return computer = 'Rock';
  } else if (randomNumber == 2) {
    return computer = 'Paper';
  } else if (randomNumber == 3) {
    return computer = 'Scissor';
  }
}

function winner() {
  if (player == computer) return result = 'Draw';

  if (player == 'Rock' && computer == 'Scissor') {
    pScore += 1;
    return 'You win!';
  }
  else if (player == 'Scissor' && computer == 'Paper') {
    pScore += 1;
    return 'You win!';
  }
  else if (player == 'Paper' && computer == 'Rock') {
    pScore += 1;
    return 'You win!';
  }
  else {
    cScore += 1;
    return 'Computer win';
  }
}

resetBtn.addEventListener('click', reset);
playAgain.addEventListener('click', reset);



const list = document.querySelector('#list');

function reset() {
  modal.close();
  pScore = 0;
  cScore = 0;
  nMatches = 0;
  playerScore.textContent = pScore;
  compScore.textContent = cScore;
  matches.textContent = nMatches;
  playerImg.src = 'img/person.png';
  compImg.src = 'img/comp.png';
  tableBody.innerHTML = '';
}

function openHistory() {
  if(list.style.transform === 'translateX(-75%)'){
    list.style.transform = 'translateX(100%)';
  }else list.style.transform = 'translateX(-75%)'
}



window.onclick = function(event){
  if(!event.target.matches('#history'))
  list.style.transform = 'translateX(100%)'
}