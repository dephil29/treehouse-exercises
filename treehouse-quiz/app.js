//Create Question
var questions = [
  new Question("Who was not the first President of the United States?", [ "George Washington", "Eric Phillips", ], "Eric Phillips"),
  new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
[ "42", "Eric Phillips"], "Eric Phillips")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
