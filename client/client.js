const boxContainer = document.getElementById("box-container");
const messageForm = document.querySelector("#messageForm");

async function getGames() {
  const response = await fetch("http://localhost:8080/games");
  const games = await response.json();

  for (let i = 0; i < games.length; i++) {
    const name = games[i].name;
    const title = games[i].title;
    const rating = games[i].rating;

    const p = document.createElement("p");
    p.textContent = `${name} title ${title} rated ${rating}`;

    boxContainer.appendChild(p);
  }
}

getGames();

//const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");

  const formData = new FormData(messageForm);
  //const message = formData.get("games");
  const submission = Object.fromEntries(formData);

  const p = document.createElement("p");
  p.textContent = `${submission.name} title ${submission.title} rated ${submission.rating}`;

  boxContainer.appendChild(p);

  fetch("http://localhost:8080/games", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });
}
messageForm.addEventListener("submit", handleSubmitMessageForm);
