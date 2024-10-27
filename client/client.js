const boxContainer = document.getElementById("box-container");
const messageForm = document.querySelector("#messageForm");

async function getGames() {
  const response = await fetch("http://localhost:8080/games");
  const games = await response.json();

  for (let i = 0; i < games.length; i++) {
    const name = games[i].name;
    const title = games[i].title;
    const rating = games[i].rating;
    // likes
    //const likes = games[i].likes;
    const p = document.createElement("p");
    p.textContent = `${name} title ${title} rated ${rating}`;
    // likes
    // const btn = document.createElement("button");
    boxContainer.appendChild(p);
    // likes button
    // boxContainer.appendChild(btn);
  }
}

getGames();

//const messageForm = document.querySelector("#messageForm");

async function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");

  const formData = new FormData(messageForm);
  //const message = formData.get("games");
  const submission = Object.fromEntries(formData);

  const p = document.createElement("p");
  p.textContent = `${submission.name} title ${submission.title} rated ${submission.rating}`;
  boxContainer.appendChild(p);
  //like button
  const boxContainer = document.querySelector("#box-container");
  const paragraphs = document.querySelectorAll("p");

  paragraphs.forEach((p) => {
    let likes = 0;
    const likesDisplay = document.createElement("p");
    likesDisplay.textContent = likes;

    const btn = document.createElement("button");
    btn.textContent = "likes";
    btn.addEventListener("click", function () {
      likes = likes + 1;
      likesDisplay.textContent = likes;
    });
    p.appendChild(btn);
    p.appendChild(likesDisplay);
  });

  //const likesDisplay = document.createElement("p");
  //let likes = 0;
  //likesDisplay.textContent = likes;

  //const btn = document.createElement("button");
  //btn.textContent = "likes";

  //btn.addEventListener("click", function () {
  //likes = likes + 1;
  //likesDisplay.textContent = likes;
  // });

  //boxContainer.appendChild(btn);
  //boxContainer.appendChild(likesDisplay);

  // boxContainer.appendChild(p);

  //likes
  //const btn = document.createElement("button");
  // btn.textContent = `${submission.likes}`;
  // boxContainer.appendChild(btn);

  await fetch("http://localhost:8080/games", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(submission),
  });
}
messageForm.addEventListener("submit", handleSubmitMessageForm);

//const likesdisplay = document.createElement("p");
//const likes = document.createElement("btn");
//likes.addEventListener("click", function () {
//likes = likes + 1;
//likesdisplay.textContent = likes;
//boxContainer.appendChild(btn);
// boxContainer.appendChild(p);
//});

//const likesDisplay = document.createElement("p");
//let likes = 0;
//likesDisplay.textContent = likes;

//const btn = document.createElement("button");
//btn.textContent = "likes";

//btn.addEventListener("click", function () {
// likes = likes + 1;
//likesDisplay.textContent = likes;
//});

//boxContainer.appendChild(btn);
//boxContainer.appendChild(likesDisplay);
