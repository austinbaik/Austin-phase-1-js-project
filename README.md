Thank you for checking out "Simply URL Shortener" (SUS) Web App! 

Description of SUS:

    "Simply URL Shortener" is a simply web application that allows users to shorten a URL. Users are able to request any long URL to be shortened by submitting a URL. The web app returns both the shortened URL and original URL on the web page. Users can add (or remove) multiple URLs until the user either closes or manually refreshes the webpage. 

How to Run SUS:

    Download the 
    GitHub Repository URL: https://github.com/austinbaik/Austin-phase-1-js-project/tree/main

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