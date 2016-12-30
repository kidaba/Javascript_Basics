//  Random Number Challenge
function getRandomNumber (lower, upper) {
    return Math.floor(Math.random() * ( upper - lower + 1 )) + lower;
}
console.log( getRandomNumber(3, 10) );
console.log( getRandomNumber(6, 18) );
console.log( getRandomNumber(9, 50) );
console.log( getRandomNumber(30, 100) );
console.log( getRandomNumber(334, 1670) );




//  Giving information to functions
function calcArea (length, width, unit) {
    var result = length * width;
    return result + " " + unit;
}
console.log( calcArea(12, 3, 'cm') );
console.log( calcArea(34, 6, 'cm') );
console.log( calcArea(14, 45, 'cm') );
console.log( calcArea(2, 3, 'cm') );
console.log( calcArea(6, 9, 'cm') );




//  Quiz Program Challenge
alert('Hello Welcome to Quiz program');
var score = 0;
var correctQuestion = 0;
var wrongQuestions = 0;
var questionNumber = 5;
var questionCounter = '[ ' + questionNumber + ' Questions left ' + ' ]';
var question = prompt("What programming language that's also a snake " + questionCounter);
    if ( question.toUpperCase() === 'PYTHON' ) {
        score += 1; 
        correctQuestion += 1;
    } else {
        wrongQuestions += 1;
    }
questionNumber -= 1;
questionCounter = '[ ' + questionNumber + ' Questions left ' + ' ]';
question = prompt('Short form (Hypertext Markup Language) ' + questionCounter);
    if ( question.toUpperCase() === 'HTML' ) {
        score += 1;
        correctQuestion += 1;
    } else {
        wrongQuestions += 1;
    }
questionNumber -= 1;
questionCounter = '[ ' + questionNumber + ' Questions left ' + ' ]';
question = prompt('Short form (Cascading Style Sheet) ' + questionCounter);
    if ( question.toUpperCase() === 'CSS' ) {
        score += 1;
        correctQuestion += 1;
    } else {
        wrongQuestions += 1;
    }
questionNumber -= 1;
questionCounter = '[ ' + questionNumber + ' Questions left ' + ' ]';
question = prompt('Most popular CSS framework ' + questionCounter);
    if ( question.toUpperCase() === 'BOOTSTRAP' ) {
        score += 1;
        correctQuestion += 1;
    } else {
        wrongQuestions += 1;
    }
questionNumber -= 1;
questionCounter = '[ ' + questionNumber + ' Question left ' + ' ]';
question = prompt('Best language for Web interactivity ' + questionCounter);
    if ( question.toUpperCase() === 'JAVASCRIPT' ) {
        score += 1;
        correctQuestion += 1;
    } else {
        wrongQuestions += 1;
    }
if ( score === 5 ) {
    alert('Score: ' + score + '\nCorrect Questions: ' + correctQuestion + '\nWrong Questions: ' + wrongQuestions + '\nGold crown awarded.');
} else if ( score === 4 ) {
    alert('Score: ' + score + '\nCorrect Questions: ' + correctQuestion + '\nWrong Questions: ' + wrongQuestions + '\nSilver crown awarded.');
} else if ( score === 3 ) {
    alert('Score: ' + score + '\nCorrect Questions: ' + correctQuestion + '\nWrong Questions: ' + wrongQuestions + '\nDiamond crown awarded.');
} else {
    alert('Score: ' + score + '\nCorrect Questions: ' + correctQuestion + '\nWrong Questions: ' + wrongQuestions);
}




//  Number guessing game
var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt('Guess a number from 1 to 10');
if ( parseInt(guess) === randomNumber ) {
    alert("Bravo, you've got it right.");
} else {
    alert("Sorry, the number was " + randomNumber);
}




//  Quiz Program
alert('Hello Welcome to Quiz program');
var answer = prompt('What programming language is similar to snake?');
if ( answer.toUpperCase() === 'PYTHON' ) {
    alert("Bravo, that's right.");
} else {
    alert("Sorry, that's wrong.");
}




//  Random Number Challenge 
alert("Hello Welcome to Roll a dice game");
var userRequest = prompt("Type last number in a range");
userRequest = parseInt(userRequest);
var randomNumber = Math.floor(Math.random() * userRequest) + 1;
alert("Your lucky number is " + randomNumber);
alert("Welcome Back");




//  Random Number Generator
var rollDie = Math.floor(Math.random() * 100) + 1;
alert("You're lucky number is " + rollDie);




//  Madlib Story Maker Program
document.write("<h2>Hello Welcome to Madlib Story maker program</h2>");
var questions = 3;
var questionsLeft = '[ ' + questions +' Questions left ' + ']';
var noun = prompt("Type a noun " + questionsLeft);
questions -= 1;
questionsLeft = '[ ' + questions +' Questions left ' + ']';
var verb = prompt("Type a verb " + questionsLeft);
questions -= 1;
questionsLeft = '[ ' + questions +' Question left ' + ']';
var adjective = prompt("Type an adjective " + questionsLeft);
document.write(noun + " wrote " + verb + " about a " + adjective + " it worth checking out.");