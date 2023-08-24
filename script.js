const input = document.querySelector('#fruit');//grabbing the html element with the id of fruit, in this case, the input text element, naming it input 
const suggestions = document.querySelector('.suggestions ul');//creating a variable that represents the div element class of suggestions, we are specifically targeting the ul element wiht a class of suggesstions which is why it is ordered as is 

//the entire array below is an array of different fruit held in the variable called fruit
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//this function most likely sets up the seach action to look up the fruit 
function search(str) {
	let inputLowerCased = str.toLowerCase(); //turning the input to lowercase no matter what 
	let results = []; //initializing empty array to hold new results based on criteria we create

	for(let i = 0; i < fruit.length; i++) {//creating for loop to iterate through the fruits array and apply the logic below
		if (fruit[i].toLocaleLowerCase().includes(inputLowerCased)){//checking each element in the fruit array, we are converting the elements to lowercase AND checking if the element contains the users input witih the includes method
			results.push(fruit[i]);//if the conditions are met (user input matches fruit), we add that elemt to the results array we created in the beggining 
		}
	}//end of loop function
	return results;//returning the new array 
}

//this function gets ran every time the user types in the search bar 
function searchHandler(e) {
	// console.log('TEST')
	let inputVal = e.target.value; //grabs the current value from the search input. e.target specifies the html element that triggered the event, value gets the text inside 
	let results = search(inputVal); //use the search function to get the matching results 
	showSuggestions(results, inputVal); //display those results using the showSuggestions function
	
}

//this function displays the results from the ul element in the html file
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	// console.log(results);
//we need to clear any esisting suggestions
const ul = document.querySelector('ul');

//if there are no results and the input is empty, we dont need to display anything
if (results.length === 0 && inputVal.length === 0) return;
	// useSuggestion();
//we need to loop through each result and add it to the ul in the html
for (let i = 0; i < results.length; i++) {
	let li = document.createElement('li'); //create new list item
	li.textContent = results[i]; //set the new li content to the current fruit
	ul.appendChild(li); //add the new li to the ul
}

//if the ul has items, add a class to indicate it has suggestions. the suggestions will have their own styling when appeared
if (results.length > 0) {
	ul.classList.add('has-suggestions');
} else {
	ul.classList.remove('has-suggestions');
	}

}

//this function most likely allows the user to use the suggestion that is displayed and completes it in the search bar 
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		document.querySelector('ul').innerHTML = '';
	}
}

input.addEventListener("keyup", searchHandler);//adding event listener to input variable, in this case the search bar itself on the keu up
suggestions.addEventListener('click', useSuggestion);//adds an event listener to the suggestions variable created, in this case the ul elements within the suggestion class