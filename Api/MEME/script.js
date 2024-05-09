let memeImg = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = "https://meme-api.com/gimme/";

let subreddits = ["catmeme", "wholesomememes", "dogmeme", "me_irl"];

let getMeme = () => {
    let randomSubreddit =
     subreddits[Math.floor(Math.random() * subreddits.length)];

    fetch(url + randomSubreddit)
        .then((resp) => resp.json())
        .then((data) => {
            memeImg.onload = () => {
                memeImg.src = data.url;
                title.innerHTML = data.title;
            }
            memeImg.src = data.url;

    });
};

getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);



