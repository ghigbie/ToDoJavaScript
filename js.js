//this file was created in the terminal
var actions = [];

var question = "What would you like to do?";
var choice = prompt(question);

runApp();

function runApp(){
	var item;
	while(choice !== "quit"){
		if(choice === "list"){
			console.log("**************");
			actions.forEach(function(item, index){
				console.log(`${index}: ${item}`);
			});
			console.log("**************");

		}
		else if(choice === "new"){
			item = prompt("What should be added to the list?");
			actions.push(item);
			console.log(`${item} added to the list. Thank you!`);
		}
		else if(choice === "delete"){
			var popedItem = actions.pop();
			console.log(`${popedItem} removed from the list.`)
		}
		else{
			alert("Please enter a valid action!");
		}
		choice = prompt(question);
		runApp();
	}
}

alert("Ok, its time to go!");