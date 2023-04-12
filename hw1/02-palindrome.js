const elem = document.querySelector('input');
const output = document.getElementById('output');

elem.addEventListener('input', handleInput);

function handleInput(userInput) {
  let numVal = userInput.target.value;
  console.log(numVal)

  // check if number is positive
  if(numVal < 0)
    createOutput("Number must be positive", "red");
  else if(checkPalindrome(numVal))
    createOutput("Number is a palindrome", "green");
  else 
    createOutput("Number is not a palindrome", "red");
}

function checkPalindrome(number) {
  // convert the number to a string
  // split that string into an array, where each element is a single number
  // reverse the array
  // join it back into a string
  reversedNum = String(number).split("").reverse().join("")

  // let implicit type conversion do the comparison
  return reversedNum == number;
}

function createOutput(text, color) {
  // creates a new p element using the passed in text and color
  let pTag = document.createElement("p");
  let newText = document.createTextNode(text);
  pTag.appendChild(newText)
  pTag.style.color = color

  // remove all child elements of the parent
  output.innerHTML = "";
  // append the new element to the parent node
  output.appendChild(pTag)
}
