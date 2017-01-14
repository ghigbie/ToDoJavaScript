//this file was created in the terminal
var actions = [];

var question = "What would you like to do?";
var choice = prompt(question);


if(input === "list"){
	list();
}
else if(input === "new"){
	newItem();
}
else if(input === "quit"){
	//do nothing
}
else{

}

function newItem(){
	var item = prompt("What should be added to the list?");
	actions.push(item);
	console.log(actions);
}

function list(){
	console.log(actions);
}


