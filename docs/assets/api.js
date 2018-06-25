
var playerName = ["Cristiano Ronaldo", "Messi", "David Beckhem"];




function renderButtons(){

    // Delete the content inside the giphy-btn-view div prior to adding new animal buttons
    // (this is necessary otherwise you will have repeat buttons)
      $("#button-div").empty();
    //Loop all in Animal array
    for (var i = 0; i < playerName.length; i++) {
        console.log(playerName[i]);
        var btn = $("<button>");
        btn.attr("player-name", playerName[i]);
        btn.addClass("player");
        btn.css("margin", "5px")
        btn.addClass("btn btn-primary");
        btn.text(playerName[i]);
        $("#button-div").append(btn);
    }
}





function displayPlayerInfo() {

    $("#gif-display").empty();

    var sportsPlayers = $(this).attr("player-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sportsPlayers + "&api_key=hVsFi9ehA7uyv7PDoIqGVH4dQNESvsrj&limit=10";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);
        var promiseData = response.data;
       
        dataDisplay(promiseData);


    });
}


   function dataDisplay(source) {

            var row1 = $("<div>");
            row1.addClass("row");
            row1.attr("id", "rowA");


            var row2 = $("<div>");
            row2.addClass("row");
            row2.attr("id", "rowB");

            var row3 = $("<div>");
            row3.addClass("row");
            row3.attr("id", "rowC");


            $("#gif-display").append(row1);
            $("#gif-display").append(row2);
            $("#gif-display").append(row3);


            for (var i = 0; i < source.length; i++) {
                var playerDiv = $("<div>");
                playerDiv.addClass("playerResult");
                var img = $("<img>");
                img.addClass("imgGif");
                img.addClass("col-lg-12");
                

                // ===========

                if (i < 3) {
                    playerDiv.addClass("row1");
                    playerDiv.addClass("col-lg-3");
                    $("#rowA").append(playerDiv);




                } else if (i >= 3 && i < 6) {
                    playerDiv.addClass("row2");
                    playerDiv.addClass("col-lg-3");
                    $("#rowC").append(playerDiv);

                }
                else if (i >= 6 && i < 9) {
                    playerDiv.addClass("row3");
                    playerDiv.addClass("col-lg-3");
                    $("#rowB").append(playerDiv);

                }


                // ===========

                $(".row1")



                var imgSrc = source[i].images.original.url;
                var dataStill = source[i].images.fixed_height_still.url;
                img.attr("data-still", dataStill);
                console.log("Data Still added for image # " + i);
                var dataPlayer = source[i].images.fixed_height.url;
                img.attr("data-player", dataPlayer);
                var dataState = "still";
                img.attr("data-state", dataState);
                img.attr("src", imgSrc);
                var rating = ("Rating: " + source[i].rating);
                var pOne = $("<p>");
                pOne.text(rating)
                playerDiv.prepend(img, pOne);
                


            }
        }



        $("#add-player").on("click", function(event) {
           
            event.preventDefault();
    
           
            var sportsPlayer= $("#player-input").val().trim();
            console.log("UserIP is "+sportsPlayer);
           
            playerName.push(sportsPlayer);
            var abc = "";
            
            $("#player-input").val(abc);
           
            renderButtons();
          });
    
   
            renderButtons();
    
   
    $(document).on("click", ".player", displayPlayerInfo);
    
    
    // $(document).on("click", ".imgGif", pauseAndPlay);


        
