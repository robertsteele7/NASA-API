let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
},{once:true})

async function sendApiRequest() {
    let API_KEY = "yDFjZUYssrodiOfwT8qJ4tcUcdHh9vCtD1c3GGiF"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    document.querySelector("#top-content").innerHTML += data.date
    document.querySelector("#middle-content").innerHTML += data.explanation
    document.querySelector("#bottom-content").innerHTML += `<img src="${data.url}">`
    document.querySelector("#bottom-content").innerHTML += data.copyright
    
}