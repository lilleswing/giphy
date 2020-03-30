// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

function selectRandomUrlFromJson(data) {
    data = data['data']
    let myIndex = Math.floor(Math.random() * data.length);
    let pictureUrl = data[myIndex]['images']['downsized_large']['url'];
    return pictureUrl
}

function constructGiphyUrl(searchTerm) {
    return "https://api.giphy.com/v1/gifs/search?q=" + searchTerm
        + "&rating=pg&api_key=dc6zaTOxFJmzC";
}

function getSearchTerm() {
    return $("#search-term").val();
}

function updateHtmlWithPicture(pictureUrl) {
    console.log(pictureUrl);
    let imgHtml = "<img id='gif' src='" + pictureUrl + "' />";
    $("#gif-location").html(imgHtml);
}

function setGifForTerm(searchTerm) {
    let url = constructGiphyUrl(searchTerm);
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let pictureUrl = selectRandomUrlFromJson(data);
            updateHtmlWithPicture(pictureUrl);
        });
}

$("#search-button").click(function () {
    let searchTerm = getSearchTerm();
    setGifForTerm(searchTerm);
});

