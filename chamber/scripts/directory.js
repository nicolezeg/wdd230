const requestURL = 'data/members.json';
const directory = document.querySelector('#memberDirectory');
const gridButton = document.querySelector('#gridView');
const listButton = document.querySelector('#listView');

// Fetch and display member data
async function getMembers() {
  const response = await fetch(requestURL);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    const img = document.createElement('img');
    img.setAttribute('src', `images/${member.image}`);
    img.setAttribute('alt', `${member.name} logo`);
    img.setAttribute('loading', 'lazy');

    const name = document.createElement('h3');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const website = document.createElement('a');
    website.setAttribute('href', member.website);
    website.setAttribute('target', '_blank');
    website.textContent = "Visit Website";

    const membership = document.createElement('p');
    membership.textContent = `Membership: ${member.membership}`;

    const desc = document.createElement('p');
    desc.textContent = member.description;

    card.append(img, name, address, phone, website, membership, desc);
    directory.appendChild(card);
  });
}

// View toggle logic
gridButton.addEventListener('click', () => {
  directory.classList.add('grid');
  directory.classList.remove('list');
});

listButton.addEventListener('click', () => {
  directory.classList.add('list');
  directory.classList.remove('grid');
});

getMembers();
