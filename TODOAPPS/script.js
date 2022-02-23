document.addEventListener("DOMContentLoaded", function(){
	cons submitForm = document.getElementById("form");
	
	submitForm.addEventListener("submit", function (event){
		event.preventDefault();
		addTodo();
	});
});





