//this file was created in the terminal
var actions = [];

var question = "What would you like to do?";
var choice = prompt(question);

runApp();

function runApp(){
	while(choice !== "quit"){
		if(choice === "list"){
			console.log(actions);
		}
		if(choice === "new"){
			var item = prompt("What should be added to the list?");
			actions.push(item);
			console.log(actions);
		}
		choice;
	}
	prompt("Ok, its time to go!");
}
