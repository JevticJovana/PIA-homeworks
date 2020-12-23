var usersJSON = [];
var questionsJSON = [];
var index = -1;
var lastScore = -1;
var usernameFORM = "";
var usersCounter = 0;
var questionCounter = 1;
var score = 0;
var correctAnswer;

var nameFORM;
var emailFORM;
var passFORM;

var time = 20;
var timeDelay = 5;
var correctButtonID = "";
var intervalQuestion;
var intervalDelay;

//localStorage.clear();

function showRegistration() {

	bodyContainer = document.createElement("div");
	bodyContainer.setAttribute("class", "container");
	bodyContainer.setAttribute("id", "bodyContainer");
	document.body.appendChild(bodyContainer);

	registrationForm = document.createElement("div");
	registrationForm.setAttribute("id", "registration");
	registrationForm.setAttribute("class", "row");
	registrationForm.setAttribute("style", "margin:auto;");
	document.getElementById("bodyContainer").appendChild(registrationForm);

	registrationFormHTML = '<div class="col-md-3 col-sm-3"></div><div class="col-md-6 col-md-offset-3 col-sm-6">'
		+ '<h1><i><b>Prijava za kviz opšteg znanja</i></b></h1><hr /><br>'
		+ '<form action="#" name="regForm" id="regForm"><div class="form-group">'
		+ '<label><b><i>Korisničko ime: </b><i></label><input type="text" class="form-control" id="name" placeholder="Name" />'
		+ '<p id="p1"></p></div>'
		+ '<div class="form-group"><label><b><i>E-mail: </b></i></label>'
		+ '<input type="email" class="form-control" id="email" placeholder="me@example.com" />'
		+ '<p id="p2"></p></div><div class="form-group">'
		+ '<label><b><i>Lozinka: </b></i></label>'
		+ '<input type="password" class="form-control" id="password" placeholder="Password" />'
		+ '<p id="p3"></p></div>'
		+ '<div class="form-group"><input type="submit" class="btn btn-primary btn-block" id="submit" value="Prijavi se" />'
		+ '</div></form></div>'

	registrationForm.innerHTML = registrationFormHTML;

	$(document).ready(function () {
		$("#submit").click(function () {
			nameFORM = $("#name").val();
			emailFORM = $("#email").val();
			passFORM = $("#password").val();
			mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			$("#p1").text("");
			$("#p2").text("");
			$("#p3").text("");

			if (nameFORM.length == "") {
				$("#p1").text("Niste uneli korisničko ime");
				$("#name").focus();
				return false;
			}
			else if (!(emailFORM.match(mailFormat))) {
				$("#p2").text("Niste uneli ispravnu e-mail adresu");
				$("#email").focus();
				return false;
			}
			// else if (emailFORM.length == "") {
			// 	$("#p2").text("Niste uneli e-mail adresu");
			// 	$("#email").focus();
			// 	return false;
			// }
			else if (passFORM.length == "") {
				$("#p3").text("Niste uneli lozinku");
				$("#Password").focus();
				return false;
			}
			else {
				$("#regForm").submit(function (event) {

					event.preventDefault()
				});
				showRules();
				return true;
			}

		});
	});
}

function getUsers() {
	jsonObj = localStorage.getItem('users');
	jsonObj = JSON.parse(jsonObj);

	if (jsonObj != undefined) {
		usersJSON = jsonObj;
		usersCounter = usersJSON.length;
	}
}

function loadQuestions() {
	fetch('questions.json')
		.then(function (response) {
			return response.json()
		}).
		then(function (data) {
			questionsJSON = data;
		});
}

