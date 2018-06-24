
var playerName =["Cristiano Ronaldo" , "Messi" , "David Beckhem"];



function displayPlayerInfo() {

    $("#gif-display").empty();

var sportsPlayers = $(this).attr("player-name");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sportsPlayers + "&api_key=hVsFi9ehA7uyv7PDoIqGVH4dQNESvsrj&limit=10";



$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    for (i = 0; i < response.data.length; i++) {
        
        var imageUrl = response.data[i].images.original.url;
        var imgInfo = JSON.stringify(response.data[i].slug);

        // Creating and storing an image tag
        var playerImage = $("<img>");
        // Setting the Image src attribute to imageUrl
        playerImage.attr("src", imageUrl);


        var imgDiv = $("<div>");

        imgDiv = playerImage;
        
        $(imgDiv).css('float:left');

    

        $("#gif-display").prepend(imgInfo,imgDiv,"<span>");

        // Prepending the Image to the images div
        // $("#gif-display").prepend("<span>", imgInfo, "<p>", playerImage, "<p>");


    }

});
}





function renderButton() {

    $("#button-div").empty();
    
    for (var i = 0; i < playerName.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        
        a.addClass("player-btn");
        a.addClass("btn-primary");
        
        // Adding a data-attribute
        a.attr("player-name", playerName[i]);
        // Providing the initial button text
        a.text(playerName[i]);
       
        $("#button-div").append("<span>",a);
      }
}





$("#add-player").on("click", function(event){
event.preventDefault();
 
var sportsPlayers = $("#player-input").val().trim();

playerName.push(sportsPlayers);

renderButton();
});

$(document).on("click" , ".player-btn" , displayPlayerInfo );

renderButton();
