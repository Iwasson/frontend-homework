// Add your code here
const text = document.getElementById("compare");
const input = document.querySelector("input");
const compare_text = text.textContent

input.addEventListener('keydown', handleKeyDown);

function handleKeyDown(userInput){
  // grab the user input from the event handler
  let word = userInput.target.value
  
  // since we are getting the target value from a keydown event
  // we need to handle specific cases
  if(userInput.key == "Backspace")
    word = userInput.target.value.slice(0, -1);
  else if(userInput.key.length < 2)
    word = userInput.target.value + userInput.key;

  // regex docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#building_a_regular_expression_from_dynamic_inputs
  regex = new RegExp("\\b"+word+"\\b", "g")
  // use replaceAll to add a span around all words that match the text
  text.innerHTML = compare_text.replaceAll(regex, "<span style='background-color:yellow;'>" + word + "</span>");
}