function showRules() {
	usernameFORM = nameFORM;

	childNode = document.getElementById("registration");
	document.getElementById("bodyContainer").removeChild(childNode);

	gameRules = document.createElement("div");
	gameRules.setAttribute("id", "rules");
	gameRules.setAttribute("class", "container text-center");
	document.getElementById("bodyContainer").appendChild(gameRules);

	gameRulesHTML = '<div class="row"><div class="col-md-4 col-sm-4"></div><div class="col-md-4 col-sm-4"><br><br><h2>Pravila igre </h2></div><div class="col-md-4 col-sm-4"></div></div>';
	gameRulesHTML += '<div class="row">';
	gameRulesHTML += '<div class="col-md-12 col-sm-12">';
	gameRulesHTML += '<br><br><p id="gameRules"> Kviz ima 10 pitanja.<br>';
	gameRulesHTML += 'Mogu se pojaviti pitanja sa ponuđenim odgovorima, a neka mogu podrazumevati unos sa tastature.<br>';
	gameRulesHTML += 'Za svako pitanje igrač ima 20 sekundi da odgovori. Postoji tajmer koji će Igraču odbrojavati vreme.<br>'
		+ 'Ukoliko igrač odgovori na pitanje u predviđenom roku, prikazuje mu se tačan odgovor,'
		+ 'kao i status da li je njegov odgovor tačan. Nakon toga se učitava sledeće pitanje.<br>';
	gameRulesHTML += 'Ukoliko igrač ne odgovori u predviđenom intervalu na pitanje, učitava se naredno i '
		+ 'podrazumeva se da je dati odgovor netačan.<br>';
	gameRulesHTML += 'Igrač može da preskoči pitanje, ali ne i da se vrati na preskočeno pitanje.<br>';
	gameRulesHTML += 'Igrač može da odustane od igre u svakom trenutku.<br>';
	gameRulesHTML += 'Na kraju igre, igrač dobija informaciju o svom učinku, odnosno broju osvojenih poena.<br>';
	gameRulesHTML += 'Ukoliko je igrač razumeo pravila igre, igru može pokrenuti klikom na dugme \'Pokreni kviz\'. </p>';
	gameRulesHTML += '<b><button type="button" class="btn btn-success" onclick="startQuiz()">Pokreni kviz</button></b>';
	gameRulesHTML += '<b><button type="button" class="btn btn-secondary" onclick="leave()">Odustani</button></b>';
	gameRulesHTML += '</div></div>'

	gameRules.innerHTML = gameRulesHTML;

}

function leave() {
	childNode = document.getElementById("rules");
	document.getElementById("bodyContainer").removeChild(childNode);

	nameFORM = "";
	passFORM = "";
	emailFORM = "";

	showRegistration();
}

