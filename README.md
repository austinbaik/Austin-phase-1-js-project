Thank you for checking out "Simply URL Shortener" (SUS) Web App! 


DESCRIPTION OF SUS:

    "Simply URL Shortener" is a simply web application that allows users to shorten a URL. Users are able to request any long URL to be shortened by submitting a URL. The web app returns both the shortened URL and original URL on the web page. Users can add (or remove) multiple URLs until the user either closes or manually refreshes the webpage. 


HOW TO RUN SUS:

    Download the web app package from GitHub. 
    GitHub Repository URL: https://github.com/austinbaik/Austin-phase-1-js-project/tree/main

    Open index.html file in the web browser. After the page loads, you will see "Enter URL Here:" with a "url" entry box. 

    Type or paste your url into the url field. Then click the 'Submit' button. The web app will make an API request to shorten the url. 

    If the url is NOT VALID and the API returns and ERROR, you will be prompted with a pop-up alert "This is not a valid URL, try again."

    If the url is VALID and the API request successfully returns a response, the web app will populate the shortened URL and the original URL on the page, along with a "X" button. 

    The web app allows you to click on either URL to navigate to that URL. Note that the links will open in a new browser page. The web app page will remain. 

    Each additional URL that is shortened will be added to the web page. 

    If you wish to remove a specific shortened URL, click the 'X' underneath the corresponding URLs and they will be removed from the web page.


API: 
    
    SUS uses a publicly available API (https://shrtco.de/) to shorten links. 

    API Terms of Use on shrtco.de: https://shrtco.de/tos
    
    API Format: https://api.shrtco.de/v2/shorten?url=
        API takes in web URL as argument 

    GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
        (Please note that SUS uses a 'fetch' request to the API)

    Response:
                {
                "ok": true,
                "result": {
                    "code": "KCveN",
                    "short_link": "shrtco.de/KCveN",
                    "full_short_link": "https://shrtco.de/KCveN",
                    "short_link2": "9qr.de/KCveN",
                    "full_short_link2": "https://9qr.de/KCveN",
                    "share_link": "shrtco.de/share/KCveN",
                    "full_share_link": "https://shrtco.de/share/KCveN",
                    "original_link": "http://example.org/very/long/link.html"
                }
                }

    SUS renders only the "short_link" and "original_link" API response 

<!-- 
Python Server 
https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server
https://www.python.org/downloads/release/python-3104/ -->