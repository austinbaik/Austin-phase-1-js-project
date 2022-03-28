
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault() //prevents the webpage from reloading upon 'submit' event
        // console.log('long string', e.target.new_long_url.value) 
        shortenUrl(e.target.new_long_url.value) // calls shortenUrl fxn with url submission as parameter
        // shortenUrl(e.target.long-url-form.value)
    })
})


// const apiUrl = 'https://api.shrtco.de/v2/shorten?url='

    // function shortenUrl(url){
    //     let urlforApi = `${apiUrl}${url}`
    //     // https://api.shrtco.de/v2/shorten?url=
    //     // https://api-ssl.bitly.com/v4/shorten
    //      fetch("urlforApi")
    //     // //  {
    //     //     //  method: "POST",
    //     //      {'headers': 
    //     //         'Access-Control-Allow-Origin' : '*'})
    //     //         // 'Authorization': 'Bearer 3c471cf3f50af5250e7dc5214241f5329461b1fb',
    //     //         // 'Content-Type': 'application/JSON'
    //     //     //  },
    //     //     //  "long_url": "url"
    //     // //  })
    //      .then((resp) => resp.json())
    //      .then((json) => console.log(json))
    //      }

function shortenUrl(url) {
        // let urlforApi = `${apiUrl}${url}`
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`) //API call is initiated to the API url that is interpolated with the user submitted url
            .then(resp => resp.json())
            .then(json => {
                let infoJson = json
                console.log(infoJson)
                responseChecker(infoJson)
                // console.log('json', json)
                // for (const apiInfo in json) {
                //     console.log(apiInfo)
                // }


            // });
        })}

responseChecker(infoJson) {
    if (infoJson)


}

// function addUrltoDOM(shortUrl, fullUrl) {
//     console.log('s', shortUrl, 'f', fullUrl)

// //     let p = document.createElement('p')
// //     p.text = 
// // 
// }