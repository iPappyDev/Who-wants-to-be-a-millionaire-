let questionBank = [
    {
        question : 'What has a neck but no head?',
        option : ['Pen','AirPod','A bottle','Pebbles'],
        answer : 'A bottle'
    },
    {
        question : 'What is the coldest country in the world?',
        option : ['Vietnam','Russia','Chili','Canada'],
        answer : 'Chili'
    },
    {
        question : 'What bird can lift the most weight?',
        option : ['Eagle','A crane','Hawk','All of the above'],
        answer : 'A crane'
    },
    {
        question : 'Why did the woman run around her bed at night?',
        option : ['kills bacteria in the body','To catch up on her sleep','To catch warm','Horny'],
        answer : 'To catch up on her sleep'
    },
    {
        question : 'Which player scored the fastest hat-trick in the Premier League?',
        option : ['Harry Kane', 'Sadio Mane', 'Michael Carrick', 'Scott Mc'],
        answer : 'Sadio Mane'
    },
    {
        question : 'If the vice president were to die, who is supposed to be president?',
        option : ['President adviser', 'Senate president', 'The President', 'None of the above'],
        answer : 'The President'
    },
    {
        question: 'What goes up as soon as the rain comes down?',
        option: ['Clutch','An umbrella','Cloud','Cap'],
        answer: 'An umbrella'
    },
    {
        question: 'The more you take, the more you leave behind. What am I?',
        option: ['Legprints','Handprints','Footprints','Fingerprints'],
        answer: 'Footprints'
    },
    {
        question: 'How many animals did Moses take into the ark?',
        option: ['4','7','None','10'],
        answer: 'None'
    },
    {
        question: 'What has three feet but can’t walk?',
        option: ['Mopping Stick','Tree Root','A yardstick','None'],
        answer: 'A yardstick'
    },
    {
        question: 'If two’s company and three’s a crowd, what do four and five make?',
        option: ['Family','Nine','House','Market'],
        answer: 'Nine'
    },
    {
        question: 'What travels the world while stuck in one spot?',
        option: ['All of the above','Letter','A stamp','Signature'],
        answer: 'A stamp'
    },
    {
        question: 'Which room has no walls?',
        option: ['Root','A Mushroom','Stem','All of the above'],
        answer: 'A Mushroom'
    },
    {
        question: 'What has four eyes but can’t see?',
        option: ['Owl','Dart','Mississippi','Plate'],
        answer: 'Mississippi'
    },
    {
        question: 'Where is an ocean with no water?',
        option: ['Road','Control','A map','All of the above'],
        answer: 'A map'
    },
    {
        question: 'How can a door be not a door?',
        option: ['Locked','Sealed','Jammed','Closed'],
        answer: 'When it’s a jar'
    },
    {
        question: 'I have one head, one foot, and four legs. What am I?',
        option: ['CHair','bed','Table','All of the above'],
        answer: ''
    },
    {
        question: 'What has one eye but can’t see anything at all?',
        option: ['Broom','Thread','A needle','Mice'],
        answer: 'A needle'
    },
    {
        question: 'What kind of tree can you carry in your hand?',
        option: ['Leave','A palm','Paper','None of the above'],
        answer: 'A palm'
    },
    {
        question: 'How many times can you subtract 10 from 100?',
        option: ['Ten times','Once','Twice','Five times'],
        answer: 'Once'
    },
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