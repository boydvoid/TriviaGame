// TODO need to append questions to #questions
// TODO need to append guesses to #first-guesses and #second guesses

$(document).ready(function() {
  var questions = [
    {
      question: "What did Ygritte say to Jon Snow?",
      guess1: "You know everything, Jon Snow.",
      answer: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow."
    },
    {
      number: 1,
      question: "What did Ygritte say to Jon Snow?",
      guess1: "You know everything, Jon Snow.",
      answer: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow."
    },
    {
      number: 2,
      question: "What did Ygritte say to Jon Snow?",
      guess1: "You know everything, Jon Snow.",
      answer: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow."
    },
    {
      number: 3,
      question: "What did Ygritte say to Jon Snow?",
      guess1: "You know everything, Jon Snow.",
      answer: "You know nothing, Jon Snow.",
      guess3: "How do you not know that, Jon Snow.",
      guess4: "You're an idiot, Jon Snow."
    }
  ];

  appendQuestion();
  // functions --------------------
  function appendQuestion() {
    let index = Math.floor(Math.random() * questions.length);
    let questionsDiv = $("#questions");
    let firstGuesses = $("#first-guesses");
    let secondGuesses = $("#second-guesses");
    let appendedDiv = $("<h2>");
    let button1 = $("<button>");
    let button2 = $("<button>");
    let button3 = $("<button>");
    let button4 = $("<button>");

    //append the question
    appendedDiv.attr("id", questions[index].number);
    appendedDiv.text(questions[index].question);
    questionsDiv.append(appendedDiv);

    //append the guesses
    button1.attr("id", "guess1");
    button2.attr("id", "guess2");
    button3.attr("id", "guess3");
    button4.attr("id", "guess4");
    button1.text(questions[index].guess1);
    button2.text(questions[index].answer);
    button3.text(questions[index].guess3);
    button4.text(questions[index].guess4);
    
    firstGuesses.append(button1);
    firstGuesses.append(button2);
    secondGuesses.append(button3);
    secondGuesses.append(button4);
  }
});
