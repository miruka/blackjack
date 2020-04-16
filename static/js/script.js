//Challenge 1:Your Age i n Days
function ageDays() {
  var birthYear = prompt("What Year were you Born");
  var ageInDays = (2010 - birthYear) * 365;

  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + ageInDays + " days");
  h1.setAttribute("id", "ageDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageDays").remove();
}

//Challenge 2: Cat Generator
function generateCat() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-cat-gen");
  //image.src = "http://thecatapi.com/api/get?format=src&type=gif&size=small";
  image.src = "https://cdn2.thecatapi.com/images/as0.jpg";
  div.appendChild(image);
}
//Challenge 3: Rock,paper,scissors
function rpsGame(yourChoice) {
  console.log(yourChoice);

  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randomToRpsInt());
  console.log("Computer Choice: ", botChoice);

  results = decideWinner(humanChoice, botChoice); //{0,1} human won
  console.log(results);

  message = finalMessage(results); //{"message":"You Won",'color':'green'}
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randomToRpsInt() {
  return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied", color: "yellow" };
  } else {
    return { message: "You Won!!!!!!!!!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  //Lets remove all the Images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" + imageDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
  messageDiv.innerHTML = "<h1 style='color:" + finalMessage["color"] + "; font-size: 60px; padding: 30px; '>" + finalMessage["message"] + "</h1";
  botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);

  setTimeout(function () {
    window.location.href = "index.html";
  }, 5000);
}

//Challenge 4: Change color of all buttons

var all_buttons = document.getElementsByTagName("button");
var copyAllButtons = [];

for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value == "red") {
    buttonsRed();
  } else if (buttonThingy.value == "green") {
    buttonsGreen();
  } else if (buttonThingy.value == "reset") {
    buttonsColorReset();
  } else if (buttonThingy.value == "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonsColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning", "btn-info"];
  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);

    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

//How Blalckjack Works