function startQuiz() {

	childNode = document.getElementById("rules");
	document.getElementById("bodyContainer").removeChild(childNode);

	startQuizTimer = document.createElement("div");
	startQuizTimer.setAttribute("id", "timer");
	startQuizTimer.setAttribute("class", "container");
	startQuizTimerHTML = '<div class="row"><div class="col-md-6 col-sm-6" id="currScore"><p>Rezultat: </p><p id="score"></p></div><div class="col-sm-6 col-md-6"><p id="questionTimer"></p>'
		+ '<p id="countdown"></p></div></div><div class="row"><div class="col-sm-4 col-sm-4"></div><div class="col-sm-4 col-md-4"><p style="text-align:center;" id="questionNumber"></p></div><div class="col-sm-4 col-sm-4"></div>';

	startQuizTimer.innerHTML = startQuizTimerHTML;
	document.getElementById("bodyContainer").appendChild(startQuizTimer);

	startQuizQuestions = document.createElement("div");
	startQuizQuestions.setAttribute("id", "questions");
	startQuizQuestionsHTML = '<input readonly type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" style="font-weight: bold; font-size: x-large; text-align: center;" id="ques">'
		+ '<input type="button" id="option1" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
		+ '<input type="button" id="option2" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
		+ '<input type="button" id="option3" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
		+ '<input type="button" id="option4" value="" class="btn btn-primary btn-lg btn-block" onclick="checkAnswer(this.id)">'
		+ '<input type="button" id="skipQuestion" value=" Preskoči" class="btn btn-secondary btn-lg btn-block" onclick="skipQuestion()">'
		+ '<input type="button" id="skipAll" value="Završi igru" class="btn btn-secondary btn-lg btn-block" onclick="showResult()">';

	startQuizQuestions.innerHTML = startQuizQuestionsHTML;
	document.getElementById("bodyContainer").appendChild(startQuizQuestions);

	startQuizQuestions = document.createElement("div");
	startQuizQuestions.setAttribute("id", "textQuest");

	startQuizQuestionsHTML = '<input readonly type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" style="font-weight: bold; font-size: x-large; text-align: center;" id="quesText">'
		+ '<input id="textInput" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" '
		+ 'name=textInput" maxlength="30">'
		+ '<input type="button" id="textAns" value="Odgovori" class="btn btn-primary btn-lg btn-block" onclick="checkAnswerText(this.id)">'
		+ '<input type="button" id="skipInputQuestion" value=" Preskoči" class="btn btn-secondary btn-lg btn-block" onclick="skipQuestion()">'
		+ '<input type="button" id="skipInputAll" value="Završi igru" class="btn btn-secondary btn-lg btn-block" onclick="showResult()">';

	startQuizQuestions.innerHTML = startQuizQuestionsHTML;
	document.getElementById("bodyContainer").appendChild(startQuizQuestions);

	for (i = 0; i < usersCounter; i++) {
		if (usernameFORM.toLowerCase() == usersJSON[i].username.toLowerCase()) {
			index = i;
			lastScore = usersJSON[i].score;
			break;
		}
	}

	time = 20;
	$(document).ready(function () {
		showQuestion();
	});
}

function showQuestion() {
	usersJSON[usersCounter] = { 'username': usernameFORM, 'score': score };

	updateCountdown();
	$(document).ready(function () {
		intervalQuestion = setInterval(updateCountdown, 1000);
	});

	if (questionCounter > 10) {
		score = 0;
		alert("Kraj igre!");
		document.getElementById("questions").innetHTML = "";
		document.getElementById("textQuest").innetHTML = "";

		showResult();
	}
	else if ((questionCounter == 5) || (questionCounter == 9)) {
		document.getElementById("skipInputAll").disabled = false;
		document.getElementById("skipInputQuestion").disabled = false;
		document.getElementById("textAns").disabled = false;
		document.getElementById("score").innerHTML = score;
		document.getElementById("textAns").style.removeProperty("background-color");
		document.getElementById("textInput").value = "";
		document.getElementById("questions").style.display = "none";
		document.getElementById("textQuest").style.display = "block";
		correctAnswer = questionsJSON.quiz["q" + questionCounter].answer;
		document.getElementById("questionNumber").innerHTML = questionCounter + ". PITANJE:"
		document.getElementById("quesText").value = questionsJSON["quiz"]["q" + questionCounter].question;

		++questionCounter;
	}

	else {
		correctAnswer = questionsJSON["quiz"]["q" + questionCounter].answer;

		document.getElementById("questions").style.display = "block";
		document.getElementById("textQuest").style.display = "none";
		document.getElementById("skipAll").disabled = false;
		document.getElementById("skipQuestion").disabled = false;

		document.getElementById("score").innerHTML = score;
		document.getElementById("option1").style.removeProperty("background-color");
		document.getElementById("option2").style.removeProperty("background-color");
		document.getElementById("option3").style.removeProperty("background-color");
		document.getElementById("option4").style.removeProperty("background-color");

		document.getElementById("option1").disabled = false;
		document.getElementById("option2").disabled = false;
		document.getElementById("option3").disabled = false;
		document.getElementById("option4").disabled = false;

		document.getElementById("questionNumber").innerHTML = questionCounter + ". PITANJE:"
		document.getElementById("ques").value = questionsJSON["quiz"]["q" + questionCounter].question;
		document.getElementById("option1").value = questionsJSON["quiz"]["q" + questionCounter].answers[0];
		document.getElementById("option2").value = questionsJSON["quiz"]["q" + questionCounter].answers[1];
		document.getElementById("option3").value = questionsJSON["quiz"]["q" + questionCounter].answers[2];
		document.getElementById("option4").value = questionsJSON["quiz"]["q" + questionCounter].answers[3];

		if (document.getElementById("option1").value == correctAnswer) correctButtonID = "option1";
		if (document.getElementById("option2").value == correctAnswer) correctButtonID = "option2";
		if (document.getElementById("option3").value == correctAnswer) correctButtonID = "option3";
		if (document.getElementById("option4").value == correctAnswer) correctButtonID = "option4";

		++questionCounter;
	}
}

