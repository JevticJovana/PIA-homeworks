signUp = false;
username = "";
password = "";


function createBody() {
	bodyContainer = document.createElement("div");
	bodyContainer.setAttribute("class", "container");
	bodyContainer.setAttribute("id", "bodyContainer");
	document.body.appendChild(bodyContainer);

	$(document).ready(function() {
		welcomePage();
	});
}

function welcomePage() {
    if(signUp) {
        childNode = document.getElementById("registrationForm");
        document.getElementById("bodyContainer").removeChild(childNode);
	}
	
	signUp = false;

    loginForm = document.createElement("div");
	loginForm.setAttribute("id", "loginForm");
	loginForm.setAttribute("style", "margin:auto;");
	document.getElementById("bodyContainer").appendChild(loginForm);

    loginFormHTML = '<div class="row">'
        + '<div class="col-md-3 col-sm-3"></div><div class="col-md-6 col-md-offset-3 col-sm-6">'
		+ '<h1 style="background-color:white; text-align:center;"><i><b>~Prijava za pristup najvećoj bazi filmova~</i></b></h1><hr /><br>'
		+ '<form action="" method="POST" name="logForm" id="logForm"><div class="form-group">'
		+ '<label><b><i>Korisničko ime ili e-mail: </b><i></label><input type="text" class="form-control" '
		+ 'id="usernameLog" name="usernameLog" placeholder="Name"/>'
		+ '<p id="wrongUser" ></p></div>'
		+ '<label><b><i>Lozinka: </b></i></label>'
		+ '<input type="password" class="form-control" id="passwordLog" placeholder="******" />'
        + '<p id="wrongPassword"></p></div></div>'
        + '<div class="row"><div class="col-md-3 col-sm-3"></div><div class="col-md-6 col-md-offset-3 col-sm-6">'
        + '<div class="form-group"><input type="submit" class="btn btn-primary btn-block" id="login" name="login" value="Prijavi se" />'
        + '<input type="submit" class="btn btn-primary btn-block" id="register" name="register" value="Nemaš nalog? Registruj se!" onclick="registrationPage();"/>'
		+ '</div></div></div></form></div>';

	loginForm.innerHTML = loginFormHTML;

	$(document).ready(function () {
		$("#login").click(function() {
			username = $("#usernameLog").val();
			password = $("#passwordLog").val();
			$("#wrongUser").text("");
			$("#wrongPassword").text("");

			if (username.length == "") {
				$("#wrongUser").text("Niste uneli korisničko ime ili e-mail adresu");
				$("#usernameLog").focus();
				return false;
			}
	
			else if(password.length == "") {
				$("#wrongPassword").text("Niste uneli lozinku")
				$("#passwordLog").focus();
				return false;
			}
			else {
				data = {"User_username" : username,
						"User_password" : password,
						"Sign_up" : signUp};
				dataJSON = JSON.stringify(data);
				console.log(dataJSON);

				$.ajax ({
					url: 'forma.php',
					type: 'post',
					data: {user: dataJSON},
					success: function(user_existing) {
						data = JSON.parse(user_existing);
						if(data) {
							console.log("Postoji");
						}
						else {
							alert("Korisničko ime ili lozinka nisu tačni!");
							$("#passwordLog").val("");
						}
					}
				});
			}
			$("#logForm").submit(function (event) {

				event.preventDefault()
			});
		});
	});
}
 
firstName = "";
lastName = "";
email = "";

