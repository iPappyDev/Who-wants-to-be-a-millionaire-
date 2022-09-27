let questionBank = [
    {
        question : 'Entomology is the science that studies',
        option : ['Behavior of human beings','Insects','The origin and history ','The formation of rocks'],
        answer : 'Insects'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Australia'],
        answer : 'Africa'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','Physiology or Medicine','Literature and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Exposure to sunlight helps a person improve his health because',
        option : ['kills bacteria in the body','resistance power increases','skin cells stimulated tan','convert UV rays to Vit D'],
        answer : 'convert UV rays to Vit D'
    }
    // {
    //     question : 'Which player scored the fastest hat-trick in the Premier League?',
    //     option : ['Sadio Mane', 'Michael Carrick', 'Harry Kane', 'Scott Mc'],
    //     answer : 'Sadio Mane'
    // }
]
let amount = document.getElementById('amountEarned')
let question = document.getElementById('question');
let quizContainer = document.getElementById('dashboard');
let scorecard = document.getElementById('scorecard')
let option0 = document.getElementById('optionA');
let option1 = document.getElementById('optionB');
let option2 = document.getElementById('optionC');
let option3 = document.getElementById('optionD');

let next = document.querySelector('.next');
let points = document.getElementById('amountGained');
let gibagbos = document.querySelectorAll('.gbagbos');
let i=0;
let score = 5000;
let wrongSong = new Audio('sound_wrong.mp3')
let rightSong = new Audio('sound_right.mp3')
var mySong = new Audio('sound_background.mp3')
let deleteTwo = new Audio('50-50_sound.mp3')
let closingSong = new Audio('Closing Theme_sound.mp3')
let audienceSong = new Audio('Ask The Audience_sound.mp3')
let friendSong = new Audio('Phone-A-Friend_sound.mp3')
let timeUpSong = new Audio('Time_Up_sound.mp3')

const greatBody=()=>{
    console.log("my people")
}
function displayQuestion(){
    for(let a = 0; a < gibagbos.length; a++){
        gibagbos[a].style.background = '#2c0e8a';
    }
    question.innerHTML = questionBank[i].question;
    optionA.innerHTML = questionBank[i].option[0];
    optionB.innerHTML = questionBank[i].option[1];
    optionC.innerHTML = questionBank[i].option[2];
    optionD.innerHTML = questionBank[i].option[3];
    stat.innerHTML = (i+1);
    scoreAmount.innerHTML +=  `
        <tr>
            <td> ${score}</td>
        </tr>
        `
    mySong.play()
}

function calcScore(f){
    if(f.innerHTML === questionBank[i].answer && score > questionBank.length){
        score += 5000;
        document.getElementById(f.id).style.background = 'limegreen';
        rightSong.play()
        // scoreboard.innerHTML = points.innerHTML = score + '/' + questionBank.length;
    }
    else{
        wrongSong.play()
        document.getElementById(f.id).style.background = 'tomato';
        window.location.href = "gameover.html"
    }
    setTimeout(nextQuestion,2000);
}

function nextQuestion(){
    if(i < questionBank.length - 1){
        i += 1
        displayQuestion();
    }
    else{
        newScreen.innerHTML =`<div id="totalEarn">
        <h2>Congratulations you have earned $ ${score}</h2> <br> <button onclick="homePage()">HOME</button>
        </div>`;
        // dashboard.style.display = 'none'
        // scoreboard.style.display = "block"
    }
}

function homePage(){
    window.location.href = 'index.html'
}

function checkAnswer(){
    let answerBank = document.getElementById('answerBank');
    let answers = document.getElementById('answers');
    // answerBank.style.display = 'block';
    scoreboard.style.display = 'block';
    for(let a = 0; a < questionBank.length; a++){
        let list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list)
    }
}

displayQuestion();

const removeTwo = () => {
    deleteTwo.play()
    optionA.innerHTML = ""
    optionD.innerHTML = ""
    document.getElementById("x").src="50-50-used.PNG"
    var removeTwo = document.getElementById("x")
    removeTwo.onclick = ""
}
const askAround = () => {
    document.getElementById("y").src="ask-the-audience-used.PNG"
    var askAround = document.getElementById("y")
    askAround.onclick = ""
}
const phoneFriend = () => {
    document.getElementById("z").src="phone-a-friend-used.PNG"
    var phoneFriend = document.getElementById("z")
    phoneFriend.onclick = ""
}
function startGame(){
    window.location.href = ("game.html")
}
function backToGame(){
    window.location.href = ("game.html")
}