function skipQuestion() {
	clearInterval(intervalQuestion);

	updateDelay();
	$(document).ready(function () {
		intervalDelay = setInterval(updateDelay, 1000);
	})

	document.getElementById("textAns").style.backgroundColor = "red";
	document.getElementById("textInput").value = "Tacan odgovor je: " + correctAnswer;
	if (correctButtonID == "option1") {
		document.getElementById("option1").style.backgroundColor = "green";
		document.getElementById("option2").style.backgroundColor = "red";
		document.getElementById("option3").style.backgroundColor = "red";
		document.getElementById("option4").style.backgroundColor = "red";
	}
	else if (correctButtonID == "option2") {
		document.getElementById("option1").style.backgroundColor = "red";
		document.getElementById("option2").style.backgroundColor = "green";
		document.getElementById("option3").style.backgroundColor = "red";
		document.getElementById("option4").style.backgroundColor = "red";
	}
	else if (correctButtonID == "option3") {
		document.getElementById("option1").style.backgroundColor = "red";
		document.getElementById("option2").style.backgroundColor = "red";
		document.getElementById("option3").style.backgroundColor = "green";
		document.getElementById("option4").style.backgroundColor = "red";
	}
	else {
		document.getElementById("option1").style.backgroundColor = "red";
		document.getElementById("option2").style.backgroundColor = "red";
		document.getElementById("option3").style.backgroundColor = "red";
		document.getElementById("option4").style.backgroundColor = "green";
	}

	document.getElementById("option1").disabled = true;
	document.getElementById("option2").disabled = true;
	document.getElementById("option3").disabled = true;
	document.getElementById("option4").disabled = true;

	document.getElementById("skipAll").disabled = true;
	document.getElementById("skipQuestion").disabled = true;
	document.getElementById("skipInputAll").disabled = true;
	document.getElementById("skipInputQuestion").disabled = true;
	document.getElementById("textAns").disabled = true;
}

function checkAnswer(clicked) {
	clearInterval(intervalQuestion);

	updateDelay();
	$(document).ready(function () {
		intervalDelay = setInterval(updateDelay, 1000);
	})

	if (document.getElementById(clicked).value == correctAnswer) {
		score += 1;
		document.getElementById(clicked).style.backgroundColor = "green";
	}
	else {
		document.getElementById(clicked).style.backgroundColor = "red";
		document.getElementById(correctButtonID).style.backgroundColor = "green";
	}

	document.getElementById("option1").disabled = true;
	document.getElementById("option2").disabled = true;
	document.getElementById("option3").disabled = true;
	document.getElementById("option4").disabled = true;

	document.getElementById("skipAll").disabled = true;
	document.getElementById("skipQuestion").disabled = true;
}

function checkAnswerText(clicked) {
	clearInterval(intervalQuestion);

	updateDelay();
	$(document).ready(function () {
		intervalDelay = setInterval(updateDelay, 1000);
	})

	var answerInput = document.getElementById("textInput").value;
	answerInput = answerInput.toLowerCase();

	if (answerInput == correctAnswer.toLowerCase()) {
		score += 1;
		document.getElementById(clicked).style.backgroundColor = "green";
	}
	else {
		document.getElementById("textInput").value = "Tačan odgovor je: " + correctAnswer;
		document.getElementById(clicked).style.backgroundColor = "red";
	}

	document.getElementById("textAns").disabled = true;
	document.getElementById("skipInputAll").disabled = true;
	document.getElementById("skipInputQuestion").disabled = true;
}


