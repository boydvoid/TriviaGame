// TODO need to append questions to #questions
// TODO need to append guesses to #first-guesses and #second guesses

$(document).ready(function() {
  var questions = [
    {
      number: 0,
      question: "What did Ygritte say to Jon Snow?",
      guess1: "You know everything, Jon Snow.",
      guess2: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow.",
      answer: "You know nothing, Jon Snow.",
      answered: false
    },
    {
      number: 1,
      question: "2",
      guess1: "You know everything, Jon Snow.",
      guess2: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow.",
      answer: "You know nothing, Jon Snow."
    },
    {
      number: 2,
      question: "3?",
      guess1: "You know everything, Jon Snow.",
      guess2: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow.",
      answer: "You know nothing, Jon Snow."
    },
    {
      number: 3,
      question: "4?",
      guess1: "You know everything, Jon Snow.",
      guess2: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow.",
      answer: "You know nothing, Jon Snow."
    }
  ];
  let questionsDiv = $("#questions");
  let guesses = $("#first-guesses");
  let domTimer = $("#timer");
  let appendedDiv = $("<h2>");
  let button1 = $("<button>");
  let button2 = $("<button>");
  let button3 = $("<button>");
  let button4 = $("<button>");
  let startBtn = $("<button>");
  let timer = 0;
  let index = 0;
  let win = 0;
  let lose = 0;
  let gameStarted = false;
  var setTimer = setInterval(function() {
    if (gameStarted === true) {
      if (timer !== 0) {
        timer--;
        domTimer.text("TIME: " + timer);
      } else {
        if (index >= questions.length) {
          lose++;
          clearInterval(setTimer);
          $(questionsDiv).empty();
          $(guesses).empty();
          appendedDiv.text("Correct: " + win + " Incorrect: " + lose);
          $(questionsDiv).append(appendedDiv);
        } else {
          lose++;
          console.log("clear");
          timer = 4;
          $(questionsDiv).empty();
          $(guesses).empty();
          appendedDiv.text("The correct answer was: " + questions[index - 1].answer);
          $(questionsDiv).append(appendedDiv);
          setTimeout(appendGame, 4000);
          setTimer;
        }
      }
    }
  }, 1000);
  gameLoad();
  // functions --------------------
  function gameLoad() {
    startBtn.attr("id", "start-button");
    startBtn.attr("class", "btn btn-secondary");
    startBtn.text("START GAME");
    $("#questions").append(startBtn);
  }

  //start button onclick
  $(document).on("click", "#start-button", function() {
    startBtn.attr("class", "hidden");
    appendGame();
  });

  function appendGame() {
    gameStarted = true;
    $(questionsDiv).empty();
    $(guesses).empty();
    timer = 6;
    //append the question
    appendedDiv.attr("id", questions[index].number);
    appendedDiv.text(questions[index].question);
    questionsDiv.append(appendedDiv);

    //append the guesses
    button1.attr("id", "guess1");
    button2.attr("id", "guess2");
    button3.attr("id", "guess3");
    button4.attr("id", "guess4");
    button1.attr("class", "btn btn-primary guesses");
    button2.attr("class", "btn btn-primary guesses");
    button3.attr("class", "btn btn-primary guesses");
    button4.attr("class", "btn btn-primary guesses");
    button1.text(questions[index].guess1);
    button2.text(questions[index].guess2);
    button3.text(questions[index].guess3);
    button4.text(questions[index].guess4);

    guesses.append(button1);
    guesses.append(button2);
    guesses.append(button3);
    guesses.append(button4);
    index++;
  }

  $(document).on("click", ".guesses", function() {
    let btnText = $(this).text();
    console.log(index, questions.length);
    if (questions[index - 1].answer === btnText) {
      console.log("answer");
      timer = 4;
      win++;
      $(questionsDiv).empty();
      $(guesses).empty();
      appendedDiv.text("Correct!");
      $(questionsDiv).append(appendedDiv);
      setTimeout(appendGame, 4000);
    } else {
      if (index >= questions.length) {
        lose++;
        clearInterval(setTimer);
        $(questionsDiv).empty();
        $(guesses).empty();
        appendedDiv.text("Correct: " + win + " Incorrect: " + lose);
        $(questionsDiv).append(appendedDiv);
      } else {
        timer = 4;
        lose++;
        $(questionsDiv).empty();
        $(guesses).empty();
        appendedDiv.text("The correct answer was: " + questions[index - 1].answer);
        $(questionsDiv).append(appendedDiv);
        setTimeout(appendGame, 4000);
      }
    }
  });
});
