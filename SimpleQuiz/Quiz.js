// Quiz Addin
// IIFE function to limit scope to private.

(function () {

// function constructor to define questions
    var Question = function (question, options, Answer) {
        this.question = question,
            this.options = options,
            this.Answer = Answer

    }

// Display Question
    Question.prototype.DisplayQuestion = function (Score) {
        console.log(this.question);
        for (var i = 0; i < this.options.length; i++) {
            console.log(this.options[i]);
        }


    }

// Check Answer
    Question.prototype.Check = function (ans, score) {
        if (ans == this.Answer) {
            score++;
            console.log("correct" + " Your Score = " + score + "    Press q to quit");
            return score;
        } else {
            console.log(" incorrect " + " Your Score = " + score + " Press q to quit");
            return score;
        }
    }

// Creats the Quiz Questions
    var Quiz = [];
    Quiz.push(new Question('Which if these is a SiFi movie ? ', ['1. Star Was', '2. Solor Was', '3. Tis Was'], 1));
    Quiz.push(new Question('Name of a medical drama with an autistic doctor ?', ['1. House', '2. The Good Doctor', '3. Grays Anatomy'], 2));
    Quiz.push(new Question('Name of a movie about an aquatic humanoid creature ?', ['1. Aqua man', '2.Jaws', '3.The Shape Of Water'], 3));
    Quiz.push(new Question('Who is the Dark Knight in the movie Dark Knight ?', ['1. Cat woman', '2. Lancerlot', '3. Batman'], 3));


// function that randomly selects a question
    function selectaQuestion() {
        var score = 0;
        do {
            var QuestionNo = Math.floor(Math.random() * Quiz.length);
            Quiz[QuestionNo].DisplayQuestion();
            var response = prompt("Please Enter A number ? ");
            score = Quiz[QuestionNo].Check(response, score);
        } while (response != 'q');

        console.log("Your Final Score is :" + score);

    }

    selectaQuestion();

})();
