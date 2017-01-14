//this file was created in the terminal
var actions = [];

var question = "What would you like to do?";
var choice = prompt(question);

runApp();

function runApp(){
	var item;
	while(choice !== "quit"){
		if(choice === "list"){
			console.log(actions);
		}
		else if(choice === "new"){
			item = prompt("What should be added to the list?");
			actions.push(item);
			console.log(actions);
		}
		else{
			alert("Please enter a valid item!");
		}
		choice = prompt(question);
		runApp();
	}
}

alert("Ok, its time to go!");