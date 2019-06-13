$("#startGame").on("click", function(event) {
    $("#startGame").hide();
});

$("body").on("click", ".reset-button", function(event) {
    var correctNum = 0;
    var incorrectNum = 0;
    var notAnsweredNum = 0;
    var counter = 0;
    var time = 0;
    var timerCounter = 20;
    resetGame();
});

var questionsArray = [
    "How many NBA Championships have the Utah Jazz Won?",
    "How many teams has LeBron James played for?",
    "How many Superbowls have the New York Giants won?"
    
];
var answersArray = [
    ["2", "4", "1", "0"],
    ["3", "2", "5", "4"],
    ["6", "5", "1", "4"]
];
var correctArray = [
    "D. 0",
    "A. 3",
    "D. 4"
];

var correctNum = 0;
var incorrectNum = 0;
var notAnsweredNum = 0;
var counter = 0;
var time = 0;
var timerCounter = 30;

function clock() {
    time = setInterval(thirty, 1000);

    function thirty() {
        if (timerCounter === 0) {
            clearInterval(time);
            questionTimeout();
        }
        if (timerCounter > 0) {
            timerCounter--;
        }
        $(".timer").html(timerCounter);
    }
}