function registrationPage() {
    childNode = document.getElementById("loginForm");
    document.getElementById("bodyContainer").removeChild(childNode);
    
	signUp = true;

    registrationForm = document.createElement("div");
	registrationForm.setAttribute("id", "registrationForm");
	registrationForm.setAttribute("style", "margin:auto;");
	document.getElementById("bodyContainer").appendChild(registrationForm);

    registrationFormHTML = '<div class="row">'
        + '<div class="col-md-3 col-sm-3"></div><div class="col-md-6 col-md-offset-3 col-sm-6">'
		+ '<h1 style="background-color:white; text-align:center;"><i><b>~Registracija za pristup najvećoj bazi filmova~</i></b></h1><hr /><br>'
        + '<form action="" method="POST" name="regForm" id="regForm"><div class="form-group">'
        + '<div class="form-group"><label><b><i>Ime: </b><i></label>'
		+ '<input type="text" class="form-control" id="nameReg" placeholder="Name"/><p id="p1"></p></div>'
        + '<div class="form-group"><label><b><i>Prezime: </b><i></label>'
	    + '<input type="text" class="form-control" id="lastnameReg" placeholder="Last name" />'
		+ '<p id="wrongNameReg"></p></div>'
		+ '<div class="form-group"><label><b><i>Korisničko ime: </b><i></label>'
		+ '<input type="text" class="form-control" id="usernameReg" placeholder="Username" />'
		+ '<p id="wrongUsernameReg"></p></div>'
		+ '<div class="form-group"><label><b><i>E-mail: </b></i></label>'
		+ '<input type="email" class="form-control" id="emailReg" placeholder="me@example.com" />'
		+ '<p id="wrongEmailReg"></p></div>'
		+ '<div class="form-group"><label><b><i>Lozinka: </b></i></label>'
		+ '<input type="password" class="form-control" id="passwordReg" placeholder="******" />'
		+ '<p id="wrongPassReg"></p></div>'
		+ '<div class="form-group"><input type="submit" class="btn btn-primary btn-block" id="registration" name="registration" value="Registruj se"/></div>'
		+ '<div class="form-group"><input type="submit" class="btn btn-primary btn-block" id="signin" name ="signin" value="Imaš nalog? Prijavi se!" onclick="welcomePage();" /></div></form></div>';

	registrationForm.innerHTML = registrationFormHTML;

	$(document).ready(function() {
		$("#registration").click(function () {
			firstName = $("#nameReg").val();
			lastName = $("#lastnameReg").val();
			username = $("#usernameReg").val();
			email = $("#emailReg").val();
			password = $("#passwordReg").val();
			mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			$("#wrongUsernameReg").text("");
			$("#wrongNameReg").text("");
			$("#wrongPassReg").text("");
			$("#wrongEmailReg").text("");
			
			if(firstName.length == "") {
				$("#wrongNameReg").text("Niste uneli Vaše ime");
				$("#nameReg").focus();
				return false
			}
			else if(lastName.length == "") {
				$("#wrongNameReg").text("Niste uneli Vaše ime");
				$("#lastnameReg").focus();
				return false
			}
			else if(username.length == "") {
				$("#wrongUsernameReg").text("Niste uneli korisničko ime");
				$("#usernameReg").focus();
				return false;
			}
			else if(email.length == "" || (!(email.match(mailFormat)))) {
				$("#wrongEmailReg").text("Niste uneli ispravan format e-mail adrese");
				$("#emailReg").focus();
				return false;
			}
			else if(password.length = "" || password.length < 6) {
				$("#wrongPassReg").text("Lozinka mora biti veća od 5 karaktera");
				$("#passwordReg").focus();
				return false;
			}
			else {
				data = {"User_username" : username,
						"User_email" : email,
						"User_name" : firstName,
						"User_lastname" : lastName,
						"User_password" : password,
						"Sign_up" : signUp};
				dataJSON = JSON.stringify(data);
				console.log(dataJSON);
				$.ajax ({
					url: 'forma.php',
					type: 'post',
					data: {user: dataJSON},
					success: function(array) {
						data = JSON.parse(array);
						console.log(data);
						if(data['User_exists']) {
							if(data['Email_existing'])
							{
								$("#wrongEmailReg").text("Uneta e-mail adresa već postoji");
								//$("#emailReg").val("");
								$("#emailReg").focus();
							}
							if(data['Username_existing']) {
								$("#wrongUsernameReg").text("Korisničko ime već postoji");
								//$("#usernameReg").val("");
								$("#usernameReg").focus();
							}
							alert("Registracija neuspešna");
						}
						else {
							alert("Registracija uspešna");
						}
					}
				});
			}
			$("#regForm").submit(function (event) {

				event.preventDefault()
			});
		});
	});
}
