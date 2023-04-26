// Add your code here

function formSubmit(event) {
  let fullName = event.target[0].value;
  let email = event.target[1].value;
  let registration = event.target[2].value;
  let courseOne = event.target[3].value;
  let courseTwo = event.target[4].value;
  let courseThree = event.target[5].value;
  let extra = event.target[6].value;

  let courses = "";
  if(event.target[3].checked)
    courses += ` ${courseOne}`;
  if(event.target[4].checked)
    courses += ` ${courseTwo}`;
  if(event.target[5].checked)
    courses += ` ${courseThree}`;
  courses = courses.trim();
  console.log(`Full Name: ${fullName}\nEmail: ${email}\nRegistration: ${registration}\nCourses: ${courses}\nAnything Else: ${extra}`);
  event.preventDefault();
}

const form = document.querySelector("form");
form.addEventListener("submit", formSubmit);
