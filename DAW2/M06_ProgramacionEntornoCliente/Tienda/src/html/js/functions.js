window.onload = main;

function main (){

	document.getElementById("register").addEventListener("click",onRegister);
}

function onRegister(){
	user = {};
	user.email = document.getElementById("inputEmail").value;
	user.password = document.getElementById("inputPassword").value;
	console.log(user);
	register(user);
}

function register(user, callback){

	$.ajax({
		url: "/user/register",
		method: "POST",
		datatype: "json",
		data: user
	}).done(callback);

}
