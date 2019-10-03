const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();

console.log({request});

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // console.log(request);
  // console.log(this.response)
  let data = JSON.parse(this.response);
  console.log({data});

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('h2');
    errorMessage.textContent = 'For some reason it is not working';
    app.appendChild(errorMessage);
  }
}

request.send();



