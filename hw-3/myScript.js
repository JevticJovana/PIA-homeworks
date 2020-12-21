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
var index = -1;
var lastScore = -1;
var usernameFORM = "";
var usersCounter = 0;
var questionCounter = 1;
var score = 0;
var correctAnswer = questionsJSON.quiz["q" + questionCounter].answer;


// function showRegistration() {
	
	// // registrationForm = document.createElement("div");
	// // registrationForm.setAttribute("id", "registration");
	// // registrationForm.setAttribute ("class", "row");
	// // document.body.appendChild(registrationForm);
	
	// // registrationFormHTML = '<form style="width: 70%; margin: auto;" onsubmit="return showRules()">'
							// // + '<fieldset class="form-group"><legend><b><i>Kontakt podaci</i></b></legend>'
							// // + '<div class="form-group"><label for="username" name="username">Username: </label>'
							// // + '<input id="username" class="form-control" type="text" name="username" placeholder="Petar Petrović" maxlength="30" required></div>'
                            // // + '<div class="form-group"><label for="email" name="email">E-mail:</label>'
							// // + '<input id="email" class="form-control"  type="email" name="email" placeholder="example@gmail.com" name="email" maxlength="20"></div>'
							// // + '</fieldset>'
							// // + '<div class="form-group text-center">'
							// // + '<input type="submit" value="Započni igru!" class="btn btn-outline-success btn-lg">'
							// // + '<input type="reset" value="Poništi unos!" class="btn btn-danger btn-sm">'
							// // + '</div></form>';
							
	// // registrationForm.innerHTML = registrationFormHTML;
	// usernameFORM = document.getElementById("username").value;
	
	// console.log(usernameFORM);
	
// }


function clearData() {
	document.getElementById("username").value = "";
	document.getElementById("email").value = "";
}