function updateCountdown() {
	document.getElementById("questionTimer").innerHTML = "Preostalo vreme:";
	document.getElementById("countdown").innerHTML = time + "s";
	timeDelay = 5;
	console.log(time);
	if (time > 0) {
		time--;
		document.getElementById("countdown").style.color = "green";
		if (time < 5) {
			document.getElementById("countdown").style.color = "red";
		}
	}
	else {
		clearInterval(intervalQuestion);
		skipQuestion();
	}
}

function updateDelay() {
	time = 20;
	document.getElementById("questionTimer").innerHTML = "Sledeće pitanje kreće za:";
	document.getElementById("countdown").innerHTML = timeDelay + "s";
	if (timeDelay > 0) {
		timeDelay--;
		document.getElementById("countdown").style.color = "blue";
	}
	else {
		clearInterval(intervalDelay);
		showQuestion();
	}
}

function showResult() {
	clearInterval(intervalQuestion);
	clearInterval(intervalDelay);

	childNode = document.getElementById("questions");
	document.getElementById("bodyContainer").removeChild(childNode);

	childNode = document.getElementById("textQuest");
	document.getElementById("bodyContainer").removeChild(childNode);

	childNode = document.getElementById("timer");
	document.getElementById("bodyContainer").removeChild(childNode);

	result = document.createElement("div");
	result.setAttribute("id", "results");

	resultHTML = '<h1 style="text-align:center"><b><i> Najbolji rezultati </h1></b></i><hr>';
	resultHTML += '<p id="userEndGame"> Igrač: ' + '<font color="red">'+ usersJSON[usersCounter].username + '</font>' + '<br> Rezultat: ' + '<font color="red">' + usersJSON[usersCounter].score + '</font></p>';
	resultHTML += '<table class="table table-striped" id="tableResults"><thead><tr><th scope="col">#</th><th scope="col">Korisničko ime</th><th scope="col">Rezultat</th></tr></thead><tbody>';

	if (index == -1) {
		usersCounter++;
	}

	else if (lastScore < usersJSON[usersCounter].score) {
		usersJSON[index].score = usersJSON[usersCounter].score;
		usersJSON.pop();
	}
	else {
		usersJSON.pop();
	}

	usersJSON.sort(function (a, b) {
		return b.score - a.score;
	});

	if (usersCounter < 10) {
		obj = JSON.stringify(usersJSON);
		localStorage.setItem('users', obj);
	}
	else {
		removeNum = usersCounter;
		while (removeNum > 10) {
			usersJSON.pop();
			removeNum--;
		}
		localStorage.setItem('users', JSON.stringify(usersJSON));
	}

	console.log(usersJSON);

	usersCounter = usersJSON.length;
	index = -1;
	lastScore = -1;
	questionCounter = 1;
	score = 0;

	for (i = 0; i < usersCounter; i++) {
		resultHTML += '<tr><th scope="row">' + (i + 1) + '</th><td class="userTable">' + usersJSON[i].username + '</td><td class="scoreTable">' + usersJSON[i].score + '</td></tr>';
	}

	resultHTML += '</tbody></table><hr>';
	resultHTML += '<input type="button" id="nazad" value="Nazad" class="btn btn-secondary btn-lg btn-block" onclick="startOver()">';

	result.innerHTML = resultHTML;
	document.getElementById("bodyContainer").appendChild(result);
}

function startOver() {
	childNode = document.getElementById("results");
	document.getElementById("bodyContainer").removeChild(childNode);

	usernameFORM = "";
	nameFORM = "";
	passFORM = "";
	emailFORM = "";

	showRegistration();
}
