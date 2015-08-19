/* <![CDATA[ */

function Login(){
	var pseudo=document.login.pseudo.value;
	var username=pseudo.toLowerCase();
	var password=document.login.password.value;
	password=password.toLowerCase();
	if (pseudo=="@dm1n" && password=="gfsu.ctf") {
	    alert("Correct passowrd!!, use password as answer to complete the challenge and submit it in flag");
	} else { 
	    alert("Wrong password!"); 
	}
}
/* ]]> */ 
