const API_KEY = '4b7ebfad537d47feaf22c19f0912d142';
const apiURL = new URL("https://newsapi.org/v2/everything");


document.getElementById("search-news").addEventListener("click", function() {
    load_news();
});

function load_news() {
    console.log('here I am');

    var xhttp = new XMLHttpRequest();

    document.getElementById("news-details").innerHTML = '';

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var json_response = JSON.parse(this.responseText);
            console.log(json_response);
            json_response["articles"].forEach((element) => {
                var news =
                    '<div class="news-show">' +
                    '<div class="col1">' +
                    ((element["urlToImage"]) ? '<img class="news-img" id="news-img" src="' + element["urlToImage"] + '" alt="" />' : '') +
                    '<p class="title">' + element["title"] + '</p>' +
                    '<p>' + element["description"] + '</p>' +
                    '<p>Author:' + element["author"] + '</p>' +
                    '<p>Published At:' + element["publishedAt"] + '</p>' +
                    "</div>" +
                    "</div>";
                document.getElementById("news-details").insertAdjacentHTML('beforeend', news);
            });
        }
    };
    var searchValue = document.getElementById("search").value;
    var sortBy = document.getElementById("sortBy").value;
    var date = new Date();
    var date2 = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    apiURL.searchParams.set("q", searchValue);
    apiURL.searchParams.set(`from`, date2);
    apiURL.searchParams.set(`sortBy`, sortBy);
    apiURL.searchParams.set(`apiKey`, API_KEY);
    xhttp.open(
        "GET",
        apiURL,
        true
    );
    xhttp.send();
}