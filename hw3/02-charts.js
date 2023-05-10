const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
document.onload = getApiData(url);

function getApiData(url) {
  let houses = [];

  fetch(url).then(response => response.json().then(data => {
    data.forEach(character => {
      let family = character.family
      // check if the family starts with the word house, strip it if it does
      if(family.startsWith("House"))
        family = family.substring("House".length+1);
      
      // check if the family is none or some variant of unknown
      if(family == ""         || 
         family == "None"     ||
         family == "Unkown"   ||
         family == "Unknown"    ) {
        if(!houses["None"])
          houses["None"] = 1;
        else
          houses["None"] += 1;
      }
      else {
        // check all of the house names, if there is a single letter difference
        // between the family we are adding and a family thats already present,
        // then assume that there was a typo and reassign family to be that key
        Object.keys(houses).forEach(house => {
          if(stringDiff(house, family) < 2) {
            family = house;
          }
        });
        
        if(!houses[family])
          houses[family] = 1;
        else
          houses[family] += 1;
      }
    });
    
    const donutChart = document.querySelector('.donut-chart');

    new Chart(donutChart, {
      type: 'doughnut',
      data: {
        labels: Object.keys(houses),
        datasets: [
          {
            label: 'Characters Per House',
            data: Object.values(houses),
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      },
    });
  }));
}

function stringDiff(stringOne, stringTwo) {
  // returns the number of letters that dont match between string one and string two
  let count = 0;
  stringTwo.split("").forEach((letter, pos) => {
    if(letter != stringOne[pos])
      count += 1;
  });

  return count;
}
