// window.onload = function() {
	// heading = document.createElement("h1");
	// heading_text = document.createTextNode("Dobrodosli u najbolji kviz na svetu");
	// heading.appendChild(heading_text);
	// document.body.appendChild(heading);
	
	// //heading_text.style.textAlign = "center";
// }

//JSON - pitanja
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

var usersJSON =[];
var usersCounter = 0;
var questionCounter = 1;
var score = 0;
var correctAnswer = questionsJSON.quiz["q" + questionCounter].answer;

function showRules() {
	document.getElementById("registration").style.display = "none";
	gameRules = document.createElement("div");
	gameRules.setAttribute("id", "rules");
	gameRules.setAttribute ("class", "container text-center");
	document.body.appendChild(gameRules);

	gameRulesHTML = '<div class="row"><div class="col-md-4 col-sm-4"></div><div class="col-md-4 col-sm-4">Pravila igre </div><div class="col-md-4 col-sm-4"></div></div>';
	gameRulesHTML += '<div class="row">';
	gameRulesHTML += '<div class="col-md-12 col-sm-12">';
	gameRulesHTML += '<p> Kviz ima 10 pitanja. </p>';
	gameRulesHTML += '<p> Mogu se pojaviti pitanja sa ponuđenim odgovorima, a neka mogu podrazumevati unos sa tastature. </p>';
    gameRulesHTML += '<p> Za svako pitanje igrač ima 20 sekundi da odgovori. Postoji tajmer koji će Igraču odbrojavati vreme.'
                        + 'Ukoliko igrač odgovori na pitanje u predviđenom roku, prikazuje mu se tačan odgovor,'
                        +  'kao i status da li je njegov odgovor tačan. Nakon toga se učitava sledeće pitanje.</p>';
    gameRulesHTML += '<p> Ukoliko igrač ne odgovori u predviđenom intervalu na pitanje, učitava se naredno i '
                        + 'podrazumeva se da je dati odgovor netačan.</p>';
    gameRulesHTML += '<p>Igrač može da preskoči pitanje, ali ne i da se vrati na preskočeno pitanje.</p>';
    gameRulesHTML += '<p> Igrač može da odustane od igre u svakom trenutku. Rezultat se čuva. </p>';
    gameRulesHTML += '<p> Na kraju igre, igrač dobija informaciju o svom učinku, odnosno broju osvojenih poena.</p>';
    gameRulesHTML += '<p> Ukoliko je igrač razumeo pravila igre, igru može pokrenuti klikom na dugme \'Pokreni kviz\'. </p>';
    gameRulesHTML += '<input type="submit" value="Pokreni kviz" class="btn btn-secondary" onclick="startQuiz()"></b>         ';
	gameRulesHTML += '<input type="submit" value="Odustani" class="btn btn-secondary" onclick="leave()"></b>';
	gameRulesHTML += '</div></div>'
	
	gameRules.innerHTML = gameRulesHTML;
}

function leave() {
	document.getElementById("registration").style.display = "block";
	document.getElementById("rules").style.display = "none";
}

var startQuizQuestions;

function startQuiz() {
	document.getElementById("rules").style.display = "none";
	startQuizQuestions = document.createElement("div");
	startQuizQuestions.setAttribute("id", "questions");
	startQuizQuestionsHTML = '<p style="font-size: x-large; font-weight: bolder; text-align: center;" id="quesNum"></p>'
            + '<input readonly type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" style="font-weight: bold; font-size: x-large; text-align: center;" id="ques">'
            + '<input type="button" id="op1" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="op2" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="op3" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="op4" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="preskoci" value="Preskoci" class="btn btn-secondary btn-lg btn-block" onclick="skipQuestion()">';
			+ '<input type="button" id="preskoci" value="Zavrsi igru" class="btn btn-secondary btn-lg btn-block" onclick="showResult()">';
			
	startQuizQuestions.innerHTML = startQuizQuestionsHTML;	
	document.body.appendChild(startQuizQuestions);

	showQuestion();			
}

function showQuestion() {
	if(questionCounter > 10) {
		usersID = usersCounter + 1 + '. igrac';
		usersJSON[usersCounter++] = {'username': usersID, 'score': score};
		alert("Kraj igre! Rezultat: " + score);
		document.getElementById("questions").innetHTML = "";
		startQuizQuestions.innerHTML = '<input type="button" id="preskoci" value="Prikazi rezultat" class="btn btn-secondary btn-lg btn-block" onclick="showResult()">';
		score = 0;
		questionCounter = 1;
	}
	else {
		correctAnswer = questionsJSON.quiz["q" + questionCounter].answer;
		
		document.getElementById("op1").style.removeProperty("background-color");
        document.getElementById("op2").style.removeProperty("background-color");
        document.getElementById("op3").style.removeProperty("background-color");
        document.getElementById("op4").style.removeProperty("background-color");
		
		document.getElementById("quesNum").innerHTML = questionCounter + ". PITANJE:"
        document.getElementById("ques").value = questionsJSON.quiz["q" + questionCounter].question;
        document.getElementById("op1").value = questionsJSON.quiz["q" + questionCounter].answers[0];
        document.getElementById("op2").value = questionsJSON.quiz["q" + questionCounter].answers[1];
        document.getElementById("op3").value = questionsJSON.quiz["q" + questionCounter].answers[2];
        document.getElementById("op4").value = questionsJSON.quiz["q" + questionCounter].answers[3];
		
		++questionCounter;
		
	}
}

function skipQuestion() {
	//++questionCounter;
	alert("Niste odgovorili na pitanje. Netacan odgovor. Rezultat: " + score);
	showQuestion();
}

function checkAnswer(clicked) {
    clickedButtonValue = document.getElementById(clicked).value;
    if(clickedButtonValue == correctAnswer)
        {
            score += 1;
            alert("TACAN ODGOVOR. REZULTAT: " + score);
            document.getElementById(clicked).style.backgroundColor = "green";
            //timeout = window.setTimeout(ucitajNarednoPitanje(), 4000);
        }
    else {
        alert("NETACAN ODGOVOR. REZULTAT: " + score);
        document.getElementById(clicked).style.backgroundColor = "red";
        //timeout = window.setTimeout(ucitajNarednoPitanje(), 4000);
    }    
	
	showQuestion();
}

function showResult() {
	console.log("Usao sam");
	document.getElementById("questions").style.display = "none";
	result = document.createElement("div");
	result.setAttribute("id", "results");
	console.log(usersJSON);
	
	resultHTML = '<table class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Score</th></tr></thead><tbody>'
	
	for(i = 0; i < usersCounter; i++) {
		resultHTML += '<tr><th scope="row">' +  (i + 1) + '</th><td>' + usersJSON[i].username + '</td><td>' + usersJSON[i].score + '</td></tr>';
	}
	
	resultHTML += '</tbody></table>';
	resultHTML += '<input type="button" id="nazad" value="Nazad" class="btn btn-secondary btn-lg btn-block" onclick="startOver()">';
	//console.log(resultHTML);
				
	result.innerHTML = resultHTML;		
	document.body.appendChild(result);

}

function startOver() {
	myobj = document.getElementById("rules");
	myobj.remove();
	myobj = document.getElementById("questions");
	myobj.remove();
	myobj = document.getElementById("results");
	myobj.remove();

	document.getElementById("registration").style.display = "block";
}
