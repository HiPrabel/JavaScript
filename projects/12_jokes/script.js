const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://official-joke-api.appspot.com/random_joke', config)
  const data = await res.json()

  jokeEl.innerHTML = `${data.setup} <br><strong>${data.punchline}</strong>`
}
