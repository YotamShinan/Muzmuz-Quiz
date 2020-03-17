'use strict'

var gQuests = []
var gCurrQuestIdx = 0;
var gCorrectAnswers = 0;
var gGameOn = false;

var gQuestions = [
    'What is that thing on Muzmuz\'s head?',
    'Why is Muzmuz upset?',
    'What is Shira doing there?',
    'Who\'s that girl?' 
];

var gAnswers = [
    ['Hair..?', 'Some lettuce'],
    ['He thought it was water', 'Bibi'],
    ['DJing', 'Talking to outer-space'],
    ['La La La La La La La La La La', 'Female Muzmuz']
];

function init() {
    gQuests = [];
    gCurrQuestIdx = 0;
    gCorrectAnswers = 0;
    createQuests(gAnswers);
    console.log(gQuests); 
}

function startGame(elBtn) {
    gGameOn = true;
    elBtn.style.display = ('none');
    nextQuestion()
}

function createQuests(answers) {
    for (var i = 0; i < answers.length; i++) {
        var quest = {
            id: i + 1,
            opts: answers[i],
            correctOptIdx: 1
        }
        gQuests.push(quest);
    }
}

function checkAnswer(elBtn) {
    var chosenAnswer = elBtn.innerText 
    var correctAnswerIdx = gQuests[gCurrQuestIdx].correctOptIdx;
    if (gQuests[gCurrQuestIdx].opts[correctAnswerIdx] === chosenAnswer) {
        gCurrQuestIdx++;
        gCorrectAnswers++;
        checkVictory();
        nextQuestion();
    } else {
        alert('פחחחחח ממש, אבל ממש לא נכון! יא כלום יא חסר תועלת יא פות')
    }
}

function nextQuestion() {
    renderQuest(gCurrQuestIdx);
}

function checkVictory() {
    if (gCorrectAnswers === 4) {
        gGameOn = false;
        var elMsg = document.querySelector('.msg');
        elMsg.innerText = 'WALLAK YOUUUU';

        gQuests = [];
        gCurrQuestIdx = 0;
        gCorrectAnswers = 0;
        setTimeout(startGame, 3000);

    } else return;
}

function playAgain() {

    gCurrQuestIdx = 0;
    gCorrectAnswers = 0;


    elMsg.innerText = 'You know him so well :)'
    elBtn.style.display = 'block';
    elBtn.style.left = '530px';
    elBtn.innerText = 'Wanna go again?';
    
}


function renderQuest(currQuest) {
    var question = gQuestions[currQuest];
    var pic = `<img src="img\/${gQuests[currQuest].id}.jpg"></img>`;
    var answer0 = gQuests[currQuest].opts[0];
    var answer1 = gQuests[currQuest].opts[1];
    
    var elPic = document.querySelector('.pic');
    var elQuest = document.querySelector('.msg');
    var elAnswer0 = document.querySelector('.button-answer0')
    var elAnswer1 = document.querySelector('.button-answer1')

    elPic.innerHTML = pic;
    elQuest.innerText = question; 
    elAnswer0.innerText = answer0; 
    elAnswer1.innerText = answer1; 
}

