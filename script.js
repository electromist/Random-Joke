document.addEventListener("DOMContentLoaded", () => {
    const jokeContentElement = document.getElementById("jokeContent");
    const getNewJoke = async () => {
        try {
            const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
            const data = await res.json();
            const jokeText = data.joke;
            console.log("Joke:", jokeText);
            jokeContentElement.textContent = data.joke;
        } catch (e) {
            console.log("ERROR:", e);
        }
    }
    const jokeBtnElement = document.getElementById("jokeBtn");
    jokeBtnElement.addEventListener("click", getNewJoke);
    getNewJoke();
});