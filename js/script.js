// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var gif_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"


$("#search-button").click(function(){
  $.ajax({
    url: gif_url,
    method: "GET",
    success: function(response) {
    
    
        //console.log(response.data);
        
        $("body").append("<img src=" + reponse.data.images.fixed_height_still.url + ">");
    }  
  });
});

