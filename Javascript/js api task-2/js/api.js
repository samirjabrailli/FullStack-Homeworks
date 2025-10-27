const api = "https://v2.jokeapi.dev/joke/programming?type=single";

const parag = document.getElementById('parag');
const btn = document.getElementById('btn');

const getJoke =  async () => {
    
    try {
        const res = await axios.get(api)
        const data = res.data
      parag.textContent = data.joke
      
    } catch (error) {
        console.log("Zarafat tapilmadi", error);
        
    }
}

getJoke();


btn.addEventListener("click", getJoke)





