const baseURL = "https://nicolezeg.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
  if (response.ok) {
    const data = await response.json();
    displayLinks(data.weeks); // sending just the array of weeks
  } else {
    console.error('Failed to load JSON data:', response.statusText);
  }
}

function displayLinks(weeks) {
  const container = document.querySelector('#learning-activities');

  weeks.forEach(week => {
    // Create a section or div to hold each week's activities
    const weekSection = document.createElement('div');
    const weekTitle = document.createElement('h3');
    weekTitle.textContent = week.week;
    weekSection.appendChild(weekTitle);

    // Create a list of links
    const ul = document.createElement('ul');

    week.links.forEach(link => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', baseURL + link.url);
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });

    weekSection.appendChild(ul);
    container.appendChild(weekSection);
  });
}

getLinks(); 
