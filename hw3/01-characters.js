// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const section = document.querySelector("section");

document.onload = getApiData(url);

function getApiData(url) {
  fetch(url).then(response => response.json().then(data => {
    data.forEach(character => {
      section.appendChild(makeCharacterCard(character.fullName, character.title, character.imageUrl));
    });
  }));
}

function makeCharacterCard(characterName, characterTitle, imageUrl) {
  let newCard = document.createElement("div");
  let image = document.createElement("img");
  let name = document.createElement("p");
  let title = document.createElement("p");

  image.src = imageUrl;
  name.textContent = characterName;
  title.textContent = characterTitle;

  newCard.classList.add("character");
  newCard.classList.add("text-center");
  newCard.classList.add("ms-2");
  name.classList.add("fw-bolder");
  name.classList.add("fs-4");
  title.classList.add("fw-bold");
  image.classList.add("charImg");

  newCard.appendChild(image);
  newCard.appendChild(name);
  newCard.appendChild(title);

  return newCard;
}
