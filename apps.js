"use strict";
function my_fun(search) {
	var element = document.getElementById("button").addEventListener("click");
	var httpRequest = new XMLHttpRequest();
	var url = "http://localhost:8080/superheroes.php";
	httpRequest.onreadystatechange = dosomething(){
		if (httpRequest.readyState === 4 && httpRequest.status === 200){
			var response = httpRequest.responseText;
			alert(response);
		}
		else{
			alert('Problem Alert!');
		}
	}
	httpRequest.open("GET",url,true);
	httpRequest.send();
}

