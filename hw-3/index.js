var questionsJSON = {
    "quiz": {
        "q1": {
            "question": "Koliko sezona ima serija Game of Thrones?",
            "answers": [
                "3 sezone",
                "4 sezone",
                "6 sezona",
                "8 sezona"
            ],
            "answer": "8 sezona"
        },

        "q2": { 
            "question": "Ko je napisao knjigu Majstor i Margarita?",
            "answers": [
                "Lav Nikolajevič Tolstoj",
                "Fjodor Mihajlovič Dostojevski",
                "Mihail Bulgakov",
                "Evgenije Onjegin"
            ],
            "answer": "Mihail Bulgakov"
        },

        "q3": {
            "question": "Ko se smatra osnivačem teorije evolucije?",
            "answers": [
                "Isak Njutn",
                "Sigmund Frojd",
                "Čarls Darvin",
                "Fridrih Niče"
            ],
            "answer": "Čarls Darvin"
        },

        "q4": {
            "question": "Kako se naziva kanal koji spaja Atlantik i Pacifik?",
            "answers": [
                "Latinski",
                "Bermudski",
                "Panamski",
                "Južnoamerički"
            ],
            "answer": "Panamski"
        }, 

        "q5": {
            "question": "Katalonija je deo?",
            "answers": [
                "Portugala",
                "Maroka",
                "Španije",
                "Tunisa"
            ],
            "answer": "Španije"
        },

        "q6": {
            "question": "Had je bog?",
            "answers": [
                "Rata",
                "Vode",
                "Ljubavi",
                "Podzemnog sveta"
            ],
            "answer": "Podzemnog sveta"
        },

        "q7": {
            "question": "Na kom kontinentu se nalazi država Mali?",
            "answers": [
                "Afrika",
                "Južna Amerika",
                "Azija",
                "Evropa"
            ],
            "answer": "Afrika"
        },

        "q8": {
            "question": "Čuveni muzej Ermitaž nalazi se u?",
            "answers": [
                "Sankt Peterburgu",
                "Parizu",
                "Kanu",
                "Berlinu"
            ],
            "answer": "Sankt Peterburgu"
        },

        "q9": {
            "question": "Ksenofobija je strah od?",
            "answers": [
                "Pasa",
                "Krvi",
                "Stranaca",
                "Otvorenog prozora"
            ],
            "answer": "Stranaca"
        },

        "q10": {
            "question": "Šta je talmud?",
            "answers": [
                "Jevrejska sveta knjiga",
                "Provincija u Egiptu",
                "Oblast Bliskog istoka bogata naftom",
                "Košarkaški klub iz Tel Aviva"
            ],
            "answer": "Jevrejska sveta knjiga"
        }
    }
}

var questionCounter = 0;
var score = 0;

function ucitajPitanja(questionCounter)
{
    if(questionCounter > 9)
    {
        alert("Kraj igre!");
        document.getElementById("q").style.display = "none";
    }
    else{
        correctAnswer =  questionsJSON.quiz["q" + (questionCounter+1)].answer;

        document.getElementById("op1").style.removeProperty("background-color");
        document.getElementById("op2").style.removeProperty("background-color");
        document.getElementById("op3").style.removeProperty("background-color");
        document.getElementById("op4").style.removeProperty("background-color");

        document.getElementById("quesNum").innerHTML = (questionCounter+1) + ". PITANJE:"
        document.getElementById("ques").value = questionsJSON.quiz["q" + (questionCounter+1)].question;
        document.getElementById("op1").value = questionsJSON.quiz["q" + (questionCounter+1)].answers[0];
        document.getElementById("op2").value = questionsJSON.quiz["q" + (questionCounter+1)].answers[1];
        document.getElementById("op3").value = questionsJSON.quiz["q" + (questionCounter+1)].answers[2];
        document.getElementById("op4").value = questionsJSON.quiz["q" + (questionCounter+1)].answers[3];

        var timeLeft = 20;
        var downloadTimer = setInterval(function() {
            if(timeLeft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "Kraj!!!";
            }
            else
            {
                document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
            }
            timeLeft -= 1;
        }, 1000)


        ++questionCounter;
    }
}

ucitajPitanja(questionCounter);



function preskoci() {
    ++questionCounter;
    //correctAnswer =  questionsJSON.quiz["q" + (questionCounter+1)].answer;
    alert("NISTE ODGOVORILI NA PITANJE. NETACAN ODGOVOR. REZULTAT: " + score);
    ucitajPitanja(questionCounter);
}

function pokreniKviz() {
    window.open("pitanja.html");
    window.close(this);

    ucitajPitanja(questionCounter);
};

// function ucitajNarednoPitanje() {
//     document.getElementById("op1").style.removeProperty("background-color");
//     document.getElementById("op2").style.removeProperty("background-color");
//     document.getElementById("op3").style.removeProperty("background-color");
//     document.getElementById("op4").style.removeProperty("background-color");

//     ucitajPitanja(++questionCounter);
// }

function proveriOdgovor(clicked) {
    clickedButtonValue = document.getElementById(clicked).value;
    if(clickedButtonValue == correctAnswer)
        {
            score += 1;
            //alert("TACAN ODGOVOR. REZULTAT: " + score);
            document.getElementById(clicked).style.backgroundColor = "green";
            //timeout = window.setTimeout(ucitajNarednoPitanje(), 4000);
            ucitajPitanja(++questionCounter);
        }
    else {
        //alert("NETACAN ODGOVOR. REZULTAT: " + score);
        document.getElementById(clicked).style.backgroundColor = "red";
        //timeout = window.setTimeout(ucitajNarednoPitanje(), 4000);
        ucitajPitanja(++questionCounter);
    }    
}

// console.log(questionsJSON.quiz);
// console.log(questionsJSON.quiz.q1);
// console.log(questionsJSON.quiz.q1.answers);
// console.log(questionsJSON.quiz.q1.answers[0]);
//console.log(questionsJSON.quiz["q" + (questionCounter+1)]);
