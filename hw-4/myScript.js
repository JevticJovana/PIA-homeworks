signUp = false;
username = "";
password = "";


function createBody() {
	bodyContainer = document.createElement("div");
	bodyContainer.setAttribute("class", "container");
	bodyContainer.setAttribute("id", "bodyContainer");
	document.body.appendChild(bodyContainer);

	$(document).ready(function () {
		welcomePage();
	});
}

function welcomePage() {
	if (signUp) {
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
	isUser = false;
	isAdmin = false;


	$(document).ready(function () {
		$("#login").click(function () {
			user = false;
			admin = false;
			username = $("#usernameLog").val();
			password = $("#passwordLog").val();
			$("#wrongUser").text("");
			$("#wrongPassword").text("");

			if (username.length == "") {
				$("#wrongUser").text("Niste uneli korisničko ime ili e-mail adresu");
				$("#usernameLog").focus();
				return false;
			}

			else if (password.length == "") {
				$("#wrongPassword").text("Niste uneli lozinku")
				$("#passwordLog").focus();
				return false;
			}
			else {
				data = {
					"User_username": username,
					"User_password": password,
					"Sign_up": signUp
				};
				dataJSON = JSON.stringify(data);
				console.log(dataJSON);

				$.ajax({
					url: 'form.php',
					type: 'post',
					data: { user: dataJSON },
					success: function (user_existing) {
						data = JSON.parse(user_existing);
						console.log(data);
						if (data['User_existing'] && !(data['User_admin'])) {
							alert("Uspešno ste se prijavili");
							$("#usernameLog").val("");
							$("#passwordLog").val("");
							user = true;
							admin = false;
						}
						else if (data['User_existing'] && data['User_admin']) {
							alert("Dobrodošli na admin stranicu!");
							$("#usernameLog").val("");
							$("#passwordLog").val("");
							user = false;
							admin = true;
						}
						else {
							alert("Korisničko ime ili lozinka nisu tačni!");
							$("#passwordLog").val("");
							user = false;
							admin = false;
						}
					},
					complete: function () {
						$("#logForm").submit(function (event) {
							event.preventDefault()
						});
						if (admin) {
							isAdmin = true;
							console.log(isAdmin);
						}
						else if (user) {
							isUser = true;
						}
						if (isAdmin) {
							console.log(isAdmin);
							childNode = document.getElementById("loginForm");
							document.getElementById("bodyContainer").removeChild(childNode);
							showAdminPage();
							return true;
						}
					}
				});
			}
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

	$(document).ready(function () {
		$("#registration").click(function () {
			isUser = false;
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

			if (firstName.length == "") {
				$("#wrongNameReg").text("Niste uneli Vaše ime");
				$("#nameReg").focus();
				return false
			}
			else if (lastName.length == "") {
				$("#wrongNameReg").text("Niste uneli Vaše ime");
				$("#lastnameReg").focus();
				return false
			}
			else if (username.length == "") {
				$("#wrongUsernameReg").text("Niste uneli korisničko ime");
				$("#usernameReg").focus();
				return false;
			}
			else if (email.length == "" || (!(email.match(mailFormat)))) {
				$("#wrongEmailReg").text("Niste uneli ispravan format e-mail adrese");
				$("#emailReg").focus();
				return false;
			}
			else if (password.length = "" || password.length < 6) {
				$("#wrongPassReg").text("Lozinka mora biti veća od 5 karaktera");
				$("#passwordReg").focus();
				return false;
			}
			else {
				data = {
					"User_username": username,
					"User_email": email,
					"User_name": firstName,
					"User_lastname": lastName,
					"User_password": password,
					"Sign_up": signUp
				};
				dataJSON = JSON.stringify(data);
				console.log(dataJSON);
				$.ajax({
					url: 'form.php',
					type: 'post',
					data: { user: dataJSON },
					success: function (array) {
						console.log("ovde sam");
						data = JSON.parse(array);
						console.log(data);
						if (data['User_exists']) {
							if (data['Email_existing']) {
								$("#wrongEmailReg").text("Uneta e-mail adresa već postoji");
								//$("#emailReg").val("");
								$("#emailReg").focus();
							}
							if (data['Username_existing']) {
								$("#wrongUsernameReg").text("Korisničko ime već postoji");
								//$("#usernameReg").val("");
								$("#usernameReg").focus();
							}
							alert("Registracija neuspešna");

						}
						else {
							alert("Registracija uspešna");
							$("#emailReg").val("");
							$("#usernameReg").val("");
							$("#nameReg").val("");
							$("#lastnameReg").val("");
							$("#passwordReg").val("");
						}
					}
				});
				$("#regForm").submit(function (event) {
					event.preventDefault()
				});

			}
		});
	});
}

data = "";
function showAdminPage() {

	console.log("adminPage");

	$(document).ready(function () {
		$.ajax({
			url: 'read.php',
			//dataType: 'json',
			success: function (array_movies) {
				data = JSON.parse(array_movies);
				console.log(data);
			},
			complete: function () {
				adminPage = document.createElement("div");
				adminPage.setAttribute("id", "adminPage");
				adminPage.setAttribute("style", "margin:auto;");
				adminPage.setAttribute("class", "container");
				document.getElementById("bodyContainer").appendChild(adminPage);

				adminPageHTML = '<div class="row"><div class="col-md-4 col-sm-4"></div><div class="col-md-4 col-sm-4"><h1 style="text-align:center"><b><i> Lista filmova </h1></b></i></div><hr>';
				adminPageHTML += '<div class="col-md-4 col-sm-4"></div></div><div class="row"><div class="col-sm-12 col-md-12"><table class="table table-striped" id="movieListAdmin"><thead><tr><th scope="col">#</th><th scope="col">Naslov filma</th><th scope="col"></th><th scope="col"></th></tr></thead><tbody>';

				for (i = 0; i < data.length; i++) {
					adminPageHTML += '<tr><th scope="row" id="row_' + (i + 1) + '"></th><td class="titleTable">'
						+ '<input type="button" style="font-weight:bold;" class="btn btn-light" value="'
						+ data[i]['Movie_title'] + '"' + 'onclick="showMovie(' + (i + 1) + ')"' + '</></td><td class="linkUpdateTable">'
						+ '<input type="button" style="font-weight:bold; color:green;" class="btn btn-light" value="Ažuriraj podatke o filmu" onclick="updateTable(' + data[i]['Movie_id'] + "," + i +')"/></td>' + '<td class="linkDeleteTable">'
						+ '<input type="button" style="font-weight:bold; color:red;" class="btn btn-light" value="Obriši film iz baze" onclick="deleteTable(' + data[i]['Movie_id'] + ')"/></td></tr>';
				}

				adminPageHTML += '</tbody></table><hr></div></div>';
				adminPageHTML += '<div class="row"><div class="col-md-12 col-sm-12"><input type="button" style="font-weight:bold; color:black;" id="addMovie" class="btn btn-light" value="Dodaj film" onclick="addMovie()" /></div>'
				adminPageHTML += '<div class="col-md-12 col-sm-12"><div id="chosenMovie"></div></div></div>';

				adminPage.innerHTML = adminPageHTML;
			}
		});
	});
}

function updateTable(id, i) {
	document.getElementById("addMovie").disabled = false;
	$("#chosenMovie").text("");

	console.log("updateMovie");

	movieData = [];

	text = '<p style="background-color:white; text-align:center;"><i><b>Izmena informacija o filmu:<br></i></b></p><hr /><br>'
		+ '<form action="" method="POST" name="movieChange" id="movieChange">'
		+ '<div class="form-group"><div class="form-group"><label><b><i>Naslov filma: </b></i></label>'
		+ '<input type="text" id="title" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Opis filma: </b></i></label>'
		+ '<input type="text" id="description" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Žanr filma: </b></i></label><input type="text" id="genre" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Scenarista: </b></i></label><input type="text" id="screenwriter" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Režiser: </b></i></label><input type="text" id="director" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Produkcijska kuća: </b></i></label><input type="text" id="studio" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Glavni glumci: </b></i></label><input type="text" id="actors" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Godina: </b></i></label><input type="text" id="year" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Dužina trajanja: </b></i></label><input type="text" id="length" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Poster(lokacija): </b></i></label><input type="text" id="location" class="form-control"/></div>'
		+ '<div class="form-group"><input type="submit" class="btn btn-primary btn-block" id="change" name ="change" value="Potvrdi izmene"/></div></div></form>';

	document.getElementById("chosenMovie").innerHTML = text;

	$(document).ready(function () {
		$("#title").val(data[i]['Movie_title']);
		$("#description").val(data[i]['Movie_description']);
		$("#genre").val(data[i]['Movie_genre']);
		$("#screenwriter").val(data[i]['Movie_screenwriter']);
		$("#director").val(data[i]['Movie_director']);
		$("#studio").val(data[i]['Movie_studio']);
		$("#actors").val(data[i]['Movie_actors']);
		$("#year").val(data[i]['Movie_year']);
		$("#length").val(data[i]['Movie_length']);
		$("#location").val(data[i]['Movie_poster']);
	});

	$(document).ready(function () {
		$("#change").click(function () {
			$("#movieChange").submit(function (event) {
				event.preventDefault()
			});

			movieData = {
				"Title": $("#title").val(),
				"Description": $("#description").val(),
				"Genre" : $("#genre").val(),
				"Screenwriter" : $("#screenwriter").val(),
				"Director" : $("#director").val(),
				"Studio" : $("#studio").val(),
				"Actors" : $("#actors").val(),
				"Year" : $("#year").val(),
				"Length" : $("#length").val(),
				"Location" : $("#location").val(),
				"Id" : id
			};

			dataJSON = JSON.stringify(movieData);
			console.log(dataJSON);
			movieUpdated = "";
			$.ajax({
				url: 'update_table.php',
				type: 'post',
				data: { movie: dataJSON },
				success: function (movie_updated) {
					movieUpdated = JSON.parse(movie_updated);
				},
				complete: function() {
					if(movieUpdated) {
						alert("Uspešno ste ažurirali podatke filma");
						document.getElementById("chosenMovie").innerHTML = "";
						childNode = document.getElementById("adminPage");
						document.getElementById("bodyContainer").removeChild(childNode);
						showAdminPage();
						return true;
					}
					else {
						alert("Niste uspešno ažurirali podatke filma. Proverite unete podatke");
						return false;
					}
				}
			});
		});
	});
}

function deleteTable(id) {

	console.log("deleteMovie");

	$(document).ready(function (){
		$("#movieChange").submit(function (event) {
			event.preventDefault()
		});

		movieData = {"Id" : id};
		dataJSON = JSON.stringify(movieData);
		console.log(movieData);
		$.ajax({
			url: 'delete_table.php',
			data: { movie: dataJSON },
			type: 'post',
			dataType: 'json',
			success: function (movie_deleted) {
				movieData = JSON.parse(movie_deleted);
			},
			complete: function() {
				if(movieData) {
					alert("Uspešno ste izbrisali film");
					document.getElementById("chosenMovie").innerHTML = "";
					childNode = document.getElementById("adminPage");
					document.getElementById("bodyContainer").removeChild(childNode);
					showAdminPage();
					return true;
				}
			}
		});

	});
}

function showMovie(id) {
	console.log(data[id - 1]);
	console.log("showMovie");
	$(document).ready(function (){
		document.getElementById("addMovie").disabled = false;
		$("#chosenMovie").text("");
		text = "<i style='color:green;'>Naslov filma: </i>" + data[id - 1]['Movie_title'] +
			"<br><i style='color:green;'>Opis filma: </i>" + data[id - 1]['Movie_description'] +
			"<br><i style='color:green;'>Žanr filma: </i>" + data[id - 1]['Movie_genre'] +
			"<br><i style='color:green;'>Scenarista: </i>" + data[id - 1]['Movie_screenwriter'] +
			"<br><i style='color:green;'>Režiser: </i>" + data[id - 1]['Movie_director'] +
			"<br><i style='color:green;'>Produkcijska kuća: </i>" + data[id - 1]['Movie_studio'] +
			"<br><i style='color:green;'>Glavni glumci: </i>" + data[id - 1]['Movie_actors'] +
			"<br><i style='color:green;'>Godina: </i>" + data[id - 1]['Movie_year'] +
			"<br><i style='color:green;'>Dužina trajanja: </i>" + data[id - 1]['Movie_length'] +
			"<br><i style='color:green;'>Poster(lokacija): </i>" + data[id - 1]['Movie_poster'];

		document.getElementById("chosenMovie").innerHTML = text;
	});
}

function addMovie() {
	$("#chosenMovie").text("");
	document.getElementById("addMovie").disabled = true;

	console.log("addMovie");

	text = '<p style="background-color:white; text-align:center;"><i><b>Izmena informacija o filmu:<br></i></b></p><hr /><br>'
		+ '<form action="" method="POST" name="movieAdd" id="movieAdd">'
		+ '<div class="form-group"><div class="form-group"><label><b><i>Naslov filma: </b></i></label>'
		+ '<input type="text" id="titleAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Opis filma: </b></i></label>'
		+ '<input type="text" id="descriptionAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Žanr filma: </b></i></label><input type="text" id="genreAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Scenarista: </b></i></label><input type="text" id="screenwriterAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Režiser: </b></i></label><input type="text" id="directorAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Produkcijska kuća: </b></i></label><input type="text" id="studioAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Glavni glumci: </b></i></label><input type="text" id="actorsAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Godina: </b></i></label><input type="text" id="yearAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Dužina trajanja: </b></i></label><input type="text" id="lengthAdd" class="form-control"/></div>'
		+ '<div class="form-group"><label><b><i>Poster(lokacija): </b></i></label><input type="text" id="locationAdd" class="form-control"/></div>'
		+ '<div class="form-group"><input type="submit" class="btn btn-primary btn-block" id="add" name ="add" value="Potvrdi unos"/></div></div></form>';

	document.getElementById("chosenMovie").innerHTML = text;

	$(document).ready(function () {
		$("#add").click(function () {
			console.log("dodajem");
			$("#movieAdd").submit(function (event) {
				event.preventDefault()
			});

			movieData = {
				"Title": $("#titleAdd").val(),
				"Description": $("#descriptionAdd").val(),
				"Genre" : $("#genreAdd").val(),
				"Screenwriter" : $("#screenwriterAdd").val(),
				"Director" : $("#directorAdd").val(),
				"Studio" : $("#studioAdd").val(),
				"Actors" : $("#actorsAdd").val(),
				"Year" : $("#yearAdd").val(),
				"Length" : $("#lengthAdd").val(),
				"Location" : $("#locationAdd").val(),
			};

			dataJSON = JSON.stringify(movieData);
			movieAdded = "";
			console.log(dataJSON);
			$.ajax({
				url: 'add_table.php',
				type: 'post',
				data: { movie: dataJSON },
				success: function (movie_added) {
					movieAdded = JSON.parse(movie_added);
				},
				complete: function() {
					document.getElementById("addMovie").disabled = false;
					console.log(movieAdded);
					if(movieAdded) {
						alert("Uspešno ste dodali novi film");
						document.getElementById("chosenMovie").innerHTML = "";
						childNode = document.getElementById("adminPage");
						document.getElementById("bodyContainer").removeChild(childNode);
						showAdminPage();
						return true;
					}
					else {
						alert("Niste uspešno dodali novi film. Proverite unete podatke");
						return false;
					}
				}
			});
		});
	});

}
