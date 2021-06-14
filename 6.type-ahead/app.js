const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

// console.log(cities);
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const founds = document.querySelector('.founds');


//Set all places in USA
function setAllPlaces(){
  var total = document.querySelector('.total');
  total.innerHTML = '| Total: ' + cities.length;

  const allPlaces = cities.map( (place, i) => {
    return `
      <li>
        <span class="name">${place.city}, ${place.state}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = allPlaces;
}
searchInput.addEventListener('click', setAllPlaces);

//Find Matches
function findMatches(wordToMatch, cities) {
    return cities.filter( place => {
      // here we need to figure out if the city or state matches what was searched
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//display searched matches places
function displayMatches(){
  const matchArray = findMatches(this.value, cities);

  const html = matchArray.map( place => {
    const regex = new RegExp(this.value, 'gi');

    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');

  let match_txt = (matchArray.length > 1) ? ' matches' : ' match';
  founds.innerHTML = matchArray.length + match_txt + ' found.';
 
  if(this.value == ''){
    founds.style.display = 'none';  
  } else {
    founds.style.display = 'block';  
  }

  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);