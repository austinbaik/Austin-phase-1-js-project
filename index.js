
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault() //prevents the webpage from reloading upon 'submit' event
        // console.log('long string', e.target.new_long_url.value) 
        shortenUrl(e.target.new_long_url.value) // calls shortenUrl fxn with url submission as parameter
        // shortenUrl(e.target.long-url-form.value)
    })
})

function shortenUrl(url) {
    // let urlforApi = `${apiUrl}${url}`
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`) //API call is initiated to the API url that is interpolated with the user submitted url
        .then(resp => resp.json())
        .then(json => {
            let infoJson = json
            console.log(infoJson)
            responseChecker(infoJson)
        })
}

function responseChecker(infoJson) { //helper fxn checks the JSON object for API error
    if (infoJson.ok === false) { //if API returns 'false' for request
        alert("This is not a valid URL, try again.") //webpage displays alert message 
    } else {
        addUrlToDom(infoJson) //calls fxn that add urls to DOM
        // addOrgUrlToDom(infoJson)
    }
}

function addUrlToDom(infoJson) {
    let shortLink = infoJson.result.full_short_link
    let orgLink = infoJson.result.original_link
    let card = document.createElement('li')

    card.className = 'card'
    //qq html visual formatting? 
    card.innerHTML = `
        <a href= ${orgLink} target = "_blank"> ${orgLink} </a>
        <br/>
        <a href= ${shortLink} target = "_blank"> "Short Link"</a> 
        <div class ="buttons">
            <button id="close"> X </button>
        </div>
    `
    document.getElementById("created_urls").appendChild(card)

    console.log('card', card)

    card.querySelector('#close').addEventListener('click', () => {
        card.remove()

    })

}