function showRules() {
	
	usernameFORM = document.getElementById("username").value;
	
	if(usernameFORM == "") {
		alert("Morate uneti korisničko ime!");
		document.getElementById("registration").style.display = "block";
		return false;
	}
	else {
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
}

function leave() {
	childNode = document.getElementById("rules");
	document.body.removeChild(childNode);
	
	document.getElementById("registration").style.display = "block";
	document.getElementById("username").value = "";
	document.getElementById("email").value = "";
}

var startQuizQuestions;

function startQuiz() {
	childNode = document.getElementById("rules");
	document.body.removeChild(childNode);
	
	startQuizQuestions = document.createElement("div");
	startQuizQuestions.setAttribute("id", "questions");
	startQuizQuestionsHTML = '<div id="countdown"></div>'
			+'<p style="font-size: x-large; font-weight: bolder; text-align: center;" id="quesNum"></p>'
            + '<input readonly type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" style="font-weight: bold; font-size: x-large; text-align: center;" id="ques">'
            + '<input type="button" id="op1" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="op2" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="op3" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="op4" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
            + '<input type="button" id="preskoci" value="Preskoci" class="btn btn-secondary btn-lg btn-block" onclick="skipQuestion()">'
			+ '<input type="button" id="preskociKraj" value="Zavrsi igru" class="btn btn-secondary btn-lg btn-block" onclick="showResult()">'
			+ '<div id="currScore"></div>';
			
	startQuizQuestions.innerHTML = startQuizQuestionsHTML;	
	document.body.appendChild(startQuizQuestions);
	
	startQuizQuestions = document.createElement("div");
	startQuizQuestions.setAttribute("id", "textQuest");
			
	startQuizQuestionsHTML = '<div id="countdownSpec"></div>'
				+ '<p style="font-size: x-large; font-weight: bolder; text-align: center;" id="quesNumSpec"></p>'
				+ '<input readonly type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" style="font-weight: bold; font-size: x-large; text-align: center;" id="quesSpec">'
				+ '<input id="textInput" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" '
				+			'name=textInput" maxlength="30">'
				+ '<input type="button" id="textAns" value="Odgovori" class="btn btn-primary btn-lg btn-block" onclick="checkAnswerText(this.id)">'
				+ '<input type="button" id="preskociSpec" value="Preskoci" class="btn btn-secondary btn-lg btn-block" onclick="skipQuestion()">'
				+ '<input type="button" id="preskociSpecKraj" value="Zavrsi igru" class="btn btn-secondary btn-lg btn-block" onclick="showResult()">'
				+ '<div id="currScoreSpec"></div>';
			
	startQuizQuestions.innerHTML = startQuizQuestionsHTML;
	document.body.appendChild(startQuizQuestions);
	
	startQuizQuestions.style.display = "none";

	for(i = 0; i < usersCounter; i++)
	{
		if(usernameFORM == usersJSON[i].username)
		{
			index = i;
			lastScore = usersJSON[i].score;
			break;
		}
	}
	showQuestion();			
}

var time = 20;
var timeDelay = -1;
var correctButtonID = "";

function showQuestion() {
	usersJSON[usersCounter] = {'username': usernameFORM, 'score': score};
	time = 20;

	if(questionCounter > 10) {
		score = 0;
		alert("Kraj igre!");
		document.getElementById("questions").innetHTML = "";
		document.getElementById("textQuest").innetHTML = "";

		showResult();
	}
	else if((questionCounter == 5) || (questionCounter == 9)) {
			document.getElementById("preskociSpecKraj").style.display = "block";
			document.getElementById("preskociSpec").style.display = "block";
			document.getElementById("currScoreSpec").innerHTML = "Rezultat: " + score;
			document.getElementById("textAns").style.removeProperty("background-color");
			document.getElementById("textInput").value = "";
			document.getElementById("questions").style.display = "none";
			document.getElementById("textQuest").style.display = "block";
			correctAnswer = questionsJSON.quiz["q" + questionCounter].answer;
			document.getElementById("quesNumSpec").innerHTML = questionCounter + ". PITANJE:"
			document.getElementById("quesSpec").value = questionsJSON.quiz["q" + questionCounter].question;
		
			++questionCounter;
	}
	
	else {
		correctAnswer = questionsJSON.quiz["q" + questionCounter].answer;
		
		document.getElementById("questions").style.display = "block";
		document.getElementById("textQuest").style.display = "none";
		document.getElementById("preskociKraj").style.display = "block";
		document.getElementById("preskoci").style.display = "block";

		document.getElementById("currScore").innerHTML = "Rezultat: " + score;
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
		
		if(document.getElementById("op1").value == correctAnswer) correctButtonID = "op1";
		if(document.getElementById("op2").value == correctAnswer) correctButtonID = "op2";
		if(document.getElementById("op3").value == correctAnswer) correctButtonID = "op3";
		if(document.getElementById("op4").value == correctAnswer) correctButtonID = "op4";
		
		++questionCounter;
		
	}
}


function skipQuestion() {
	timeDelay = 5;
	
	document.getElementById("textAns").style.backgroundColor = "red";
	document.getElementById("textInput").value = "Tacan odgovor je: " + correctAnswer;
	if(correctButtonID == "op1") {
		document.getElementById("op1").style.backgroundColor = "green";
		document.getElementById("op2").style.backgroundColor = "red";
		document.getElementById("op3").style.backgroundColor = "red";
		document.getElementById("op4").style.backgroundColor = "red";
	}
	else if(correctButtonID == "op2") {
		document.getElementById("op1").style.backgroundColor = "red";
		document.getElementById("op2").style.backgroundColor = "green";
		document.getElementById("op3").style.backgroundColor = "red";
		document.getElementById("op4").style.backgroundColor = "red";
	}
	else if(correctButtonID == "op3") {
		document.getElementById("op1").style.backgroundColor = "red";
		document.getElementById("op2").style.backgroundColor = "red";
		document.getElementById("op3").style.backgroundColor = "green";
		document.getElementById("op4").style.backgroundColor = "red";
	}
	else {
		document.getElementById("op1").style.backgroundColor = "red";
		document.getElementById("op2").style.backgroundColor = "red";
		document.getElementById("op3").style.backgroundColor = "red";
		document.getElementById("op4").style.backgroundColor = "green";
	}

	document.getElementById("preskociKraj").style.display = "none";
	document.getElementById("preskoci").style.display = "none";
	document.getElementById("preskociSpecKraj").style.display = "none";
	document.getElementById("preskociSpec").style.display = "none";
	
}

function checkAnswer(clicked) {
    if(document.getElementById(clicked).value == correctAnswer)
    {
		score += 1;
		timeDelay = 5;
		document.getElementById(clicked).style.backgroundColor = "green";
		document.getElementById("preskociKraj").style.display = "none";
		document.getElementById("preskoci").style.display = "none";
    }
    else 
	{
		timeDelay = 5;
		document.getElementById(clicked).style.backgroundColor = "red";
		document.getElementById(correctButtonID).style.backgroundColor = "green";
		document.getElementById("preskociKraj").style.display = "none";
		document.getElementById("preskoci").style.display = "none";
    }    
}

function checkAnswerText(clicked) {
	var answerInput = document.getElementById("textInput").value;
	answerInput = answerInput.toLowerCase();
	correctAnswer = correctAnswer.toLowerCase();

	if(answerInput == correctAnswer) {
		score += 1;
		timeDelay = 5;

		document.getElementById(clicked).style.backgroundColor = "green";
		document.getElementById("preskociSpecKraj").style.display = "none";
		document.getElementById("preskociSpec").style.display = "none";
	}
	else {
		timeDelay = 5;
		document.getElementById("textInput").value = "Tacan odgovor je: " + correctAnswer;
		document.getElementById(clicked).style.backgroundColor = "red";
		document.getElementById("preskociSpecKraj").style.display = "none";
		document.getElementById("preskociSpec").style.display = "none";
    } 
}

function updateCountdown() {
	if(time > 0) {
		time--;
		document.getElementById("countdown").innerHTML = time + "s";
		document.getElementById("countdownSpec").innerHTML = time + "s";
	}

	if (time == 0) {
		clearInterval(time);
		time = -1;
		skipQuestion();
	}
}
$(document).ready(function() { setInterval(updateCountdown, 1000) });

function updateDelay() {
	if(timeDelay > 0) {
		timeDelay--;
		document.getElementById("countdown").innerHTML = timeDelay + "s";
		document.getElementById("countdownSpec").innerHTML = timeDelay + "s";
	}

	if(timeDelay == 0){
		clearInterval(timeDelay);
		timeDelay = -1;
		showQuestion();
	}
}
$(document).ready(function() { setInterval(updateDelay, 1000) });

function showResult() {
	childNode = document.getElementById("questions");
	document.body.removeChild(childNode);
	
	childNode = document.getElementById("textQuest");
	document.body.removeChild(childNode);
	
	result = document.createElement("div");
	result.setAttribute("id", "results");
	
	resultHTML = '<table class="table table-striped"><thead><tr><th scope="col">#</th><th scope="col">Username</th><th scope="col">Score</th></tr></thead><tbody>'

	if(index == -1)
	{
		usersCounter++;
	}
	
	else if(lastScore < usersJSON[usersCounter].score)
	{
		usersJSON[index].score = usersJSON[usersCounter].score;
		usersJSON.pop();
	}
	else {
		usersJSON.pop();
	}
	
	index = -1;
	lastScore = -1;
	questionCounter = 1;
	score = 0;
	
	usersJSON.sort(function (a,b){
		return a.score - b.score;
	});
	
	usersJSON.reverse();	//ne zaboravi da se cuvaju samo 10 korisnika
	
	for(i = 0; i < usersCounter; i++) {
		resultHTML += '<tr><th scope="row">' +  (i + 1) + '</th><td>' + usersJSON[i].username + '</td><td>' + usersJSON[i].score + '</td></tr>';
	}
	
	resultHTML += '</tbody></table>';
	resultHTML += '<input type="button" id="nazad" value="Nazad" class="btn btn-secondary btn-lg btn-block" onclick="startOver()">';
				
	result.innerHTML = resultHTML;		
	document.body.appendChild(result);

}


function startOver() {
	childNode = document.getElementById("results");
	document.body.removeChild(childNode);
	
	document.getElementById("registration").style.display = "block";
	document.getElementById("username").value = "";
	document.getElementById("email").value = ""
	usernameFORM = "";
}
