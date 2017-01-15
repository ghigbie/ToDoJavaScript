//this file was created in the terminal
var actions = [];

var question = "What would you like to do?";
var input = prompt(question);

while(input !== "quit"){
	if(input === "list"){
		console.log("**************");
		actions.forEach(function(todo, index){
			console.log(`${index}: ${todo}`);
		});
		console.log("**************");
	}
	else if(input === "new"){
		var newItem = prompt("Enter a new item to add to the list.");
		newItem = newItem.charAt(0).toUpperCase() + newItem.substr(1);
		actions.push(newItem);
		console.log(`${newItem} added to the list.`);
	}
	else if(input === "delete"){
		var index = prompt("Enter idex of item to delete.")
		var itemDeleted = actions[index];
		actions.splice(index, 1); //splice will remove the items from the list following the index
		console.log(`${itemDeleted} removed from the list.`);
	}
	else{
		alert("Please enter a valid action!")
	}

	input = prompt(question);
}
alert("Ok, its time to go!");


// runApp();

// function runApp(){
// 	var item;
// 	while(choice !== "quit"){
// 		if(choice === "list"){
// 			console.log("**************");
// 			actions.forEach(function(item, index){
// 				console.log(`${index}: ${item}`);
// 			});
// 			console.log("**************");
// 		}
// 		else if(choice === "new"){
// 			item = prompt("What should be added to the list?");
// 			actions.push(item);
// 			console.log(`${item} added to the list. Thank you!`);
// 		}
// 		else if(choice === "delete"){
// 			var popedItem = actions.pop();
// 			console.log(`${popedItem} removed from the list.`)
// 		}
// 		else{
// 			alert("Please enter a valid action!");
// 		}
// 		choice = prompt(question);
// 		runApp();
// 	}
// }

// alert("Ok, its time to go!");